import '../App.css';
import React from 'react';
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

var correctList = ["Kanata", "Matsuri", "Rushia", "Shion", "Suisei" ];

function Home (){
      function compareLists () {
        var form = document.getElementById("wall"),
        inputs = form.getElementsByTagName("input");
        var testList = [];
        
        for (var i = 0, max = inputs.length; i < max; i++){
          if(inputs[i].type === "checkbox" && inputs[i].checked){
            testList.push(inputs[i].id);
          }
        }

        var sortedArrList = testList.sort();
        var correct = 0;
        for(var j = 0, max2 = testList.length; j < max2; j++){
          console.log(sortedArrList[j] + " " + correctList[j]);
          if(sortedArrList[j] === correctList[j]){
            correct++;
          }
          
          else{
            correct --;
          }
        }
        if(correct === 5)
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

      function mark(el){
        var form = document.getElementById("wall"),
        inputs2 = form.getElementsByTagName("input");
        
        var ids = el.target.id;
        //console.log(inputs2);
        //inputs[ids].className = "selected";
        console.log("Selected");
        if(inputs2[ids].checked === false){
          document.getElementById(ids).style.border = "1px solid blue";
        }
        else{
          document.getElementById(ids).style.border = "1px solid black";
        }
      }

    return(
        <div className = "test">
          <form id = "wall">
          <input type = "checkbox" id = "Rushia" className = "checkbox-gone" />
          <label htmlFor = "Rushia"><img src = {Rushia} id = "0" className = "row-1" alt = "Rushia" onClick={(e) => mark(e)} /></label>
          <input type = "checkbox" id = "Noel" className = "checkbox-gone" />
          <label htmlFor = "Noel"><img src = {Noel} id = "1" className = "row-1" alt = "Noel" onClick={(e) => mark(e)} /></label>
          <input type = "checkbox" id = "Shion" className = "checkbox-gone" />
          <label htmlFor = "Shion"><img src = {Shion} id = "2" className = "row-1" alt = "Shion" onClick={(e) => mark(e)} /></label>
          
          <input type = "checkbox" id = "Coco" className = "checkbox-gone" />
          <label htmlFor = "Coco"><img src = {Coco} id = "3" className = "row-2" alt = "Coco" onClick={(e) => mark(e)} /></label>
          <input type = "checkbox" id = "Lamy" className = "checkbox-gone" />
          <label htmlFor = "Lamy"><img src = {Lamy} id = "4" className = "row-2" alt = "Lamy" onClick={(e) => mark(e)} /></label>
          <input type = "checkbox" id="Suisei" className = "checkbox-gone" />
          <label htmlFor = "Suisei"><img src = {Suisei} id = "5" className = "row-2" alt = "Suisei" onClick={(e) => mark(e)} /></label>
          
          <input type = "checkbox" id = "Matsuri" className = "checkbox-gone" />
          <label htmlFor = "Matsuri"><img src = {Matsuri} id = "6" className = "row-3" alt = "Matsuri" onClick={(e) => mark(e)} /></label>
          <input type = "checkbox" id = "Kanata" className = "checkbox-gone" />
          <label htmlFor = "Kanata"><img src = {Kanata} id = "7" className = "row-3" alt = "Kanata" onClick={(e) => mark(e)} /></label>
          <input type = "checkbox" id = "Choco" className = "checkbox-gone" />
          <label htmlFor = "Choco"><img src = {Choco} id = "8" className = "row-3" alt = "Choco" onClick={(e) => mark(e)} /></label>
          
          
          </form>
          
          <button onClick = {() => compareLists()} className = "btn"> Verify </button>
          
          <h4 className = "top-box">Select all squares with <br/>WALLS <br/>then select Verify.</h4>

          <h5 className ="random-subaru">You shouldn&apos;t be down here!</h5>

          <img src = {Subaru} alt="Random Subaru" className = "subaru"></img>
          
        </div>
        
      )
}

export default Home;