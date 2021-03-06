import "./styles.css";
import List from'./Components/List'
import Data from './Components/Data'
import { useState } from "react";
const App = () => {
  const [person,setPerson]=useState(Data)
  console.log(person)
  return (
    <div className="App">
      <div className="list-area">
        <h1>{person.length} birthdays today</h1>
        <List value={person}/> 
        <button className="button-clr" onClick={()=>setPerson([])}>Clear All</button>
      </div>
    </div>
  );
};
export default App;
