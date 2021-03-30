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
      function compareLists (e) {
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
            //window.location = "/Pages";
            //break;
          }
          
          else{
            correct --;
            //window.location = "/";
            //break;
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
        
//        el.style.border = "1px solid blue";
        var form = document.getElementById("wall"),
        inputs = form.getElementsByTagName("img"),
        inputs2 = form.getElementsByTagName("input");
        
        var ids = el.target.id;
        console.log(inputs[ids]);
        //inputs[0].className = "selected";
        console.log("Selected");
        if(inputs2[ids].checked === false){
          document.getElementById(ids).style.border = "1px solid blue";
        }
        else{
          document.getElementById(ids).style.border = "1px solid black";
        }
      }

    return(
        <div class = "test">
          <form id = "wall">
          <input type = "checkbox" id = "Rushia" className = "checkbox-gone" />
          <label for = "Rushia"><img src = {Rushia} id = "0" className = "row-1" alt = "Rushia" onClick={(e) => mark(e)} /></label>
          <input type = "checkbox" id = "Noel" className = "checkbox-gone" />
          <label for = "Noel"><img src = {Noel} id = "1" className = "row-1" alt = "Noel" onClick={(e) => mark(e)} /></label>
          <input type = "checkbox" id = "Shion" className = "checkbox-gone" />
          <label for = "Shion"><img src = {Shion} id = "2" className = "row-1" alt = "Shion" onClick={(e) => mark(e)} /></label>
          
          <input type = "checkbox" id = "Coco" className = "checkbox-gone" />
          <label for = "Coco"><img src = {Coco} id = "3" className = "row-2" alt = "Coco" onClick={(e) => mark(e)} /></label>
          <input type = "checkbox" id = "Lamy" className = "checkbox-gone" />
          <label for = "Lamy"><img src = {Lamy} id = "4" className = "row-2" alt = "Lamy" onClick={(e) => mark(e)} /></label>
          <input type = "checkbox" id="Suisei" className = "checkbox-gone" />
          <label for = "Suisei"><img src = {Suisei} id = "5" className = "row-2" alt = "Suisei" onClick={(e) => mark(e)} /></label>
          
          <input type = "checkbox" id = "Matsuri" className = "checkbox-gone" />
          <label for = "Matsuri"><img src = {Matsuri} id = "6" className = "row-3" alt = "Matsuri" onClick={(e) => mark(e)} /></label>
          <input type = "checkbox" id = "Kanata" className = "checkbox-gone" />
          <label for = "Kanata"><img src = {Kanata} id = "7" className = "row-3" alt = "Kanata" onClick={(e) => mark(e)} /></label>
          <input type = "checkbox" id = "Choco" className = "checkbox-gone" />
          <label for = "Choco"><img src = {Choco} id = "8" className = "row-3" alt = "Choco" onClick={(e) => mark(e)} /></label>
          
          
          </form>
          
          <button onClick = {(e) => compareLists(e)} class = "btn"> Verify </button>
          
          <h4 className = "top-box">Select all squares with <br/>WALLS <br/>then select Verify.</h4>

          <h5 className ="random-subaru">You shouldn't be down here!</h5>

          <img src = {Subaru} alt="Random Subaru" className = "subaru"></img>
          
        </div>
        
      )
}

export default Home;