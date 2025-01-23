function solution(my_string) {
  const numbers = my_string.match(/\d/g); 
  if (!numbers) {
    return 0;
  }
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += Number(numbers[i]);
  }
  return sum;
}