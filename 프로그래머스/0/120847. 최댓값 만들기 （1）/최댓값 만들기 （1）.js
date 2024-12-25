function solution(numbers) {
    var answer = Array.from(numbers);
    function arraySort(a,b){
        return b-a;
    }
    var aa= answer.sort(arraySort);
    var result = aa[0] * aa[1];
    return result;
}