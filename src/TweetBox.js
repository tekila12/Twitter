import React, {useState} from 'react'
import "./TweetBox.css"
import {Avatar, Button} from "@material-ui/core";
import db from './firebase';

function TweetBox() {

const[tweetMessage, setTweetMessage]= React.useState(" ");
const[tweetImage, setTweetImage]= React.useState(" ");




const sendTweet = (e) =>{
e.preventDefault();
db.collection('posts').add({
displayName: "Ajnur",
username: "ajnur3321",
verified: true,
avatar:"https://scontent.fsjj2-1.fna.fbcdn.net/v/t31.0-8/22769998_1471254779595094_9208603460779737095_o.jpg?_nc_cat=104&ccb=2&_nc_sid=09cbfe&_nc_ohc=D1tWU1rFObAAX8PDdwr&_nc_ht=scontent.fsjj2-1.fna&oh=ac2be25b9522ed2f16245d5a4805ed01&oe=5FC0C9FA",
text:tweetMessage,
image:tweetImage
});
setTweetMessage("");
setTweetImage("");
};



return (
        <div className="tweetBox">
        <form>
        <div className=" tweetBox__input">
        <Avatar src="https://scontent.fsjj2-1.fna.fbcdn.net/v/t31.0-8/22769998_1471254779595094_9208603460779737095_o.jpg?_nc_cat=104&ccb=2&_nc_sid=09cbfe&_nc_ohc=D1tWU1rFObAAX8PDdwr&_nc_ht=scontent.fsjj2-1.fna&oh=ac2be25b9522ed2f16245d5a4805ed01&oe=5FC0C9FA"/>
        <input  onChange={(e) => setTweetMessage(e.target.value)}
        value={tweetMessage} 
        placeholder="What's happening?" type="text" />
        </div>
        <input value={tweetImage} onChange={(e)=>setTweetImage(e.target.value)}
        className=" tweetBox__imageInput" 
        placeholder="Optional: Enter Image URL"
        type="text"/>
       <Button onClick={sendTweet} type="sumbit"className="tweetBox__tweetButton">Tweet</Button>
        </form>
        </div>
    )
}

export default TweetBox
