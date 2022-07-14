var counter = 0;
var negativeC = 0;
var firstTime = true;
var click = 0;   //function gets called twice somewhat of a solution 

var counterin0 = 0;





//good nf
//maybe pick up later
//priority classes all messed up

var target = document.querySelectorAll(".middlepuzzle");

var checkbox = document.getElementById("isChecked");


function dark(){
  
  const puzzle = document.querySelector('.middlepuzzle');
  puzzle.style.backgroundColor="black";
  var children = puzzle.children;

  for(var i = 0; i < children.length ; i ++){
    var asd = children[i]
    var uff = window.getComputedStyle(asd,null) ;
    let bgColor = uff.getPropertyValue("background-color");
    console.log(bgColor)
    
    //bgColor == "rgba(0, 0, 0, 0)"|| 
    if(bgColor == "rgb(0, 0, 0)" || bgColor == "(255, 255, 255)"){
      
      asd.classList.remove("rotata")
      asd.classList.remove("day")
      asd.classList.add("night")
    }
    /*
    else if(bgColor == "(255, 192, 203)"){

    }
  */
  }
}





function normal(){
  const puzzle = document.querySelector('.middlepuzzle');
  puzzle.style.backgroundColor="orange";
  var children = puzzle.children;
  for(var i = 0; i < children.length ; i ++){
    var asd = children[i]
    var uff = window.getComputedStyle(asd,null) ;
    let bgColor = uff.getPropertyValue("background-color");
    
    
    //bgColor == "rgba(0, 0, 0, 0)"|| 
    if(bgColor == "rgb(255, 165, 0)" || bgColor == "(255, 255, 255)" ){
      console.log("asd");
      
      asd.classList.remove("rotata")
      asd.classList.remove("night")
      asd.classList.add("day")
      console.log(asd.classList)
    }
  }
}



function dayNight(e){
  
  
  
  if( click == 0 || click == 1){
    
    click ++;
    if(click == 2){
     
       dark();
    }
    
    
  }
  else if(click == 2 || click == 3) {
    
    click ++;
    
    if(click == 4){
     
      click = 0;
      normal();
    }
  }
 
}


function clickHandler(e){
  negativeC = 0;
  var klass = this.className;
  toString(klass)
  
 

  if(klass!= "middlepuzzle"){
    var uga = document.getElementsByClassName(klass);
    uga = uga[0];
    var arr = uga.className.split(' ')

    for(var i = 0 ; i < arr.length ; i++){
      if( arr[i] == "rotata" || arr[i] == "rotatap"){
        negativeC = 1;
      }
    }
    if(negativeC == 0){
      counter++;
    }
    
    if(klass == "middlepuzzle face0" || klass == "middlepuzzle face1" || klass == "middlepuzzle face8" || klass == "middlepuzzle face9"){
      uga.classList.add("rotatap")
      return;
    }
    
    uga.classList.add("rotata");
    
    
    if(counter == 120 && firstTime == true){
      checkbox.style.visibility ="visible";

      
      firstTime = false;
    }
  }

}






checkbox.addEventListener("click",dayNight)


target.forEach(target => target.addEventListener("mouseover",(clickHandler)));

//retocar animacoes..
//fazer o popup
//acabar o Etch-a-Sketch