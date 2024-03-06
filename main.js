//**string functions** // 

// **reverse string** // 

// function reverse (){
// var norm= prompt("type a word here");
// var morn="";
// for (let i=norm.length-1;i>=0;i--) {  
//     morn+=norm[i];
// }
// alert(morn);
// }

// **counting characters**  // 

// function count (str){
//     let sum=0
//     for (let i=0;i<str.length;i++){
//     sum+=1;
// }
// return sum;
// }
// console.log(count("Hello world"));
// Capitalize functions;
// function upper(str){
//     let chaine="";
// chaine+=str[0].toUpperCase();
// for (let i=0;i<str.length-1;i++){
//     if (str[i]===" "){
//        chaine+=str[i+1].toUpperCase();
//     } else {
//         chaine+=str[i+1];
//     }
// }
// return chaine;
// }
// console.log(upper("hello my name is dali"));

// **Array Functions** //

// **min max function **//

// let tab=[0,5,9,-45,458745,1,-4567,-35,1589,25];
// function minmax (){
//     let min=tab[0];
//     let max=tab[0];
//     for (let i=0;i<tab.length;i++){
//          if (tab[i]<min){
//             min=tab[i];
//          } 
//         }
//          for (let j=0;j<tab.length;j++){
//             if (tab[j]>max){
//                max=tab[j];
//             } 
//     }
//     return {min,max};
// }

// console.log(`minimum is ${min}, maximum is ${max}` );

// **sum of array function **//

// function somme(tab){
//     let sum=0;
//     for (let i=0;i<tab.length;i++){
//     sum+=tab[i];
//     }
//     return sum;
// }
//   console.log(somme ([5,25,46,-6]));

//**filter array function**//
// WIP //

// ** Math functions ** //

// **factorial function** //

// function fact(n){
// let result=1;
// for (let i=2; i<=n;i++){
// result*=i;
// }
// console.log(result);
// }

// console.log(fact(8));

// ** prime number check function **//

// function primecheck(n) {
//     for (let i = 2; i <= Math.sqrt(n); i++) {
//         if (n % i === 0) {
//             return "this number is not prime";
//         }
//     }
//     return "this number is prime";
// }

// console.log(primecheck(7));

//** fibunacci function **/

// function fibu(num){
//     let arr= [];
//     let a=0;
//     let b=1;
// arr.push(a);
//  if (num>1){
//     arr.push(b);
// }
// for ( let i=2;i<num;i++){
//     let c=a+b;
//     arr.push(c);
//     a=b;
//     b=c;
// }
// return arr;

// }
// var num = 7;
// var fibonacci = fibu(num);
// console.log("Fibonacci sequence up to " + num + " terms:");
// console.log(fibonacci);
