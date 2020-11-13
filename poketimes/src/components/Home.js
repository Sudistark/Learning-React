import React, {Component} from 'react';
//import axios from 'axios';
import {Link} from 'react-router-dom';
import Pokeball from '../pokeball.png';
import {connect} from 'react-redux';


class Home extends Component{

    // state = {
    //     posts: []
    // }

    //life cycle hook component
    // componentDidMount(){
    //     //Async
    //     //it returns a pormise object, then method is fired when we have completed the line 9 
    //     axios.get('https://jsonplaceholder.typicode.com/posts')
    //        .then(res => {
    //            console.log(res)
    //            this.setState({
    //                posts: res.data.slice(0,10)
    //            })
    //        })

    // }


    render(){
        console.log(this.props)
        const {posts} = this.props;
        const postLists = posts.length ? (
            posts.map(post => {
                return(
                    <div className="post card" key ={post.id}>
                        <img src={Pokeball} alt="A Pokeball! Gotta catch em' all!"/>
                        <div className="card-content">
                            <Link to={'/'+ post.id}>
                                <span className="card-title red-text">{post.title}</span>
                            </Link>
                            <p> {post.body}</p>
                        </div>
                    </div>
                )
            })

        ): (
            <div className="center">No posts to show :(</div>

        )


        return(
            <div className="container home">
                <h4 className="center">Home</h4>
                {postLists}
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return{
    posts: state.posts
    }
}



export default connect(mapStateToProps)(Home);
//first calling the connect function