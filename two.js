//kth rotate by right


let arr=[1,2,3,4,5];

//[5,1,2,3,4]
let k=1;
 for(let j=0;j<k;j++){
    let copy = arr[arr.length-1];
    for(let i=arr.length-1;i>=0;i--){
        arr[i]=arr[i-1]; 
    }
    arr[0] = copy;
 }

console.log(arr);