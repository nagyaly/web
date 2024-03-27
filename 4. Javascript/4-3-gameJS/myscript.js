var turn = "X";                             //global variable
function setTurn(value){
    var turn_lbl = document.getElementById("turn_lbl");
    turn = value;
    turn_lbl.innerText = "Turn: "+value;
}
function activate(button){
    if(button.innerText != ""){
        return;
    }
    button.innerText = turn;
    //---------------------------------------
    if(turn == "X"){
        button.style.backgroundColor = "#0000Cd";
        setTurn("O");
    }
    else{
        button.style.backgroundColor = "#Cd0000";
        setTurn("X");
    }
    //---------------------------------------
    var win = winner();
    if(win != ""){
        var turn_lbl = document.getElementById("turn_lbl");
        turn_lbl.innerText = "Winner is: "+win
    }
    //---------------------------------------
}
function tripleEqual(x, y, z){
    if(x == y && x == z && y == z){
        return true;
    }
    return false;
}
function winner(){
    var cells = document.getElementsByClassName("cell");
    var arr = [];
    for(var i=0;i<cells.length;i++){
        arr.push(cells[i].innerText);
        arr.push(cells[i].style.backgroundColor);
    }
    // console.log(arr);
    if(tripleEqual(arr[0], arr[1], arr[2])){            //first row
        return arr[0];  //return any... all are equal
    }
    if(tripleEqual(arr[3], arr[4], arr[5])){            //second row
        return arr[3];  //return any... all are equal
    }
    return "";      //no winner
}
function reset(){
    var cells = document.getElementsByClassName("cell");
    for(var i=0;i<cells.length;i++){
        cells[i].innerText = "";
        cells[i].style.backgroundColor = "";
    }
    setTurn("X");
}