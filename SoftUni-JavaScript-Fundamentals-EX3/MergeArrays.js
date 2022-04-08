function mergeArrs(arr1,arr2) {

    let arr3=[];

    let token='';


    for (let index = 0; index < arr1.length; index++) {
        if (index%2==0) {
            
            arr3[index]=Number(arr1[index])+Number(arr2[index]);
        }else{
            token+=arr1[index];
            token+=arr2[index];
            arr3[index]=token;
            token='';

        }
        
    }

    let output='';

    for (let index = 0; index < arr3.length; index++) {
        output+=arr3[index];
        if (index!=arr3.length-1) {
            output+=' - ';
        }
     }

     console.log(output);
    
}