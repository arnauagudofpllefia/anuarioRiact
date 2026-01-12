export default function FormularioAlumno({}) {
    return (
        
        <div>
            <form action="">
                <label id="nombre">Nombre:</label>
                <input type="text" required />

                <label id="apellidos">Apellidos:</label>
                <input type="text" required/>

                <label>Promoción:</label>
                <select name="promocion" id="promocion" required>
                    <option value="24/25">24/25</option>
                    <option value="25/26">25/26</option>
                    <option value="26/27">26/27</option>
                    <option value="27/28">27/28</option>
                </select>

                <label>Ciclo:</label>
                <select name="ciclo" id="ciclo" required>
                    <option value="DAW">DAW</option>
                    <option value="DAM">DAM</option>
                    <option value="ASIR">ASIR</option>
                </select>

                <label>Url:</label>
                <input type="url" required/>
            </form>
        </div>
    )
}