function solution(my_string, alp) {
    var answer = '';
    const arr = my_string.split("");
    for (let i=0; i<arr.length; i++){
        if(arr[i] === alp){
            arr[i] = arr[i].toUpperCase();
        }
    }
    answer = arr.join("")
    return answer;
}