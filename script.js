var wordArray = [];

// we add the input word to the array of words
function addWord() {

  // allowing only lowercase letters
  if (document.getElementById("word").validity.patternMismatch) {
    alert("Please type a valid word");
  } else {

    // checking if the word is already in the array
    if (wordArray.includes(document.getElementById("word").value)) {
      alert("The word is already on the list");
    }

    // if not we add it to the array
    else {
      wordArray.push(document.getElementById("word").value);
    }
  }
}

// searching the word in the array of words
function searchWord() {
  if (wordArray.includes(document.getElementById("word").value)) {
    alert("The word is in the list");
  } else {
    alert("The word is NOT in the list");
  }
}