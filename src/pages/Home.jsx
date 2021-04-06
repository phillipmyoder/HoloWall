import '../App.css';
import React, {useState} from 'react';
import Rushia from './images/rushia.png';
import Coco from './images/coco.png';
import Matsuri from './images/matsuri.png';
import Noel from './images/noel.png';
import Lamy from './images/lamy.png';
import Kanata from './images/kanata.png';
import Shion from './images/shion.png';
import Suisei from './images/suisei.png';
import Choco from './images/choco.png';
import Subaru from './images/subaru.png';

//var correctList = ["Kanata", "Matsuri", "Rushia", "Shion", "Suisei" ];

function Home (){
  const [rushia, setRushia] = useState(false);
  const [noel, setNoel] = useState(false);
  const [shion, setShion] = useState(false);

  const [coco, setCoco] = useState(false);
  const [lamy, setLamy] = useState(false);
  const [suisei, setSuisei] = useState(false);

  const [matsuri, setMatsuri] = useState(false);
  const [kanata, setKanata] = useState(false);
  const [choco, setChoco] = useState(false);
  
      function compareLists () {
        if(rushia && matsuri && kanata && shion && suisei 
          && !noel && !coco && !lamy && !choco)
        {
          alert("Correct!");
          window.location = "/Pages";
        }
        else{
          alert("Wrong!");
          window.location = "/";
        }
        //console.log(e.target.id);
      }

    return(
        <div className = "test">
          <h4 className = "top-box">Select all squares with <br/>WALLS <br/>then select Verify.</h4>
          <div className = "row">
          <div className = "column">
          <img 
          src = {Rushia} 
          className = {"row-1 " + (rushia ? "selected" : " ")}
          alt = "Rushia" 
          onClick={() => setRushia(!rushia)} />
          
          <img src = {Noel} 
          className = {"row-1 " + (noel ? "selected" : " ")}
           alt = "Noel" 
           onClick={() => setNoel(!noel)} />

          <img src = {Shion} 
          className = {"row-1 " + (shion ? "selected" : " ")}
          alt = "Shion" 
          onClick={() => setShion(!shion)} />
          </div>
          
          <div className = "column">
          <img src = {Coco}
          className = {"row-2 " + (coco ? "selected" : " ")}
          alt = "Coco" 
          onClick={() => setCoco(!coco)} />

          <img src = {Lamy} 
          className = {"row-2 " + (lamy ? "selected" : " ")}
          alt = "Lamy" 
          onClick={() => setLamy(!lamy)} />
          
          <img src = {Suisei} 
          className = {"row-2 " + (suisei ? "selected" : " ")}
          alt = "Suisei" 
          onClick={() => setSuisei(!suisei)} />
          </div>
          
          <div className = "column">
          <img src = {Matsuri}
          className = {"row-3 " + (matsuri ? "selected" : " ")}
          alt = "Matsuri" 
          onClick={() => setMatsuri(!matsuri)} />
          
          <img src = {Kanata} 
          className = {"row-3 " + (kanata ? "selected" : " ")}
          alt = "Kanata" 
          onClick={() => setKanata(!kanata)} />
          
          <img src = {Choco} 
          className = {"row-3 " + (choco ? "selected" : " ")}
          alt = "Choco" 
          onClick={() => setChoco(!choco)} />
          
          <button onClick = {() => compareLists()} className = "btn"> Verify </button>
          </div>
          
          </div>

          <h5 className ="random-subaru">You shouldn&apos;t be down here!</h5>

          <img src = {Subaru} alt="Random Subaru" className = "subaru"></img>
          
        </div>
        
      )
}

export default Home;