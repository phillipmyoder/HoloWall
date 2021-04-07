import React from 'react';
import { Link } from 'react-router-dom';
import {TwitterTweetEmbed} from 'react-twitter-embed'

function Pages (){
    return(
        <div className = "test">
            <style>{'body{background-color: black;}'}</style>
            <h1 className = "pages-title">Regret</h1>
            <TwitterTweetEmbed tw-align-center tweetId={'1355596674920407040'}  options={{theme: 'dark',align: 'center'}} />
            <p className = "pages-color"> &quot;What do you think you are doing now?&quot; <br/> <br/>&quot;I&apos;m right behind you.&quot; </p>
            
            <Link to="/" >
            <button className = "pages-btn">Go Back!</button>
          </Link>

          <a href = "https://www.youtube.com/watch?v=s1uTPfpatt8">
            <h3 className = "pages-color">Video that inspired this</h3>
          </a>
        </div>
    );
}
export default Pages;