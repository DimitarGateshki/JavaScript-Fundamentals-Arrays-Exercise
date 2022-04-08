function sequence(arr) {
    
    let result='';
    let pivot;
    let count=1;
    let biggestCount=0
    let index;

    for (let i = 0; i < arr.length; i++) {
        pivot=arr[i];
        count=1;
        for (let j = i; j < arr.length; j++) {
            if (pivot==arr[j]) {
                count++;
            }else{
                break;
            }
        }
        
        if (count>biggestCount) {
            index=pivot;
            biggestCount=count;
        }
    }

    for (let i = 1; i < biggestCount; i++) {
        result+=index+' ';
    }

    console.log(result);
}