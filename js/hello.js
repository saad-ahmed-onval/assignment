console.log("hello");

var A = [
    [1,2],
    [3,4]
];

var type = 'article';
this[type+'_count'] = A.length;

console.log("article_count=");
