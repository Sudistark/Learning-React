import React from 'react';

function Ninjas (props){

    const NinjaList = props.ninjas.map(ninja =>{
        return (
        <div className="ninja" key={ninja.id}>
            <div>Name: {ninja.name}</div>
            <div>Age: {ninja.age}</div>
            <div>Belt: {ninja.belt}</div>
        </div>
        )
    
    })

    return(
        <div className="ninja-list">
            {NinjaList}
        </div>
    ) 

    

    
}

export default Ninjas;