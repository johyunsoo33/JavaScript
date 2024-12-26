function solution(strlist) {
    var answer = Array.from(strlist);
    var listMap = answer.map(listLength);
    function listLength(value) {
        return value.length;
    }
    return listMap;
}