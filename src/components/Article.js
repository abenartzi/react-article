import React from 'react'
import CommentList from "./CommentList";

class Article extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
        const title = this.props.title;
        const content = this.props.content;
        const imgUrl = this.props.imgUrl;

        return(
            <div className='mainDiv'>
                <h1>{title}</h1>
                <p>{content}</p>
                <img src={imgUrl} alt={'React'}/>
                <CommentList/>
            </div>

        )
    }
}

export default Article;



//Make a component named Article with 3 props: title, content and image.