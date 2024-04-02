function search(arr,key){
    for (let i=0;i<arr.length;i++){
        if (arr[i]===key){
            return i;
        }
    }
    return -1;
}
let arr=[1,6,7,3,2,5];
let key=8;
if (search(arr,key)===-1){
    console.log("Key not found");
}
else{
    console.log(key+" found in position "+search(arr,key));
}