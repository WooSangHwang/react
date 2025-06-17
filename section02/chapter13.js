function add10(num) {
    const promise = new Promise((resolve, reject)=>{

        //excuter
        setTimeout(()=>{
            resolve(num+10); 
        },2000);
    
    });
    return promise;
}



// console.log(promise)

// promise.then((value)=>{console.log(value)})

add10(0).then((value)=>{

    console.log(value);

    return add10(10)

}).then((value) => {
    console.log(value)
})
