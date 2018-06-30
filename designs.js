// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() {

// Your code goes here!
        let canvas, height, width, tableBox, row;

    canvas = $('#pixelCanvas');
    height = $('#inputHeight').val();
    width = $('#inputWeight').val();

    canvas.children().remove();
    canvas.css('border', '1px solid black');

    for (let i = 0; i < height; i++){
        canvas.append('<tr></tr>');
    }

    row = $('tr');

    for (let y = 0; y < width; y++) {
        row.append('<td></td>');
    } 

    tableBox = $('#pixelCanvas').find('td');
    
    tableBox.on('click', function(){
            let colorPicker;
            colorPicker = $('#colorPicker').val();
            $(this).css('background-color', colorPicker);
        
    })
}

        var makeCanvas = $('input[type="submit"]');
        $(makeCanvas).on('click', function(event){
            event.preventDefault();
            makeGrid();
        });


   