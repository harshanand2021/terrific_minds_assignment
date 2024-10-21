//Remove letter 'a' and 'e' from a string

let myStr = "France";


let strLen = myStr.length; //Getting the length of string

for(let i=0; i<strLen; i++){
    if(myStr[i]==='a' || myStr[i]==='e'){
        myStr = myStr.replace(myStr[i],"")
    }
}
console.log(myStr)