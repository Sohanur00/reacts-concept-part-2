
import './App.css'
import Counter from './counter'
import Team from './Team'
import User from './user'
import Friends from './friends'

function App() {

  function handleClick()
{

  alert('btn clicked')
}

const handleClick2 = () =>{
alert('button 2 clicked')


}


  return (
    <>
   
      <h1> React Core Concepts 2</h1>
     
      <Friends></Friends>
      <User></User>
      <Team></Team>
<Counter></Counter>


   <button onClick={handleClick}>click me</button>
   <button onClick={handleClick2}>click me2</button>
   <button onClick={() => {alert('its me third button')}}>click me3rd</button>


    </>
  )
}

export default App
