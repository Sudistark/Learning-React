import React, { Component } from 'react';
import Ninjas from './Ninjas'   //Importing that js file 
import AddNinja from './AddNinja'

class App extends Component{
  
  state = {
     ninjas : [
    
    {"name":"Shirleyy", "age":"25", "belt":"none", "id":1},
    {"name":"Sudhanshu", "age": "18", "belt":"none ;)", "id":2}

  ]
}

  addNinja = (ninja) => {
    //console.log(ninja)
    let ninjas2 = [...this.state.ninjas, ninja];// spread operator- copying the ninja array using spread operator and then adding more element into that array 'ninja'
    console.log(ninjas2)
    ninja.id = Math.random(); //assigning an unique id 

    this.setState({
      ninjas: ninjas2
    })
  }

  deleteNinja = (id) => {
    //console.log(`You want to delete the ninja whoose id is ${id}`)
    //filter is an undesctructive way, it craetes a copy of the array
    let ninjas2 = this.state.ninjas.filter(ninja=> {
      return ninja.id !== id;
      //If filter func returns false, it will filter out a particular elemet from the array
    })

    this.setState({
      ninjas: ninjas2
    })

  }

  render(){
  
  return (
    <div className="App">
       <h1>My first react app</h1>
       <p>Welcome onto the board :) sudi</p>
       <Ninjas ninjas={this.state.ninjas} deleteNinja={this.deleteNinja}/>
       <AddNinja addNinja={this.addNinja}/> {/* passing the addNinja function as a props*/}
    </div>
  );
 }
}
export default App;
