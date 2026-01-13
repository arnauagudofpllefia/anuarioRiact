export const InfoAdmin = ({ onLogout }) => {
  return (
    <div className="flex justify-between items-center bg-gray-100 p-2">
      <h2>Connectat com administrador</h2>
      <button onClick={onLogout}>Logout</button>
    </div>
  )
}


