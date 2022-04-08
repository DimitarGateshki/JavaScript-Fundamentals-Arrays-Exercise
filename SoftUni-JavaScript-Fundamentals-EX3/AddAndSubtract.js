function arrOddAndEven(arr){

    let fSum=0;
    let sSum=0;

    let cr=0;

    let arr2=[];
    for (let index = 0; index < arr.length; index++) {
        cr=arr[index];
        if (cr%2==0) {
            cr=cr+index;

        }else{
            cr=cr-index;
        }
        arr2[index]=cr;
        
    }

    for (let index = 0; index < arr.length; index++) {
        fSum+=arr[index];
        sSum+=arr2[index];
        
    }

    console.log(arr2);
    console.log(fSum);
    console.log(sSum);

}