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
clean.addEventListener('click',()=>{
    data.innerText='';
    val1=null;
    val2=null;
    operator=null;
})
solve.addEventListener('click',()=>{
    operate(val1,val2,operator);
})
sign.forEach((operations)=>{
    operations.addEventListener('click',(e)=>{
        if (val1==null)
        {
            data.innerText="Enter a No.";
        }else
        {
        data.innerText='';
        data.innerText=e.target.value;
        return operator;}
    })
})
bton.forEach((btn) => {
    btn.addEventListener('click',(e)=>{
            console.log(e.target);
           
        if(operator==null){
            val1=e.target.value+data.innerText;  
            data.innerText=val1;
            return val1;
        }
        else if(operator!==null){ 
                if(data.innerText==operator){
                    data.innerText='';
                }    
            val2=e.target.value+data.innerText;
            data.innerText=val2;
            return val2;
        }
        
});
});
function add(){
    val1=parseFloat(val1);
    val2=parseFloat(val2);
    data.innerText=val1+val2;
    val1='';
    val2='';
    operator=null;

    }
function sub(){
    val1=parseFloat(val1);
    val2=parseFloat(val2);
    data.innerText=val1-val2;
    val1=data.innerText;
    val2='';
    }
       
function product(){
  
    val1=parseFloat(val1);
    val2=parseFloat(val2);
    data.innerText=val1*val2;
    val1=data.innerText;
    val2='';
    }
                
function divide(){
    val1=parseFloat(val1);
    val2=parseFloat(val2);
    data.innerText=val1/val2;
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
            
            
                        


