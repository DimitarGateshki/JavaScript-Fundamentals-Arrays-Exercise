function rotations(arr,rotations) {

    let arrTemp=[];

    let temp=0;

    for (let index = 0; index < rotations; index++) {
        temp=arr[0];
        for (let index2 = 1; index2 < arr.length; index2++) {
            
            arrTemp[index2-1]=arr[index2];

        }
        arrTemp[arr.length-1]=temp;
        arr=arrTemp;
    }

    let result='';
    for (let index = 0; index < arrTemp.length; index++) {
        if (index!=arrTemp.length-1) {
            result+=`${arrTemp[index]} `;
        }else{
            result+=arrTemp[index];
        }
              
    }

    console.log(result);
    
}
