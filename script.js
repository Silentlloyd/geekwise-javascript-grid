
/**
 * This function returns a Table element
 * that has `numCols` columns and `numRows` rows.
 */
function createTableElement(numCols, numRows) {

    var table = document.createElement('table');

    for (var r = 0; r < numRows; r++) {
        var row = document.createElement('tr'); //table rows
        row.className += ' row';

        for (var c = 0; c < numCols; c++) {
            var cell = document.createElement('td');//table cells
            cell.className += ' cell';
            row.appendChild(cell);
        }

        table.appendChild(row);
    }
    return table;
}
// select our target DIV
var theGrid = document.getElementById("the-grid");

// create our grid table
var Table = createTableElement(25, 15);

// append our grid table to the target DIV
theGrid.appendChild(Table);

var numCols = 25;
var numActivated = 25;
var numRows = 15;

function init() {

  for(i=0; i < 25; i++) {
    var randX = Math.floor(Math.random() * numCols);
    var randY = Math.floor(Math.random() * numRows);
    activate(randX,randY);
  }
}

function change() {
  for(i=0; i < 25; i++) {
    var randX = Math.floor(Math.random() * numCols);
    var randY = Math.floor(Math.random() * numRows);
    activate(randX,randY);
  }
}


function activate(x,y) {
  var randNum = Math.floor(Math.random() * 1000) % 3;
  var className = "color-"+ randNum;
  Table.rows[y].cells[x].classList.add('activated');
}

function deactivate(x,y) {
  Table.rows[y].cells[x].classList.remove('activated');
}
function changeState(table) {
  var newGrid = [];

var tableCells = table.getElementsByTagName('td');
  for(i=0; i < tableCells.length; i++) {
    var cell = tableCells[i];
    var isDead = !cell.classList.contains('activated');
    newGrid.push(isDead);
}
//gridArray based cell position direction: North, NorthEast, East, SouthEast, South, SouthWest, West, NorthWest.
 function getNeighbors(x,y,table) {
   return[
     numCells -x,
     numCells -x +1,
     numCells +1,
     numCells +x +1,
     numCells +x,
     numCells -1 +x,
     numCells -1,
     numCells -x -1;
   ];
 }
 
 //apply the rules to each cell
	    //         switch (tableCells) {
	    //             case 2:
	    //                 mirrorTable[x][y] = Table[x][y];
      //
	    //                 break;
	    //             case 3:
	    //                 mirrorTable[x][y] = 1; //live
      //
	    //                 break;
	    //             default:
	    //                 mirrorTable[x][y] = 0; //
	    //         }
	    //     }
	    // }

// console.log(newGrid);//test
// var totalCells = 0;

//   totalCells += theGrid

  // for (var x = 1; x < tableHeight - 1; x++) { //iterate through rows
  // 	for (var y = 1; y < tableWidth - 1; y++) { //iterate through columns
  // 	    var totalCells = 0;
  // 	        //add up the total values for the surrounding cells
  // 	        totalCells += theTable[x - 1][y - 1]; //top left
  // 	        totalCells += theTable[x - 0][y -1]; //top center
  // 	        totalCells += theTable[x + 1][y - 1]; //top right
  //
  // 	        totalCells += theTable[x][x - 1][y - 0]; //middle left
  // 	        totalCells += theTable[x][x + 1][y + 0]; //middle right
  //
  // 	        totalCells += theTable[x - 1][y + 1]; //bottom left
  // 	        totalCells += theTable[x - 0][y + 1]; //bottom center
  // 	        totalCells += theTable[x + 1][y + 1]; //bottom right
}

init();
setInterval(function(){
  // changeState(table);
  change();
}, 500);

init();

// myTimeoutFunction();
// var timerId = setInterval(myTimeoutFunction, 1000);
//switch statement
// Table.rows[1].cells[1].style.background="black";
//initailize grid
//add random cells
//interate cells & toggle activation
//do everything within a half second
