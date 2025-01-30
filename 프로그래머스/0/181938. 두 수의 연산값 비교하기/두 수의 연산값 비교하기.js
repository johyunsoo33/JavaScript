function solution(a, b) {
    var answer = 0;
    var sum = a.toString() + b.toString();
    var intNum = Number(sum);
    var multi= 2*a*b;
    
    if (intNum > multi){
        answer = intNum;
    }
    else if(multi > intNum){
        answer = multi;
    }
    else if(intNum === multi){
        answer = intNum;
    }
    return answer;
}