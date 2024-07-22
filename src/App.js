import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => { setKeyword(event.target.value) };

  console.log('I run all the time');
  useEffect(() => { console.log("Run Once") }, []);
  useEffect(() => { console.log("Run When keyword changes")}, [keyword]);
  useEffect(() => { console.log("Run When counter changes")}, [counter]);
  useEffect(() => { console.log("Run When keyword or counter changes")}, [keyword, counter]);

  return (
    <div>
      <input value={keyword} onChange={onChange} type="text" placeholder="search here..." />
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;
