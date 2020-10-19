import React from 'react';

const Todos = (props) => {
    const todoList = props.todos.length ? (
        props.todos.map(todo => {
            return (
                <div className="collection-item" key={todo.id}>
                    <span onClick={()=> {props.deleteTodo(todo.id)}}>{todo.content}</span>

                </div>  )
        })
    ) : (
        <p className="msg center"> No todos for you</p>
    );


    //console.log(props.todos)
    return (
        <div className="todos collection">
            {todoList}


        </div>


    )
}

export default Todos;