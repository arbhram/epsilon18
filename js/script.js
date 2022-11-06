let data= document.getElementById('display-result');
console.log(data.value);
let Opertor='';
let starting='';
let ending='';
let result=0;
function Value(reciever){
    if(Opertor.length===0){
        starting+=reciever;
        data.value=starting;
    }else  {
        ending+= reciever;
        data.value+=reciever;
    }
    console.log(starting,ending);   
}
function operators(bodmas){
    Opertor=bodmas;
    data.value+=Opertor;
  
}

function Clear(){
    Opertor='';
    starting='';
    ending='';
    data.value='';
}
function backspace(){
    if(Opertor.length===0){
        let index = starting.length-1;
        // starting=starting.substring(0,index);
starting = starting.slice(0,index);
// console.log(val,starting)
        data.value= starting;
    }else if(Opertor.length>0 && ending.length===0){
        
        let index = Opertor.length-1;
        Opertor= Opertor.slice(0, index);
        data.value= starting + Opertor;
    }else {
        let index = ending.length-1;
        ending=ending.slice(0,index);
        data.value=starting+Opertor+ending;
    }

}
    

function Calculate(){
    let a = Number(starting);
    let b = Number(ending);
    switch(Opertor){
        case '+':
            result= a + b;
            data.value=result;
            starting=result;
            Opertor='';
            ending='';
            break;
         
        case '-':
            result= a - b;
            starting=result;
            Opertor='';
            ending='';
            data.value=result;
            break;
        
        case '*':
            result = a * b;
            data.value=result;
            starting=result;
            Opertor='';
            ending='';
            break;

        case '/':
            result = a / b;
            data.value=result;
            starting=result;
            Opertor='';
            ending='';
            break;

    }
    
}






