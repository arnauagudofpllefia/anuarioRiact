import '../App.css'
export default function Alumno({ nombre, apellidos, promo, curso, children }) {

    function enviarForm(e) {
        console.log("Formulario enviado")
    }


    return (

        <div className='border-[5px] border-blue-400 w-[300px] justify-items-center rounded-md'>
            {children}

            <p className=' text-white'>{nombre} {apellidos}</p>
            <p className=' text-white'>{promo}</p>
            <p className=' text-white'>{curso}</p>

            <button onClick={enviarForm()} className=' text-green-300 ml-[10px] cursor-pointer'>Edit</button>
            <button className='text-red-400 ml-[200px] cursor-pointer'>Delete</button>

        </div>

    )
}