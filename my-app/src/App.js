import React from 'react';
import Ninjas from './Ninjas'   //Importing that js file 
import AddNinja from './AddNinja'

function App (){
  
  const ninjas = [
    
    {"name":"Shirleyy", "age":"25", "belt":"none", "id":1},
    {"name":"Sudhanshu", "age": "18", "belt":"none ;)", "id":2}

  ]
  
  return (
    <div className="App">
       <h1>My first react app</h1>
       <p>Welcome onto the board :) sudi</p>
       <Ninjas ninjas={ninjas}/>
       <AddNinja />
    </div>
  );
}

export default App;
