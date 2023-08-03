import logo from './logo.svg';
import './App.css';
// import './assets/style/shop.scss'
import {Home} from "./pages/home";
import {useEffect, useState} from "react";
import RolexOne from './assets/images/rolex1.jpg'
import RolexTwo from './assets/images/rolex2.jpg'
import RolexTree from './assets/images/rolex3.webp'
function App() {
    const[photo, setphoto] = useState([
        {watch:RolexOne, id:1},
        {watch:RolexTwo, id:2},
        {watch:RolexTree, id:3}
    ])
    const [loading,setloading] = useState(true)
    useEffect(() => {
        setTimeout (() => {
            setloading(false)
        }, 1000)
    },[])
    const[number, setnumber] = useState(0)
    const plusNumber = () => {
        setnumber(number + 1)
    }
    const minusNumber = () => {
        setnumber(number - 1)
    }


  return (
    <div className="App">
        {loading === true
        ?
            <p>Loading...</p>
        :
        <div style={{display:"flex"}}>
            {photo.map((i, j) => (
                <div key={j}>
                    <div className='mainDiv'>
                        <img style={{height:400, margin:25}} src={i.watch} alt={`Rolex ${i.id}`} />
                        <div style={{paddingLeft:40}}>
                        <h1>Whatch for Man</h1>
                        <h2>1000$</h2>
                        </div>
                        <div style={{display:"flex",paddingLeft:60}}>
                             <button id={j + 1} onClick={plusNumber}>+</button>
                             <p>{number}</p>
                             <button onClick={minusNumber}>-</button>
                         </div>
                     </div>
                </div>
            ))}
        </div>
        }
    </div>
  );
}

export default App;
