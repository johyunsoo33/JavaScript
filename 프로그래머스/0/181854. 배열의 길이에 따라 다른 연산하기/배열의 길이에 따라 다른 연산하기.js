function solution(arr, n) {
    var answer = [];
    var length = arr.length;
    
    if(length % 2 != 0){
        for (let i=0; i<length; i++){
            if(i % 2 == 0){
                answer.push(arr[i] + n);
            }else {
                answer.push(arr[i]);
            }
        }
    }
    else if(length % 2 == 0){
        for (let i=0; i<length; i++){
            if(i % 2 != 0){
               answer.push(arr[i] + n);
            }else {
                answer.push(arr[i]);
            }
        }
    }
    return answer;
}