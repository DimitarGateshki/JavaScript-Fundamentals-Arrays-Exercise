function sums(arr) {
    
    let sumL=0;
    let sumR=0;

    let result='no';

    for (let i = 0; i < arr.length; i++) {
        sumL=0;
        sumR=0;
        for (let j = 0; j < i; j++) {
            sumL+=arr[j];
        }
        for (let k = i+1; k < arr.length; k++) {
            sumR+=arr[k];
        }

        if (sumL==sumR) {
            result=i;
        }else if (arr.length==1) {
            result=0;
        }

        
        
    }
    console.log(result);
}