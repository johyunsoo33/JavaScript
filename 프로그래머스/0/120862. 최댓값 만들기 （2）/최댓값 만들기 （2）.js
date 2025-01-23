function solution(numbers) {
    if (numbers.length < 2) {
    return 0;
    }
    var answer = 0;
    var arr = Array.from(numbers);
    var arrSort = [...numbers].sort(arraySort);
    var arrSort2 = [...numbers].sort(arraySort2);
    function arraySort(a,b){
        return b-a;
    }
    function arraySort2(a,b){
        return a-b;
    }
    var result1 = arrSort[0] * arrSort[1];
    var result2 = arrSort2[0] * arrSort2[1];
    if(result1 >= result2){
        answer = result1
    }
    else if(result2 >= result1){
        answer = result2
    }
    else {
        answer = 0;
    }
    return answer;
}