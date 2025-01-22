function solution(a, b) {
    var answer = 0;
    var stringA = String(a);
    var stringB= String(b);
    var ab = Number(stringA + stringB);
    var ba = Number(stringB + stringA);
    if(ab >= ba){
        answer = ab
    }
    else if(ba >= ab){
        answer = ba
    }
    return answer;
}