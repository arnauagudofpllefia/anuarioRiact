import { useState, useEffect } from 'react'

export default function FormularioAlumno({ alumno = null, onSubmit, onCancel }) {
  const [nombre, setNombre] = useState('')
  const [apellidos, setApellidos] = useState('')
  const [promo, setPromo] = useState('24/25')
  const [curso, setCurso] = useState('DAW')
  const [url, setUrl] = useState('')

  useEffect(() => {
    if (alumno) {
      setNombre(alumno.nombre || '')
      setApellidos(alumno.apellidos || '')
      setPromo(alumno.promo || '24/25')
      setCurso(alumno.curso || 'DAW')
      setUrl(alumno.url || '')
    } else {
      setNombre('')
      setApellidos('')
      setPromo('24/25')
      setCurso('DAW')
      setUrl('')
    }
  }, [alumno])

  async function submit(e) {
    e.preventDefault()
    if (!nombre.trim() || !apellidos.trim() || !promo || !curso || !url.trim()) {
      alert('Rellena todos los campos')
      return
    }
    const data = { nombre: nombre.trim(), apellidos: apellidos.trim(), promo, curso, url: url.trim() }
    try {
      await onSubmit(data)
    } catch (err) {
      alert('Error: ' + (err.message || 'No se pudo guardar'))
    }
  }

  return (
    <form onSubmit={submit} className="p-4 border rounded space-y-2 bg-white">
      <div>
        <label className="block text-black">Nombre</label>
        <input className="border p-2 w-full bg-white text-black rounded" value={nombre} onChange={e => setNombre(e.target.value)} />
      </div>

      <div>
        <label className="block text-black">Apellidos</label>
        <input className="border p-2 w-full bg-white text-black rounded" value={apellidos} onChange={e => setApellidos(e.target.value)} />
      </div>

      <div>
        <label className="block text-black">Promoción</label>
        <select className="border p-2 w-full bg-white text-black rounded" value={promo} onChange={e => setPromo(e.target.value)}>
          <option>24/25</option>
          <option>25/26</option>
          <option>26/27</option>
          <option>27/28</option>
        </select>
      </div>

      <div>
        <label className="block text-black">Ciclo</label>
        <select className="border p-2 w-full bg-white text-black rounded" value={curso} onChange={e => setCurso(e.target.value)}>
          <option>DAW</option>
          <option>SMX</option>
          <option>ARI</option>
          <option>IEA</option>
        </select>
      </div>

      <div>
        <label className="block text-black">Url imagen</label>
        <input className="border p-2 w-full bg-white text-black rounded" value={url} onChange={e => setUrl(e.target.value)} />
      </div>

      <div className="flex gap-2 mt-2">
        <button className="bg-blue-600 text-white px-4 py-2 rounded" type="submit">Guardar</button>
        <button type="button" className="bg-red-600 px-4 py-2 rounded" onClick={onCancel}>Cancelar</button>
      </div>
    </form>
  )
} 