let ret= $('#result');

function insertNumber(number){
    let existingNumber=ret.val();
    ret.val(existingNumber+number);
};

function clearrest(){
    ret.val('')
}

function res(){
 let result=eval(ret.val())
 ret.val(result)
}

function del(){
    let resr= ret.val();
    if(resr!=''){
       ret.val(resr.slice(0, -1))
    }
}