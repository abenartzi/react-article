import React, {Component} from 'react';

class Comment extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div className='articleStyle'>
                <article className='article'>
                    <h4>{this.props.date} - {this.props.author} <img src={this.props.imgUrl} alt="logo"/> </h4>
                    <h5>{this.props.title}</h5>
                    <p>{this.props.comment}</p>
                    <hr/>
                </article>
            </div>
        );
    }
}

export default Comment;