import Alumno from './Alumno'
import Avatar from './Avatar'

export default function ListaAlumnos({alumnos}) {

    
    return (
        <div className=' flex g-[20px] justify-center'>
            {
                alumnos.map((a,index)=>(
                    <Alumno key={index} nombre={a.nombre} apellidos={a.apellidos} promo={a.promo} curso={a.curso}>

                        <Avatar url={a.url}/>
                    </Alumno>
                ))
            }
        </div>
        

    )
}