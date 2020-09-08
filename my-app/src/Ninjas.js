import React from 'react';

function Ninjas (props){

    const NinjaList = props.ninjas.map(ninja =>{
        if (ninja.age > 23){
         return (
          <div className="ninja" key={ninja.id}>
               <div>Name: {ninja.name}</div>
               <div>Age: {ninja.age}</div>
               <div>Belt: {ninja.belt}</div>
          </div>
        )
    }
         else {
           return null
        }
    })

    return(
        <div className="ninja-list">
            {NinjaList}
        </div>
    ) 

    

    
}

export default Ninjas;