import '../App.css'
export default function Alumno({ nombre, apellidos, promo, curso, children, onEdit, onDelete, esAdmin }) {
  return (
    <div className='max-w-xs w-full bg-[#0b1220] rounded-lg p-4 shadow hover:shadow-lg transform hover:scale-105 transition-all text-center'>
      {children}

      <div className='mt-3'>
        <p className='text-white font-semibold text-lg'>{nombre} {apellidos}</p>
        <p className='text-gray-300'>{promo}</p>
        <p className='text-gray-300'>{curso}</p>
      </div>

      {esAdmin && (
        <div className='mt-4 flex justify-center gap-4'>
          <button onClick={onEdit} className='text-green-300 hover:underline'>Editar</button>
          <button onClick={onDelete} className='text-red-400 hover:underline'>Eliminar</button>
        </div>
      )}

    </div>
  )
}  