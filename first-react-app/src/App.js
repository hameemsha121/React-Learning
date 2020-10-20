import React,{useState} from 'react';
import Tweet from './Tweet'

function App(){
 const [users,setUsers] = useState([
   {name:'Ed', message:'You are too good'},
   {name:'jon snow',message:'king in the north'},
   {name:'Hameemsha H', message:'I am awsome'}
 ]);
return(
  <div className="App">
    {users.map(user=>(
      <Tweet name={user.name} message={user.message}/>
    ))}
  </div>
)

}

export default App;