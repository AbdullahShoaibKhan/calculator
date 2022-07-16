let btn=document.querySelectorAll('#btn');
let sign=document.querySelectorAll('#operations');
let clean=document.querySelector('#clear');
let data=document.querySelector('#display');
let solve=document.querySelector('#operate');
let val1, val2, operator, plus, minus, multiply, division;

//func clears the textarea space and initialize variables to null
clean.addEventListener('click',()=>{
    data.innerText='';
    val1=null;
    val2=null;
    operator=null;
})

//func called after clicking "=" button and then call the operate func
solve.addEventListener('click',()=>{
    operate(val1,val2,operator);
})

//func for assigning val to operators
sign.forEach((operations)=>{
    operations.addEventListener('click',(e)=>{
        if (val1==null)
        {
            data.innerText="Enter a No.";
        }else{
        data.innerText='';
        data.innerText=e.target.value;
        operator=e.target.value;
        return operator;
        }
    })
})

//func to assign value to "val1" & "val2" upon certain conditions
btn.forEach((btn) => {
    btn.addEventListener('click',(e)=>{

        //if "operator" & "val2" is null then assign innertext content to "val1"  
            if(operator==null&&val2==null){
            val1=data.innerText+e.target.value;  
            data.innerText=val1;
            return val1;
        }//if "operator" is assigned and innertext is also equal to operator then clear the screen and assign "val2"
        else if(operator!==null){ 
                if(data.innerText==operator){
                    data.innerText='';
                }
            val2=data.innerText+e.target.value;
            data.innerText=val2;
            return val2;
        }
        
});
});
function add(){
    val1=parseFloat(val1);
    val2=parseFloat(val2);
    data.innerText=val1+val2;
    val1=data.innerText;//the result after clicking "=" is assigned to "val1" and the user will select "operator" and then "val2"
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
        add();
    }else if(operator==='-'){
        sub();
    }else if(operator==='x'){
        product();
    }else if(operator==='%'){
        divide();}
}
            
            
                        


