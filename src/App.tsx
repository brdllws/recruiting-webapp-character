import { useState } from 'react';
import './App.css';
import { ATTRIBUTE_LIST, CLASS_LIST, SKILL_LIST } from './consts';


function App() {
  const strength = useState<number>(0);
  const dexterity = useState<number>(0);
  const constitution = useState<number>(0);
  const intelligence = useState<number>(0);
  const wisdom = useState<number>(0);
  const charisma = useState<number>(0);
  const stateList = [strength, dexterity, constitution, intelligence, wisdom, charisma]
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Coding Exercise</h1>
      </header>
      <section className="App-section">
        <div className="App-div">
          {stateList.map((content, index) => (
            <div key={index}>
              {`${ATTRIBUTE_LIST[index]}: ${content[0]}`}
              <button onClick={() => content[1](content[0]+1)}>+</button>
              <button onClick={() => content[1](content[0]-1)}>-</button>
            </div>
          ))}
        </div>
      </section>   
    </div>
  );
}

export default App;