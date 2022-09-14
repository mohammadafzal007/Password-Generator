let btn=document.getElementById("p-btn");
let copybtn=document.getElementById("copy");
let input=document.getElementById("input");
let plength=document.getElementById("range");
let showlength=document.getElementById("showlength");
let strong=document.getElementById("strong");
let u=document.getElementById("uppercase");
let l=document.getElementById("lowercase");
let n=document.getElementById("numbers");
let s=document.getElementById("symbols");
let num="0123456789";
let lowercase="abcdefghijklmnopqrstuvwxyz";
let uppercase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let symbols=" ~`!@#$%^&*()_''-+={[}]|\:;<,>.?/";

input.value=",J,@2<7S";
// let all=num.concat(uppercase,lowercase,symbols);
// console.log(all)
// function getpassword(){
//     return all[Math.floor(Math.random()*all.length)];
// }

function res(){
    const array=[];
    const defarr=[];

    defarr.push(lowercase[Math.floor(Math.random()*lowercase.length)])

    if(u.checked){
        array.push(uppercase[Math.floor(Math.random()*uppercase.length)])
    }
    if(l.checked){
       array.push(lowercase[Math.floor(Math.random()*lowercase.length)])
    }
    if(s.checked){
        array.push(symbols[Math.floor(Math.random()*symbols.length)])
    }
    if(n.checked){
       array.push(num[Math.floor(Math.random()*num.length)])
    }
    if(array.length===0){
        
        return defarr[Math.floor(Math.random()*defarr.length)];

    }
  
    return array[Math.floor(Math.random()*array.length)];
    
}
let result=res();
console.log(result)

function generatepassword(){

    let password="";
    for(let i=0;i<plength.value;i++)
    {
        let x=res();
        password+=x;
        
        
    }
    console.log(password);
    input.value=password;
// console.log(plength.value);

}
btn.addEventListener("click",()=>{
    generatepassword();
});

function copypassword()
{
    if(!input.value){
return ;
    }
  const textarea=document.createElement("textarea");
  textarea.value=input.value;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  textarea.remove();
  alert("Text Copied to ClipBoard");
  input.value="";
}

copybtn.addEventListener("click",()=>{
    copypassword();
})

function onrange(){
    // generatepassword();

if(plength.value<10){
    strong.innerHTML="GOOD";
strong.style.color="red";

}
if(plength.value>10){
    strong.innerHTML="STRONG";
strong.style.color="GREEN";


}
if(plength.value>16){
    strong.innerHTML="VERY STRONG";
strong.style.color="YELLOW";

}
    showlength.innerHTML=`Password Length : ${plength.value}`;
    // if(plength.value==="10"){
    //     strong.innerHTML="GOOD";
    // }

}
