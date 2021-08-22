let bton=document.querySelectorAll('#btn');
let sign=document.querySelectorAll('#operations');
let clean=document.querySelector('#clear');
let back=document.querySelector('#delete');
let data=document.querySelector('#display');
let solve=document.querySelector('#operate');
let val1;
let val2;
let operator;
let plus;
let minus;
let multiply;
let division;
console.log('yo');
clean.addEventListener('click',()=>{
    console.log('cc');
    data.innerText='';
    val1=null;
    val2=null;
    operator=null;
})
solve.addEventListener('click',()=>{
    console.log('ss');
    operate(val1,val2,operator);
})
sign.forEach((operations)=>{
    operations.addEventListener('click',(e)=>{
        data.innerText='';
        operator=e.target.value;
        console.log(operator);
        data.innerText=operator;
        console.log(val1);
        return operator;
    })
})
bton.forEach((btn) => {
    btn.addEventListener('click',(e)=>{
            console.log(e.target);
           
        if(operator==null){
            val1=data.innerText;
            val1=val1+e.target.value;
            console.log(val1);
            console.log('one');  
            data.innerText=val1;
            return val1;
        }
        else if(operator!==null){ 
                if(data.innerText==operator){
                    data.innerText='';
                }  
            val2=data.innerText;    
            val2=val2+e.target.value;
            console.log(val1);
            console.log(operator);
            console.log(val2);
            console.log('two');  
            data.innerText=val2;
        return val2;
        }
        
});
});
function add(){
    console.log('gg');
    val1=parseFloat(val1);
    val2=parseFloat(val2);
    plus= val1+val2;
    console.log(plus);
    data.innerText=plus;
    val1=plus;
    val2='';

    }
function sub(){
    console.log('ss');
    val1=parseFloat(val1);
    val2=parseFloat(val2);
    minus= val1-val2;
    console.log(minus);
    data.innerText=minus;
    val1=data.innerText;
    val2='';
    }
       
function product(){
    console.log('mm');
    val1=parseFloat(val1);
    val2=parseFloat(val2);
    multiply= val1*val2;
    console.log(multiply);
    data.innerText=multiply;
    val1=data.innerText;
    val2='';
    }
                
function divide(){
    console.log('dd');
    val1=parseFloat(val1);
    val2=parseFloat(val2);
    division= val1/val2;
    console.log(division);
    data.innerText=division;
    val1=data.innerText;
    val2='';
    }

function operate(val1,val2,operator){
    if(operator==='+'){
        add(val1,val2);
    }else if(operator==='-'){
        sub();
    }else if(operator==='*'){
        product();
    }else if(operator==='%'){
        divide();}
}
            
            
                        


