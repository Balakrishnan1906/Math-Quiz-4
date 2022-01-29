function login_user(){
    p1 = document.getElementById("player_1").value;
    p2 = document.getElementById("player_2").value;

    localStorage.setItem("player1" , p1);
    localStorage.setItem("player2" , p2);

    window.location = "multiply.html";
}

player1_name = localStorage.getItem("player1");
player2_name = localStorage.getItem("player2");

player1_score = 0;
player2_score = 0;

document.getElementById("player1").innerHTML = player1_name + ":";
document.getElementById("player2").innerHTML = player2_name + ":";

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name;
document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name;
