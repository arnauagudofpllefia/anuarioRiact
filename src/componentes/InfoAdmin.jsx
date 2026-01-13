export const InfoAdmin = ({ user, onLogout }) => {
  return (
    <div className=" justify-center items-center p-2 mb-4">
      <h2>Conectado como {user?.name}</h2>
      <button className="bg-red-500 text-white px-3 py-1 rounded " onClick={onLogout}>Logout</button>
    </div>
  )
}


