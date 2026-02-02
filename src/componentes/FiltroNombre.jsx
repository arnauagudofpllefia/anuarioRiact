export default function FiltroNombre({controlNombre}) {
    return (
        <input className='border p-2 rounded w-64 bg-white text-black' type="text" placeholder="Buscar por nombre o apellidos" onChange={controlNombre} />
    )
} 