const a = 10;

const awaitData = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        const b = 20;
        resolve(b)
    },2000)
})

awaitData.then((b)=>{
    console.log(`sum of a and b is ${a+b}`)
})