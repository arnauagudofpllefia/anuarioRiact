import './App.css'
import { useState } from 'react'
import SelectorPromocion from './componentes/SelectorPromocion'
import FiltroNombre from './componentes/FiltroNombre'
import ListaAlumnos from './componentes/ListaAlumnos'
import FormularioAlumno from './componentes/FormularioAlumno'
import { Login } from './componentes/Login'
import { InfoAdmin } from './componentes/InfoAdmin'


export default function App() {
  const datosPromo = ["24/25", "25/26", "26/27", "27/28"]
  const alumnos = [
    {
      nombre: "Pepe",
      apellidos: "Piedra Roja",
      promo: "24/25",
      curso: "DAW",
      url: "https://png.pngtree.com/png-vector/20220709/ourmid/pngtree-businessman-user-avatar-wearing-suit-with-red-tie-png-image_5809521.png"
    },
    {
      nombre: "María",
      apellidos: "Fernandez Matinez",
      promo: "25/26",
      curso: "DAW",
      url: "https://png.pngtree.com/png-vector/20230509/ourmid/pngtree-avatar-woman-glasses-vector-png-image_7090474.png"
    },
    {
      nombre: "Juana",
      apellidos: "Fernandez Matinez",
      promo: "24/25",
      curso: "DAW",
      url: "https://images.icon-icons.com/2859/PNG/512/avatar_face_girl_female_woman_profile_smiley_happy_people_icon_181665.png"
    },
    {
      nombre: "Pedrito",
      apellidos: "Fernandez Matinez",
      promo: "25/26",
      curso: "DAW",
      url: "https://cdn3d.iconscout.com/3d/premium/thumb/avatar-chico-3d-icon-png-download-7944091.png"
    },
    {
      nombre: "Lucía",
      apellidos: "Gómez Ruiz",
      promo: "24/25",
      curso: "DAM",
      url: "https://cdn-icons-png.flaticon.com/512/4140/4140048.png"
    },
    {
      nombre: "Carlos",
      apellidos: "Romero González",
      promo: "26/27",
      curso: "ASIR",
      url: "https://cdn-icons-png.flaticon.com/512/4140/4140037.png"
    },
    {
      nombre: "Sofía",
      apellidos: "Martín Santos",
      promo: "25/26",
      curso: "DAM",
      url: "https://cdn-icons-png.flaticon.com/512/4140/4140053.png"
    },
    {
      nombre: "Andrés",
      apellidos: "Peralta Saavedra",
      promo: "27/28",
      curso: "ASIR",
      url: "https://cdn-icons-png.flaticon.com/512/5556/5556468.png"
    },
    {
      nombre: "Laura",
      apellidos: "Vega López",
      promo: "26/27",
      curso: "DAW",
      url: "https://cdn-icons-png.flaticon.com/512/5556/5556499.png"
    },
    {
      nombre: "Javier",
      apellidos: "Hernández Molina",
      promo: "25/26",
      curso: "DAW",
      url: "https://cdn-icons-png.flaticon.com/512/5556/5556453.png"
    },
    {
      nombre: "Daniela",
      apellidos: "Castro Valdés",
      promo: "27/28",
      curso: "DAM",
      url: "https://cdn-icons-png.flaticon.com/512/5556/5556482.png"
    },
    {
      nombre: "Miguel",
      apellidos: "Álvarez Rubio",
      promo: "26/27",
      curso: "ASIR",
      url: "https://cdn-icons-png.flaticon.com/512/5556/5556473.png"
    }
  ]

  const [promocion, setPromocion] = useState(datosPromo[0])
  const [ciclo, setCiclo] = useState()
  const [nombre, setNombre] = useState("")
  const [user, setUser] = useState(null)

 const alumnosFiltrados = alumnos.filter((al) => {
  const okP = promocion === "" || al.promo === promocion

  const textoBusqueda = nombre.toLowerCase()
  const nombreCompleto = `${al.nombre} ${al.apellidos}`.toLowerCase()

  const okN = nombreCompleto.includes(textoBusqueda)

  return okP && okN
})


  function controlPromocion(e) {
    console.log(e.target.value)
    setPromocion(e.target.value)
  }

  function controlNombre(e) {
    setNombre(e.target.value)
  }

  const ciclosFiltrados = alumnos.filter((c) => c.curso)

  if (!user) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="w-80">
          <h1 className="text-2xl mb-4">Iniciar sesión</h1>
          <Login onLogin={setUser} />
        </div>
      </div>
    )
  }

  return (
    <div className=' justify-items-center mt-[200px]'>
      <InfoAdmin user={user} onLogout={() => setUser(null)} />

      <h1>Promoción: {promocion}</h1>
      <SelectorPromocion controlPromocion={controlPromocion} datosPromo={datosPromo}></SelectorPromocion>
      <h1>Buscando por nombre: {nombre}</h1>
      <FiltroNombre controlNombre={controlNombre}></FiltroNombre>

      <ListaAlumnos alumnos={alumnosFiltrados}></ListaAlumnos>

    </div>
  )
}