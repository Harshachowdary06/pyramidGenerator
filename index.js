function build(){

    const character = document.getElementById("inputBox").value;
    const count = 8;
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