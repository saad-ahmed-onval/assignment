function _binary_search(_array, _element){
    _array = _array.sort()
    var last = _array.length-1
    var middle = (Math.floor((0+last)/2))
    var _a_slice = []
    console.log("a[middle]:"+_array[middle])
    if (element == _array[middle] || element == _array[0] || element == _array[last])
        console.log("element found!");


    else if(element > _array[middle])
    {
        _a_slice = _array.slice(middle+1,last)
        _binary_search(_a_slice,element)
    }

    else if(element < _array[middle])
    {
        _a_slice = _array.slice(0,middle-1)
        _binary_search(_a_slice,element)
    }
    else
        console.log("element not found")
}

var array = [1,2,3,4,5,6,7]
var element = 14


_binary_search(array, element)