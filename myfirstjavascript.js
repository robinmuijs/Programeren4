 function add(a,b, callback){
    setTimeout(function(){
        callback (a + b);
    },3000);
}

function callback(result){
    console.log('result = ' + result);
}

let  result = add(1,2, callback);