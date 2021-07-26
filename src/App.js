import logo from './logo.svg';
import './App.css';
import{useState} from 'react'
import moon from './img/moon.png'
import sun from './img/sun.png'

function App() {
  const [mode,setmode]=useState(false)
  function handlermode (){
    setmode(!mode)
  }
  return (
    <div className={mode?'darkmode':'lightmode'}>
    <h2 className='titulo'>Dark Mode Challenge</h2>
    <div className='imagen'>
      {mode?<img src={moon} alt=''/>:<img src={sun} alt=''/>}
    </div>
    
    <div className='parrafos'>
    <p className='parra1'>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
    <p className='parra1'>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>

    </div>
     <div className='inputs'>
    <input
    className='inp'
    type='text'
    placeholder='Name'/>
     <input
     className='inp'
    type='text'
    placeholder='Email'/>
    </div>
    <div className='buttons'>
    <button className='exit' onClick={(e)=>handlermode()}>Exit</button>
    <button className='save' onClick={(e)=>handlermode()}>Save</button>
    </div>

    
</div>
  );
}

export default App;
