
let pageCounter = 0;
let maxPages = 5;
var level = 1;
document.getElementById("full-page-count").innerHTML = maxPages
document.getElementById("page-count").innerHTML = pageCounter
onloadlevelcount();
function more() {
  console.log("More")
  let progBar = document.getElementById("progression-bar")
  // checking if pagecounter is less than maxpages
  if(pageCounter < maxPages)
    {
  
  pageCounter++;
  let progression = (pageCounter/maxPages) * 100
  let width = "" + progression + "%"
 
  progBar.style.width = width
    }
    // if pagecounter is 5 making maxpage to 0 for next level
  if(pageCounter==maxPages)
    {
    
    pageCounter=0;
    // storing level detail in local storage
    let levelcount = localStorage.getItem("level");
    levelcount = parseInt(levelcount);
    if(levelcount)
    {
      localStorage.setItem("level",levelcount+1);
      document.querySelector(".level-up span").innerHTML = levelcount+1;
    }
    else
    {
      localStorage.setItem("level", 1) ;
      document.querySelector(".level-up span").innerHTML = 1;
    }
 
    // if (levelcount) {
    //   localStorage.setItem("levelindicator",levelcount+1);
      
    // }
  }
 
}


