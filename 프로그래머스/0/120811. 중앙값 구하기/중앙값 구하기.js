function solution(array) {
    var answer = Array.from(array);
    var list = answer.sort(listArray);
    function listArray(a,b){
        return b-a;
    }
    var middleIndex = Math.floor(answer.length/2);
    return list[middleIndex];
}