import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { addUserAction } from './store/actions/user.actions'
import React, {useState, useRef} from 'react';


function App() {
  const users = useSelector(state=>state.user)
  const dispatch  = useDispatch();

  const [inputState, _setInputState] = useState('')
  const inputRef = useRef(inputState);

  const setInputState=(value)=>{
    if(inputRef){
      inputRef.current = value;
      _setInputState(value)
    }

  }

  const handleChangeInput= (event)=>{
    console.log(inputRef.current)
    if(event.target.value){
      setInputState(event.target.value)
    }
    console.log(inputRef.current)

  }

  const handleClick= (event)=>{
    if(inputState){
      dispatch(addUserAction({ name: inputState }))
      setInputState('')
    }
  }


  const userListRendering = ()=>{
    return users.userList.map((item, index)=>{
      return <p key={index}> {item.name} </p>
    })
  }


  return <div>
    <div>
      <input type='text' value={inputState} onChange={handleChangeInput} />
      <button onClick={handleClick}>Ajouter</button>
    </div>
    <div>
      User list 
    </div>
    {userListRendering()}

    
    
    </div>
}


export default App;
