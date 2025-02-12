function solution(rny_string) {
    var answer = '';
    const arr = rny_string.split("");
    const target = arr.map(find);
    function find(value){
        if(value == "m"){
            return "rn";
        }else {
        return value;
    }
    }
    answer = target.join("");
    return answer;
}