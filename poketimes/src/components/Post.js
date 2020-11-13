import React, {Component} from 'react';
//import axios from 'axios';
import {connect} from 'react-redux';

class Post extends Component{

    // state = {
    //     post: null
    // }

    

    // componentDidMount(){
    //     let id = this.props.match.params.postId;
    //     axios.get("https://jsonplaceholder.typicode.com/posts/"+ id).
    //        then(res =>{
    //            console.log(res.data)
    //            this.setState({
    //                post: res.data
    //            })
    //         })

    // }
    


    render(){
        let id = this.props.match.params.postId;
        const posts = this.props.state 
        const postToDisp =  posts.find(p => {
            return p.id === id;
        })        
        const post = postToDisp ? (
            <div className="post">
                <h4 className="center">{postToDisp.title}</h4>
        <p>{postToDisp.body}</p>
            </div>
        ) : (
            <div className="center">Loading post.......</div>
        )
        return(
            <div className="container">
                {post}
            </div>
        )
    }
}

const  mapStateToProps = (state) => {
    return{
        state: state.posts
    }
}

export default connect(mapStateToProps)(Post);