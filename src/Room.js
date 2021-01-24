import React,{useState} from 'react';
import './index.css';

function Room() {
    
    let [isLit,setLit] = useState(false);
    //const brightness = isLit? "lit" : "dark";
    let [isTemp,setTemp] = useState(72);



    return (
        <div className = {`room ${isLit? "lit" : 'dark'}`}> 
        The room is {isLit ? 'lit' :'dark'}
        
        <br />
        
        <button onClick = {() =>setLit(!isLit)}>
            Flip
        </button>
        
        <button onClick = {() =>setLit(isLit= true)}> On </button>

        <button onClick = {() =>setLit(isLit = false)}> OFF </button>
        <br />
        <br />
        Current Temperature is {isTemp}
        <br />
        <button onClick = {() => setTemp(++isTemp)}>Increase</button>
        <button onClick = {() => setTemp(--isTemp)}>Decrease</button>

        </div>
        
    );
}

export default Room;