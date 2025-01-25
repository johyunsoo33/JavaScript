function solution(num_str) {
    var answer = 0;
    var arr = Array.from(num_str);
    for(let i=0; i<arr.length; i++){
        answer += Number(arr[i]);
    }
    return answer;
}