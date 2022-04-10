import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';


const App = () =>{
const [todos, setTodos] = useState([]);
const [list, setList] = useState("");

function handleClick(){
  if(list===""){
    return;
  }
  setTodos([...todos,list]);
  setList('');
}
function update(e){
  setList(e.target.value);
}
function deleteTodo(target){
  let newArr = todos.filter((value,index)=>index!=target);
  setTodos(newArr);
}
return(
  <div className = "App">
  <input 
  style={{
  display : 'flex',
  marginTop:50,
  marginLeft:50,
  marginRight:50 , 
  width: 270,
  height:30, 
  fontSize: 15, }}
  placeholder='Enter list items ' value={list} onChange = {update}/>

<button 
style={{
  marginLeft: 150,
   marginTop:10,
    width:100,
     height:50,
      border:'solid',
      backgroundColor:'pink'}} onClick={handleClick}>Add TodoS</button>
<div  style={{display: 'flex', flexDirection: 'column', alignItems:'center'}}>
  <h2 >Todo List: </h2>
  {
    todos.map((value,index)=>{
      return <div style={{display:'flex', justifyContent:'space-between', width:200}} key={index}>
        <h4 >{index+1}.{value}</h4>
        <button style={{marginTop:15, fontSize:15, width: 60, height:30}}
         onClick={()=>deleteTodo(index)}>Delete</button>
        </div>
    })
  }
  </div>

  </div>
);
}
export default App;