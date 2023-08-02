import logo from './logo.svg';
import './App.css';
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
        }, 3000)
    },[])
  return (
    <div className="App">
        {loading === true
        ?
            <p>Loading...</p>
        :
        <>
            {photo?.map((i,j) => (
                <div key={j}>
                    <div>{i?.watch}</div>
                </div>
            ))}
        </>
        }
    </div>
  );
}

export default App;
