import "./styles.css";
import { useState } from "react";


export default function App({notes}) {
  const [notas,setNotas] = useState(notes)
  const [nuevaNota,setNuevasNotas] = useState()

  const handleSubmit = (event) => {
    event.preventDefault();
  
    const nueva = {
      id: notas.length + 1,
      content: nuevaNota,
      important: true
    }
    console.log(nueva)
    setNotas([...notas,nueva])
    setNuevasNotas('')
  }
  const handleChange = (event) => {

    setNuevasNotas(event.target.value)
  }
  return (
    <div className="App">
      <h1>Renderizar notas</h1>
      <ul>
        {notas.map((note) => {
          return (
            
            <li key={note.id}>
              {note.id} {note.content}{" "}
            </li>
            
            
          )
          ;
        })}
      </ul>
      <form onSubmit={handleSubmit}>
              <input onChange = {handleChange} value={nuevaNota} />
              <button type="submit">Añadir</button>
      </form>
    </div>
  );
}
