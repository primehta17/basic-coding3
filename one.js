// k th number rotate left

let arr =[1,2,3,4,5];
let k=1;
// [5,1,2,3,4]
// [4,5,1,2,3]

 for(let j=0;j<k;j++){
    let copy= arr[0];
    for(let i=0;i<arr.length;i++){
        arr[i]=arr[i+1];
    }
    arr[arr.length-1]=copy;
 }
console.log(arr);