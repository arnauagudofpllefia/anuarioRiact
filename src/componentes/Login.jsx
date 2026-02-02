import { useState } from "react";

export const Login = ({ onLogin }) => {
  const [usuario, setUsuario] = useState("")
  const [contra, setContra] = useState("")

  const verificar = (e) => {
    e.preventDefault()
    if (usuario === "admin" && contra === "admin123") {
      onLogin({ name: usuario, isAdmin: true })
    } else if (usuario === "user" && contra === "user123") {
      onLogin({ name: usuario, isAdmin: false })
    } else {
      alert("Nombre o contraseña incorrectos")
    }
  }

  return (
    <form onSubmit={verificar} className="space-y-2">
      <input
        className="border p-2 w-full bg-white text-black rounded"
        placeholder="Usuario"
        value={usuario}
        onChange={e => setUsuario(e.target.value)}
      />
      <input
        type="password"
        className="border p-2 w-full bg-white text-black rounded"
        placeholder="Contraseña"
        value={contra}
        onChange={e => setContra(e.target.value)}
      />
      <button className="bg-blue-600 text-white px-4 py-2 rounded">
        Login
      </button>
    </form>
  )
}


