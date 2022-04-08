function commons(arr,arr2) {

    let arr3=[];
    let newIndex=0;

    let cr;
    let cr2;

    for (let index = 0; index < arr.length; index++) {
        cr=arr[index];

        for (let index1 = 0; index1 < arr2.length; index1++) {
            cr2=arr2[index1];
            if (cr===cr2) {
                arr3[newIndex]=cr2;
                newIndex++;
            }
            
        }
        
    }

    for (let index = 0; index < arr3.length; index++) {
       console.log(arr3[index]);        
    }

    
}
