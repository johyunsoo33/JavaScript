function solution(numer1, denom1, numer2, denom2) {
    var numactor = numer1*denom2+numer2*denom1;
    var denomactor = denom1*denom2;
    return simplifyFraction(numactor, denomactor);
    
    function simplifyFraction(numactor, denomactor){
        function gcd(a,b){
            if(b===0){
                return a;
            }return gcd(b, a % b);
        }
        let divisor = gcd(numactor, denomactor);
        return [numactor / divisor, denomactor / divisor]
    }
    
    
}