import React, {Component} from 'react';
import axios from 'axios';

class Home extends Component{

    state = {
        posts: []
    }

    //life cycle hook component
    componentDidMount(){
        //Async
        //it returns a pormise object, then method is fired when we have completed the line 9 
        axios.get('https://jsonplaceholder.typicode.com/posts')
           .then(res => {
               console.log(res)
               this.setState({
                   posts: res.data.slice(0,10)
               })
           })

    }


    render(){

        const {posts} = this.state;
        const postLists = posts.length ? (
            posts.map(post => {
                return(
                    <div className="post card" key ={post.id}>
                        <div className="card-content">
                            <span className="card-title">{post.title}</span>
                            <p> {post.body}</p>
                        </div>
                    </div>
                )
            })

        ): (
            <div className="center">No posts to show :(</div>

        )


        return(
            <div className="container">
                <h4 className="center">Home</h4>
                {postLists}
            </div>
        )
    }
}

export default Home;