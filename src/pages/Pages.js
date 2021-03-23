import React from 'react';
import { Link } from 'react-router-dom';
import {TwitterTweetEmbed} from 'react-twitter-embed'

function Pages (){
    return(
        <div>
            <style>{'body{background-color: black;}'}</style>
            <h1 className = "pages-color">Regret</h1>
            <TwitterTweetEmbed tw-align-center tweetId={'1355596674920407040'} />
            <p className = "pages-color"> "What do you think you are doing now?" <br/> <br/>" I'm right behind you." </p>
            <Link to="/" >
            <button >Go Back!</button>
          </Link>
        </div>
    );
}
//@Im0kenp1
export default Pages;