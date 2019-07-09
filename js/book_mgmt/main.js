var rs = require('readline-sync')

var st = rs.question('Enter the string: ');
var string = "hey, man how are you ?"

var words = st.replace('/.', '').split(/\s/)
    var freqMap = new Map();
    words.forEach(function(w) {
        if (!freqMap[w]) {
            freqMap[w] = 0;
        }
        freqMap[w] += 1;
    });

console.log(freqMap);

//var o = rs.question("enter the word: ")
//console.log(o+" : "+freqMap.prototype.size)