export const InfoAdmin = ({ user, onLogout }) => {
  return (
    <div className="flex items-center gap-4">
      <div>
        <p className="text-sm">Conectado como <span className='font-semibold'>{user?.name}</span></p>
        <p className='text-xs text-gray-200'>{user?.isAdmin ? 'Administrador' : 'Usuario'}</p>
      </div>
      <button className="bg-red-500 text-white px-3 py-1 rounded" onClick={onLogout}>Logout</button>
    </div>
  )
}


