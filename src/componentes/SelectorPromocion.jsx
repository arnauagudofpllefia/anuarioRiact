export default function SelectorPromocion({ datosPromo, controlPromocion }) {
  return (
    <div>
      <select className="border p-2 bg-white text-black rounded" onChange={controlPromocion}>
        {datosPromo.map((p) => (
          <option value={p} key={String(p)}>{p === "" ? "Todas" : p}</option>
        ))}
      </select>
    </div>
  )
} 