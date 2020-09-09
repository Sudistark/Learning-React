//class base componet
import React, {Component} from 'react';



class AddNinja extends Component{

    state = {
        name: null, age:null, belt: null
    }

    handleChange = (e) => {
        //console.log(e.value);
        this.setState({
            [e.target.id] : e.target.value  //to get the id of the lable tag
        })
    }

    handleSubmit = (e) => {
        e.preventDefault(); //disallowing the page to get reload when the event is fired
        console.log(this.state)
    }



    render(){
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                <br/>
                    <lable htmlFor="name">Name:</lable>
                    <input type="text" id="name" onChange={this.handleChange}/>
                    <lable htmlFor="age">Age:</lable>
                    <input type="text" id="age" onChange={this.handleChange}/>
                    <lable htmlFor="Belt">Belt:</lable>
                    <input type="text" id="Belt" onChange={this.handleChange}/>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}


export default AddNinja;