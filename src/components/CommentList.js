import React, {Component} from 'react';
import Comment from "./Comment";
class CommentList extends Component {
    render() {
        const authors = {
          1:'SuperMan',
          2:'BatMan',
          3:'Captain America'
        };
        const titles = {
            1:'Create React App not injecting CSS (SCSS) anymore',
            2:'react app with Iframe to MVC protected by IdentityServer4',
            3:'react-native keyboardDidShow/keyboardDidHide keyboard events not firing'
        };
        const comments = {
          1:'since a couple of days I have a problem, where CRA does not inject SCSS changes anymore. If I refresh the page manually, the SCSS code change is there and applied to my page.',
          2:'I have a React SPA application and on a particular tab I have an Iframe to display an MVC application. All of this is using Identity Server 4 for authentication. Is there a way so auth token that is ...',
          3:'I\'m tring to make use of the keyboard events on android by using the keyboardDidShow/keyboardDidHide events but none are firing. Am I not subscribing correctly? "react": "16.9.0", "react-native": "0....',
        };
        const dates = {
            1:'25.10.19',
            2:'13.10.19',
            3:'1.10.19'
        };
        const images = {
            1:'https://i.ibb.co/J3S6b30/superman.png',
            2:'https://i.ibb.co/8NZG0DS/batman.png',
            3:'https://i.ibb.co/xCYBqWW/America.png'
        }

        return (
            <div>
                <Comment title={titles["1"]} date={dates["1"]} author={authors["1"]} comment={comments["1"]} imgUrl={images["1"]}/>
                <Comment title={titles["2"]} date={dates["2"]} author={authors["2"]} comment={comments["2"]} imgUrl={images["2"]}/>
                <Comment title={titles["3"]} date={dates["3"]} author={authors["3"]} comment={comments["3"]} imgUrl={images["3"]}/>
            </div>
        );
    }
}

export default CommentList;

