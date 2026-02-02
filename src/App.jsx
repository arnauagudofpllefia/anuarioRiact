import './App.css'
import { useState, useEffect } from 'react'
import SelectorPromocion from './componentes/SelectorPromocion'
import FiltroNombre from './componentes/FiltroNombre'
import ListaAlumnos from './componentes/ListaAlumnos'
import FormularioAlumno from './componentes/FormularioAlumno'
import { Login } from './componentes/Login'
import { InfoAdmin } from './componentes/InfoAdmin'
import { alumnosService } from './services/alumnosServices'
import initialData from './data/alumnos.json'

export default function App() {
  const [promocion, setPromocion] = useState('')
  const [nombre, setNombre] = useState("")
  const [user, setUser] = useState(null)
  const [alumnos, setAlumnos] = useState([])
  const [formOpen, setFormOpen] = useState(false)
  const [editingAlumno, setEditingAlumno] = useState(null)

  useEffect(() => {
    // cargar autenticación
    const rawUser = localStorage.getItem('user')
    if (rawUser) setUser(JSON.parse(rawUser))

    // cargar alumnos
    const saved = alumnosService.getAll()
    if (saved && saved.length) {
      setAlumnos(saved)
    } else {
      // inicializar desde JSON
      const withIds = initialData.map(a => ({ id: Date.now() + Math.random(), ...a }))
      alumnosService.saveAll(withIds)
      setAlumnos(withIds)
    }
  }, [])

  useEffect(() => {
    // persistir usuarios
    if (user) localStorage.setItem('user', JSON.stringify(user))
    else localStorage.removeItem('user')
  }, [user])

  function controlPromocion(e) {
    setPromocion(e.target.value)
  }

  function controlNombre(e) {
    setNombre(e.target.value)
  }

  const alumnosFiltrados = alumnos.filter((al) => {
    const okP = promocion === '' || al.promo === promocion
    const textoBusqueda = nombre.toLowerCase()
    const nombreCompleto = `${al.nombre} ${al.apellidos}`.toLowerCase()
    const okN = nombreCompleto.includes(textoBusqueda)
    return okP && okN
  })

  function handleLogin(userObj) {
    setUser(userObj)
  }

  function handleLogout() {
    setUser(null)
  }

  function crearAlumno(datos) {
    const nuevo = alumnosService.create(datos)
    setAlumnos(alumnosService.getAll())
    setFormOpen(false)
    return nuevo
  }

  function editarAlumno(id, datos) {
    const actualizado = alumnosService.update(id, datos)
    setAlumnos(alumnosService.getAll())
    setFormOpen(false)
    setEditingAlumno(null)
    return actualizado
  }

  function eliminarAlumno(id) {
    if (!confirm('¿Eliminar alumno?')) return
    alumnosService.delete(id)
    setAlumnos(alumnosService.getAll())
  }

  function openCrear() {
    setEditingAlumno(null)
    setFormOpen(true)
  }

  function openEditar(alumno) {
    setEditingAlumno(alumno)
    setFormOpen(true)
  }

  if (!user) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="w-80">
          <h1 className="text-2xl mb-4">Iniciar sesión</h1>
          <Login onLogin={handleLogin} />
        </div>
      </div>
    )
  }

  const promociones = Array.from(new Set(alumnos.map(a => a.promo))).sort()

  return (
    <div className="min-h-screen">
      <header className="bg-gradient-to-r from-sky-700 to-indigo-800 text-white shadow-lg">
        <div className="container mx-auto max-w-6xl p-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">Anuario Alumnos</h1>
            <p className="text-sm opacity-90">Gestiona alumnos por promoción y ciclo</p>
          </div>
          <div className="flex items-center gap-4">
            <InfoAdmin user={user} onLogout={handleLogout} />
            {user?.isAdmin && (
              <button onClick={openCrear} className="bg-white text-sky-700 px-4 py-2 rounded shadow">Añadir alumno</button>
            )}
          </div>
        </div>
      </header>

      <main className="container mx-auto max-w-6xl p-6">
        <div className="mb-6 flex flex-col md:flex-row md:items-center md:gap-6">
          <div className="flex items-center gap-4">
            <SelectorPromocion controlPromocion={controlPromocion} datosPromo={["", ...promociones]} />
            <FiltroNombre controlNombre={controlNombre} />
          </div>
        </div>

        {formOpen && (
          <div className="mb-6">
            <FormularioAlumno alumno={editingAlumno} onSubmit={(data) => editingAlumno ? editarAlumno(editingAlumno.id, data) : crearAlumno(data)} onCancel={() => { setFormOpen(false); setEditingAlumno(null) }} />
          </div>
        )}

        <ListaAlumnos alumnos={alumnosFiltrados} onEdit={openEditar} onDelete={eliminarAlumno} esAdmin={!!user?.isAdmin} />
      </main>
    </div>
  )
}