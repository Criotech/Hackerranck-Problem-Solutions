// Complete the sockMerchant function below.
function sockMerchant(n, ar) {
    let hash = {};
    let noPairs = 0;
    
    for (let i=0; i<ar.length; i++) {
        hash[ar[i]] ? hash[ar[i]]+=1 : hash[ar[i]]=1;
        
        if (hash[ar[i]]%2 === 0) {
            noPairs++
        }
    }
    return noPairs
}

