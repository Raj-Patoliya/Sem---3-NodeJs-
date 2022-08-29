function sortString() {
    var stringWords = document.getElementById("sortWords").value;
    var wordsArray = stringWords.split(" ").sort();
    let str = wordsArray.toString();
    str = str.replace(/,/g, ' ')
    alert(str)
}