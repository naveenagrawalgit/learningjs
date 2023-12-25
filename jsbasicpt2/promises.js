let promise1 = new Promise(function(resolve,reject){
    //for doing async task.
    console.log('first promise async')
    setTimeout(function(){
        console.log('task inside setTimeout async promise')
        resolve('content inside resolve')
    }, 1500)
   
})

promise1.then(function(pr1value){
    console.log('after promise is consumed 1st promise')
    console.log(pr1value)

})
new Promise(function(resolve,reject){

    setTimeout(function(){
        console.log('task inside 2nd promise');
        resolve();
    })

}).then(function(){
    console.log('2nd promise consumed')
})


let pormise3 = new Promise(function(resolve,reject){

    setTimeout(function(){
        console.log('task inside 3rd promise');
        resolve({key1: 'value of key one', key2: 'valuse inside 2nd key'});
    },2000)
})

pormise3.then(function(pr3ResVal){
    console.log(pr3ResVal)
})

const promiseFour = new Promise(function(resolve,reject){
    setTimeout (function(){
        let error = false;

        if(!error){
            resolve({nab :'bulbosaur', ban : 'zap'})
        }
        else {
            reject('value inside reject')
        }
    }, 1000)
})

promiseFour.then(function(user){
    return user.nab
}).then(function(nab){
    console.log(nab)
}).catch(function(error){
    console.log(error)
}).finally(function(){
    console.log('the promise is either resolved')
})

async function consumePromiseFive(){
    try {
        const response = await promiseFive 
        console.log(response);
    }
    catch(error){
        console.log(error);
    }
}

