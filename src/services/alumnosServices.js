export const alumnosService = {
  getAll: () => {
    const raw = localStorage.getItem('alumnos')
    return raw ? JSON.parse(raw) : []
  },

  saveAll: (alumnos) => {
    localStorage.setItem('alumnos', JSON.stringify(alumnos))
  },

  create: (alumno) => {
    const lista = alumnosService.getAll()
    const nuevo = { id: Date.now(), ...alumno }
    lista.push(nuevo)
    alumnosService.saveAll(lista)
    return nuevo
  },

  update: (id, datos) => {
    const lista = alumnosService.getAll()
    const idx = lista.findIndex(a => a.id === id)
    if (idx === -1) return null
    lista[idx] = { ...lista[idx], ...datos }
    alumnosService.saveAll(lista)
    return lista[idx]
  },

  delete: (id) => {
    const lista = alumnosService.getAll()
    const nueva = lista.filter(a => a.id !== id)
    alumnosService.saveAll(nueva)
    return lista.length !== nueva.length
  }
}
