function solution(array, n) {
    var answer = Array.from(array);
    var sameValue = answer.filter(valueFilter);
    function valueFilter(value){
        return value == n;
    }
    return sameValue.length;
}