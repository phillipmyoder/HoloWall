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

var testList = [];
var correctList = ["Rushia", "Matsuri", "Kanata", "Shion", "Suisei" ];

function Home (){
    function addToList(e, x) {
        testList.push(x);
      }
    
      function compareLists(e, testList, correctList) {
        var sortedTestList = testList.sort();
        var sortedCorrectList = correctList.sort()
        if(sortedTestList.length === 0 || sortedTestList.length > sortedCorrectList.length || sortedTestList.length < sortedCorrectList.length){
          alert("Wrong!");
          window.location = "/";
        } // end wrong size if
        if(sortedTestList.length === sortedCorrectList.length){
          var i = 0;
          while (i <= 4) {
            if(sortedTestList[i] !== sortedCorrectList[i]){
              alert("Wrong!!");
              window.location = "/";
              break;
            }// end if
            
            i++;
          }// end while
          var j = 0;
          while(j<=4){
          if(sortedTestList[j] === sortedCorrectList[j]){
            alert("Correct!");
            window.location = "/Pages";
            break;
          }
          j++;
        }
        }// end if
      }
    return(
        <div class = "test">
          <img onClick = {(e) => addToList(e, "Rushia")} src={Rushia} alt="Rushia" class = "row-1"  />
          <img onClick = {(e) => addToList(e, "Noel")} src={Noel} alt="Noel" class = "row-1"/>
          <img onClick = {(e) => addToList(e, "Shion")} src={Shion} alt="Shion" class = "row-1"/>
          
          <img onClick = {(e) => addToList(e, "Coco")} src={Coco} alt="Coco" class = "row-2" />
          <img onClick = {(e) => addToList(e, "Lamy")} src={Lamy} alt="Lamy" class = "row-2"/>
          <img onClick = {(e) => addToList(e, "Suisei")} src={Suisei} alt="Suisei" class = "row-2"/>

          <img onClick = {(e) => addToList(e, "Matsuri")} src={Matsuri} alt="Matsuri" class = "row-3"/>
          <img onClick = {(e) => addToList(e, "Kanata")} src={Kanata} alt="Kanata" class = "row-3"/>
          <img onClick = {(e) => addToList(e, "Choco")} src={Choco} alt="Choco" class = "row-3"/>

          <button onClick = {(e) => compareLists(e, testList, correctList)} class = "btn">Verify</button>
          <h4 class = "top-box">Select all squares with <br/>WALLS <br/>then select Verify.</h4>
          <h5 class="random-subaru">You shouldn't be down here!</h5>

          <img src = {Subaru} alt="Random Subaru" class = "subaru"></img>
          
        </div>
        
      )
}

export default Home;