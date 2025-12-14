import { useState, createContext, useCallback, useContext } from 'react'
import './App.css'


const BulbContext =  createContext();
export function BulbProvider({children})
{
  const [bulbOn, setbulbOn] = useState(true);
  return <BulbContext.Provider value={{
    bulbOn: bulbOn,
    setbulbOn: setbulbOn
  }}>
    {children}
  </BulbContext.Provider>
}
function App() {
  
  const [bulbOn, setbulbOn] = useState(true)
 
  return <div>
    <BulbProvider value={{
      bulbOn: bulbOn,
      setbulbOn: setbulbOn
    }}>
      <Light  />
    </BulbProvider>
      
  </div>
}

function Light({bulbOn, setbulbOn}){
  return <div>
    <LightBulb bulbOn={bulbOn} />
    <LightSwitch bulbOn={bulbOn} setbulbOn={setbulbOn} />
  </div>
}

function LightBulb(){
  const {bulbOn} =useContext(BulbContext);
  return <div>
    {bulbOn ? "Bulb on ": "Bulb off"}
  </div>
}

function LightSwitch(){
  const {bulbOn, setbulbOn} =useContext(BulbContext);
  function toggle(){
    setbulbOn(!bulbOn)
  }
  return <div>
    <button onClick={toggle}>Toggle the Bulb </button>
  </div>
}
export default App
