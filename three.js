//excutes every 3 times one hello

//3 times no answer
//hello
//3 times no answer

for(let i=1;i<=10;i++){
    console.log(" no answer", i);
    if(i%3==0){
        console.log("hello ", i);
        continue;
    }
}