import { useState } from "react";

function App() {
  const [value, setValue] = useState("")
  const [toDos, setToDos] = useState([])
  const onChange = (event) => {
    setValue(event.target.value)
  }
  const onSubmit = (event) => {
    event.preventDefault();
    if (value === "") {
      return;
    }
    setValue("");
    setToDos((currentArray) => [...currentArray, value])
  }

  console.log(toDos)

  return (
    <div>
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input onChange={onChange}
          value={value}
          type="text"
          placeholder="Write your to do..." />
        <button>Add To Do</button>
      </form>
      <hr />
      <ul>
        {toDos.map((toDo, index) => {
          <li key={index}>{toDo}</li>
        }
        )}
      </ul>
    </div>
  )
}

export default App;