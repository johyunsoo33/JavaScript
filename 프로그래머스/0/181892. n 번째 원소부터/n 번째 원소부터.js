function solution(num_list, n) {
    var answer = [];
    const sliceArr = num_list.slice(n-1);
    answer=answer.concat(sliceArr);
    return answer;
}