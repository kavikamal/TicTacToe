var currentPlayer = "X";
var nextPlayer = "O";
var player="Strawberry"
var playerXWins=0;
var playerOWins=0;

var playerXSelections = new Array();
var playerOSelections = new Array();
const winningCombinations = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]
  ]
  document.getElementById("p1").textContent="Strawberry's wins : "+playerXWins;
  document.getElementById("p2").textContent="Orange's wins : "+playerOWins;
  document.getElementById("p3").textContent=player+"'s turn";

  handleClick = function(event) {
    var cell = event.target
    console.log(cell.textContent);
    if (cell.textContent==""){
        console.log(cell.id);
        // cell.innerHTML = currentPlayer;
        // document.getElementById(cell.id).setAttribute("style","background-image:url('orange.png')");
        if(currentPlayer == "X" ) {
          document.getElementById(cell.id).setAttribute("style","background-image:url('strawberry.png');background-repeat:no-repeat");
          playerSelections = playerXSelections;
          nextPlayer = "O";
          player="Orange";
        } else {
          document.getElementById(cell.id).setAttribute("style","background-image:url('orange.png');background-repeat:no-repeat");
          playerSelections = playerOSelections;
          nextPlayer = "X";
          player="Strawberry";
        }
        playerSelections.push(parseInt(cell.id));
    } 
    else{
      alert("Select a different cell")
    }
    if (checkWinner())
    {
    
      if (currentPlayer=="X")
      {
        alert("Strawberry"+ " Won");
        playerXWins+=1;
      }
      else 
      {
        alert("Orange"+ " Won");
        playerOWins+=1; 
      }  
      playerXSelections = new Array();
      playerOSelections = new Array();
      var cells=document.querySelectorAll("td");
      for(var i = 0; i < cells.length; i++) {
        //cells[i].innerHTML= "";
        document.getElementById(cells[i].id).setAttribute("style","background-image:none");
      }  
      currentPlayer = "X";
      nextPlayer = "O";  
      document.getElementById("p1").textContent="Strawberry's wins : "+playerXWins;
      document.getElementById("p2").textContent="Orange's wins : "+playerOWins;
      document.getElementById("p3").textContent=player+"'s turn";
    }
    else{
     // Swap players
      currentPlayer = nextPlayer;
      document.getElementById("p1").textContent="Strawberry's wins : "+playerXWins;
      document.getElementById("p2").textContent="Orange's wins : "+playerOWins;
      document.getElementById("p3").textContent=player+"'s turn";
    }
  }
  
  var cells = document.querySelectorAll("td");
  
  for(var i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', handleClick)
  }  

  function arrayContainsArray (superset, subset) {
    if (0 === subset.length) {
      return false;
    }
    return subset.every(function (value) {
      return (superset.indexOf(value) >= 0);
    });
  }
  function checkWinner() {
    // Check if player has all values of each combination
    var matches;
    if (playerSelections.length>=3){
      for (i=0;i<winningCombinations.length;i++){
        if (arrayContainsArray(playerSelections,winningCombinations[i])){
          return true;
        }
    }  
   }
    // if we made it through each combo without returning true,
    // then there were no matches and player did not win
    return false;
  }