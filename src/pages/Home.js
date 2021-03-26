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
            //console.log(arr[arr.length - 1]);
          }
        }
        /**
         *  var sortedTestList = testList.sort();
        var sortedCorrectList = correctList.sort()
         */

        var sortedArrList = testList.sort();
        for(var j = 0, max2 = testList.length; j < max2; j++){
          if(sortedArrList[j] === correctList[j]){
            alert("Correct!");
            window.location = "/Pages";
          }
          else{
            alert("Wrong!");
            window.location = "/";
          }
        }
        //console.log(e.target.id);
      }
    return(
        <div class = "test">
          <form id = "wall">
          <input type = "checkbox" id = "Rushia" className = "checkbox-gone" />
          <label for = "Rushia"><img src = {Rushia} className = "row-1" alt = "Rushia"></img></label>
          <input type = "checkbox" id = "Noel" className = "checkbox-gone" />
          <label for = "Noel"><img src = {Noel} className = "row-1" alt = "Noel"></img></label>
          <input type = "checkbox" id = "Shion" className = "checkbox-gone" />
          <label for = "Shion"><img src = {Shion} className = "row-1" alt = "Shion"></img></label>
          
          <input type = "checkbox" id = "Coco" className = "checkbox-gone" />
          <label for = "Coco"><img src = {Coco} className = "row-2" alt = "Coco"></img></label>
          <input type = "checkbox" id = "Lamy" className = "checkbox-gone" />
          <label for = "Lamy"><img src = {Lamy} className = "row-2" alt = "Lamy"></img></label>
          <input type = "checkbox" id="Suisei" className = "checkbox-gone" />
          <label for = "Suisei"><img src = {Suisei} className = "row-2" alt = "Suisei"></img></label>
          
          <input type = "checkbox" id = "Matsuri" className = "checkbox-gone" />
          <label for = "Matsuri"><img src = {Matsuri} className = "row-3" alt = "Matsuri"></img></label>
          <input type = "checkbox" id = "Kanata" className = "checkbox-gone" />
          <label for = "Kanata"><img src = {Kanata} className = "row-3" alt = "Kanata"></img></label>
          <input type = "checkbox" id = "Choco" className = "checkbox-gone" />
          <label for = "Choco"><img src = {Choco} className = "row-3" alt = "Coco"></img></label>
          
          
          </form>
          
          <button onClick = {(e) => compareLists(e)} class = "btn"> Verify </button>
          
          <h4 class = "top-box">Select all squares with <br/>WALLS <br/>then select Verify.</h4>

          <h5 class="random-subaru">You shouldn't be down here!</h5>

          <img src = {Subaru} alt="Random Subaru" class = "subaru"></img>
          
        </div>
        
      )
}

export default Home;