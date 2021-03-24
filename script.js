// we attach the input word to the wordList
function addWord() {
    // allowing only lowercase letters
    if (document.getElementById("word").validity.patternMismatch) {
        alert("Please type a valid word");
    } else {
        var searchedWord = document.getElementById("word").value;
        var wordList = document.getElementById("wordList").innerText.toString();
        
        // checking if the word is already on the wordList
        if (wordList.includes(searchedWord)) {
            alert("The word is already on the list");

        // adding the input word to the wordList
        } else {
            var node = document.createElement("li");
            var textnode = document.createTextNode(document.getElementById("word").value);
            node.appendChild(textnode);
            document.getElementById("wordList").appendChild(node);
        }
    }
}

// we search the input word in the wordList
function searchWord() {
    var searchedWord = document.getElementById("word").value;
    var wordList = document.getElementById("wordList").innerText.toString();
    if (wordList.includes(searchedWord)) {
        alert("The word is in the list");
    } else {
        alert("The word is NOT in the list");
    }
}