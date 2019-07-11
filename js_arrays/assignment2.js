var library = [
    { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
    { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
    { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
    ];

var resultArray = library.sort(function(a,b){
    var element1 = a.title.toLowerCase()
    var element2 = b.title.toLowerCase()
    if(element1 > element2) {return -1}
    else if(element2 > element1) {return 1}
    else
    {return 0}
})
console.log(resultArray)
