export default function SelectorPromocion({ datosPromo, controlPromocion }) {
    console.log(datosPromo)

    return (

        <div>
            <select className=" p-2 bg-blue-500 rounded-full mb-5" onChange={controlPromocion}>
                {
                    datosPromo.map((p) => (
                        <option value={p} key={p}>Promoción: {p}</option>
                    ))
                }
            </select>
        </div>

    )
}