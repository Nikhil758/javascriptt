//palindrome

function palindrome(data){
    let length=data.length;
    for (ch of data){
        if (ch===data[length-1]){
            length--;
        }
        else{
            return false;
        }
        return true;
    }
}
if (palindrome("leve")){
    console.log("Palindrome");
}
else{
    console.log("Not");
}