// VARIABLES
var alphabet = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0' ];

var alphabetICAO = [ 'Alfa', 'Bravo', 'Charlie', 'Delta', 'Echo', 'Foxtrot', 'Golf', 'Hotel', 'India', 'Juliett', 'Kilo', 'Lima', 'Mike', 'November', 'Oscar', 'Papa', 'Quebec', 'Romeo', 'Sierra', 'Tango', 'Uniform', 'Victor', 'Whiskey', 'X-ray', 'Yankee', 'Zulu', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Zero' ];

var btn = document.querySelector('form');

var copyBtn = document.querySelector('.buttonCopy');

var password

var letter

var letterSmall

var word

var table = [];

var tableCopy = [];

// LISTENERS
btn.addEventListener('submit', init);

copyBtn.addEventListener('click', copy);

// FUNCTIONS
function init(event) {
    event.preventDefault();
    table = [];
    tableCopy = [];
    password = this.querySelector('input').value;
    if (password != "") {
        spell()
        document.querySelector('form').reset();
        output();
    }
}

function spell() {
    var length = password.length;
    
    for (var i=0; i < length; i++) {
        conversion(i);
    }
}

function conversion(i) {
    var letterSmall = password.charAt(i);
    var letter = letterSmall.toUpperCase();
    
    if (alphabet.some(x => x === letter) == true) {
        var index = alphabet.findIndex(x => x === letter);
        var word = '<span>' + alphabetICAO[index] + '</span>';
        var copy = alphabetICAO[index];
        table.push(word);
        tableCopy.push(copy);
    }
}

function output() {
    document.querySelector('section').innerHTML = table.join(" ");
}

function copy() {
    var emptyInput = document.createElement('textarea');
    document.body.appendChild(emptyInput);
    emptyInput.setAttribute('id', 'empty');
    document.getElementById('empty').value = tableCopy;
    emptyInput.select();
    document.execCommand('copy');
    document.body.removeChild(emptyInput);
}