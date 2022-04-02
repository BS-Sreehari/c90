function addUser() {
    player1name = document.getElementById("player1_name_input").value;
    player2name = document.getElementById("player2_name_input").value;
    localStorage.setItem("playe1_name", player1name);
    localStorage.setItem("playe2_name", player2name);
    window.location = "game.html"
}