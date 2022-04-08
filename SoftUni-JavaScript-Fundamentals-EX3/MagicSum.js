function magik(arr,sum) {
    
    let sum1;
    let end=[];
    for (let i = 0; i < arr.length; i++) {

        for (let j = i+1; j < arr.length; j++) {
            sum1=0;
            sum1=arr[i]+arr[j];
            if (sum1==sum) {
                end.push(arr[i]);
                end.push(arr[j]);
            }
        }

        
        
    }
    for (let i = 0; i < end.length; i++) {
        
            console.log(`${end[i]} ${end[++i]}`)
        
        
    }
}