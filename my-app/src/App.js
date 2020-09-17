import React from 'react';
import Ninjas from './Ninjas'   //Importing that js file 
import AddNinja from './AddNinja'

function App (){
  
  state ={
     ninjas : [
    
    {"name":"Shirleyy", "age":"25", "belt":"none", "id":1},
    {"name":"Sudhanshu", "age": "18", "belt":"none ;)", "id":2}

  ]
}

  let addNinja = (ninja) => {
    //console.log(ninja)

    let ninjas2 = [...this.state.ninjas, ninja];// spread operator

    ninja.id = Math.random(); //assigning an unique id 

    this.setState({
      ninjas: ninjas2
    })



  }
  
  return (
    <div className="App">
       <h1>My first react app</h1>
       <p>Welcome onto the board :) sudi</p>
       <Ninjas ninjas={ninjas}/>
       <AddNinja addNinja={addNinja}/> {/* passing the addNinja function as a props*/}
    </div>
  );
}

export default App;
