
/**
 * This function returns a Table element
 * that has `numCols` columns and `numRows` rows.
 */
function createTableElement(numCols, numRows) {

    var table = document.createElement('table');

    for (var r = 0; r < numRows; r++) {
        var row = document.createElement('tr');
        row.className += ' row';

        for (var c = 0; c < numCols; c++) {
            var cell = document.createElement('td');
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

function activate(x,y) {
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
  }
}
init();
setInterval(function(){
  changeState(Table);
}, 500);


// Table.rows[1].cells[1].style.background="black";
//initailize grid
//add random cells
//interate cells & toggle activation
//do everything within a half second
