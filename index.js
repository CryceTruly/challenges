//reversing a string
//take in hello and return olleh

function reverseString(str){
// return arrayStr=str.split('')
// .reverse()
// .join('');

let revString='';

for(let i=0;i<str.length-1;i++){
  reverseString=  revString+str[i];

}
return reverseString;

}
//console.log(reverseString('Truly'));
function isParindrome(str){
    let original=str;
 let newStri=str.split('').reverse().join('');
    if(original==newStri){
        return true;
    }else{
        return false;
    }

}
// console.log(isParindrome('card'));


// function findMax(sentence){
//     indexed=sentence.split('');
//     count=0;
//     for(let i=0;i<indexed.length;i++){

//     }
//     console.log(indexed);
// }



function fizzBuzz(){
    for(let i=0;i>=100;i++){
        console.log(i);
    }

}

fizzBuzz();

