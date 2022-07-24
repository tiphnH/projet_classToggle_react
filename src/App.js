import React, {useState} from "react"
import"./Style.css";

export default function App() {

  const [anim, setAnime] = useState(false);

  const classToggle = () => {
    setAnime(!anim)
  }
  return (
    <div className="App">
      <div className={`box ${anim? "animclasse": ""}`} />
      <button onClick={classToggle}> change la classe</button>
    </div>
  );
}

