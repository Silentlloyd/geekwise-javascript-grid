
/**
 * This function returns the HTML for a <table>
 * that has `numCols` columns and `numRows` rows.
 */
function createTableHTML(numCols, numRows) {

    var begin  = '<table>';
    var middle = '';
    var end    = '</table>';

    for (var r = 0; r < numRows; r++) {
        middle += '<tr class="row">';

        for (var c = 0; c < numCols; c++) {
            middle += '<td class="cell"></td>';
        }

        middle += '</tr>';
    }

    return begin + middle + end;
}

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

/**
 * This function overwrites the onclick event handler
 * to log some message.
 */
function addConsoleLogOnClickEvent(element, number) {
    element.onclick = function () {
        console.log("CLICKED:", number);
    };
}

function addAndRemoveClass(element, classname, timer) {
    element.className += ' ' + classname;
    var t = setTimeout(function () {
        element.className = element.className.replace(classname, '');
        t = 0;
    }, timer);
}


/**
 * This function loops through all `td` elements
 * of the given `table` and adds a method 
 * to the cell's click event.
 */
function addSomeEvents(table) {
    var cells = table.getElementsByTagName('td');
    for (var c = 0; c < cells.length; c++) {
        addConsoleLogOnClickEvent(cells[c], c + 1);
        cells[c].onmouseover = function() {
            addAndRemoveClass(this, 'red', 1000);
        };
    }
}


// select our target DIV
var theGrid = document.getElementById("the-grid");

// create our grid table
var theGridTable = createTableElement(25, 15);

// append our grid table to the target DIV
theGrid.appendChild(theGridTable);

// attach some event handler to our grid's cells
addSomeEvents(theGridTable);
