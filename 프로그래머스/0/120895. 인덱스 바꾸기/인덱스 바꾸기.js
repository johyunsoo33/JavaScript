function solution(my_string, num1, num2) {
    var answer = '';
    var arr1 = my_string[num1];
    var arr2 = my_string[num2];
    var splitArr = my_string.split('');
    splitArr[num1] = arr2
    splitArr[num2] = arr1
    
    return splitArr.join('');
}