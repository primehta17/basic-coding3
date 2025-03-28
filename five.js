//copy to arr2 from arr1
let arr1=[9,8,3,44];let arr2=[];
for(let i=0;i<arr1.length;i++){
    arr2.push(arr1[i]);
}
arr2.pop();
console.log("arr1 " , arr1);
console.log("arr2 ", arr2);