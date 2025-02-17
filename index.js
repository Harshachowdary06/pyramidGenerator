let globalSymbol = "*";
let character =""

function build(){
    character = document.getElementById("inputBox").value;
    if(character == ""){
            character = globalSymbol;
            console.log("hi " + character);
    }
    buildTriangle();
}
let count =8;
function buildTriangle(){

    
    
    const rows = [];

    function padRow(rowNumber, rowCount) {
        console.log(rowNumber,rowCount,2*rowNumber-1);
    return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
    }

    for (let i = 0; i < count; i = i + 1) {
    rows.push(padRow(i + 1, count));
    }

    let result1 = ""

    for (const row of rows) {
    result1 = result1 + row + "\n";
    }

    console.log(result1);
    document.getElementById("buildImage").innerHTML=result1;
}

// code for shape shift
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

function shapeShift(){
    const shape = getRandomInt(1,5);
    console.log(shape);
    document.getElementById("buildImage").innerHTML="";
    switch(shape){
        case 1:
            console.log("square");
            buildSquare(1);
            break;
        case 2:
            console.log("rectangle");
            buildSquare(2);
            break;
        case 3:
            console.log("circle");
            break;
        case 4:
            console.log("diamond");
            break;
        case 5:
            console.log("triangle");
            buildTriangle();
            break;
    }
}

function buildSquare(num){
    let rect = count;
    if(num == 1){
        rect =count/2;
    }
    let squarevertical = character.repeat(count);
    let square = "";
    for (let i =0;i<rect;i++){
        square = square + squarevertical +"\n";
    }
    console.log(square);
    document.getElementById("buildImage").innerHTML=square;

}
