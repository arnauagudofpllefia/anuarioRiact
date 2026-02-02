import Alumno from './Alumno'
import Avatar from './Avatar'

export default function ListaAlumnos({alumnos, onEdit, onDelete, esAdmin}) {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
      {alumnos.map((a) => (
        <Alumno key={a.id ?? `${a.nombre}-${a.apellidos}`} nombre={a.nombre} apellidos={a.apellidos} promo={a.promo} curso={a.curso} onEdit={() => onEdit(a)} onDelete={() => onDelete(a.id)} esAdmin={esAdmin}>
          <Avatar url={a.url} />
        </Alumno>
      ))}
    </div>
  )
} 