import { useState } from 'react';
import './App.css';
import { ATTRIBUTE_LIST, CLASS_LIST, SKILL_LIST } from './consts';


function App() {
  const strength = useState<number>(10);
  const dexterity = useState<number>(10);
  const constitution = useState<number>(10);
  const intelligence = useState<number>(10);
  const wisdom = useState<number>(10);
  const charisma = useState<number>(10);
  const stateList = [strength, dexterity, constitution, intelligence, wisdom, charisma];
  const [selectedClass, setSelectedClass] = useState(null);

  const meetsReqs = (name) => {
    for (let i = 0; i < stateList.length; i++) {
      if (stateList[i][0] < CLASS_LIST[name][ATTRIBUTE_LIST[i]]) {
        return false;
      }
    };
    return true;
  };

  const displayClassReqs = (name) => {
    return (
      <div>
        <h3>{name}</h3>
        <ul>
          {ATTRIBUTE_LIST.map((attribute, index) => (
            <li key={index}>
              {attribute}: {CLASS_LIST[name][attribute]}
            </li>
          ))}
        </ul>
      </div>
    );
  };


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
              {` (Modifier: ${Math.floor((content[0] - 10) / 2)})`}
              <button onClick={() => content[1](content[0]+1)}>+</button>
              <button onClick={() => content[1](content[0]-1)}>-</button>
            </div>
          ))}
        </div>
        <div className="App-div">
          <p onClick={() => setSelectedClass('Barbarian')}>Barbarian {meetsReqs('Barbarian') ? '✅' : null}</p>
          <p onClick={() => setSelectedClass('Wizard')}>Wizard {meetsReqs('Wizard') ? '✅' : null}</p>
          <p onClick={() => setSelectedClass('Bard')}>Bard {meetsReqs('Bard') ? '✅' : null}</p>
        </div>
        <div className="App-div">
          {selectedClass && displayClassReqs(selectedClass)}
        </div>
      </section>   
    </div>
  );
}

export default App;