
function randomGuess(){
    var num = document.getElementById('number').value;
    var rannd = Math.floor(Math.random()*10);
    if(rannd == num)
    {
        swal(" "+rannd+"", "You got it...!", "success");
    }
    else
    {
        swal(" "+rannd+"", "Aww Try again", "error");
    }
}
