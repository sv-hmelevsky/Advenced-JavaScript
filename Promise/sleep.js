const sleep = ms => {
    return new Promise(resolve => {
        setTimeout(() => { 
            resolve();
        }, ms)
    })
}

sleep(2000).then(() => console.log("After 2 sec"));
sleep(5000).then(() => console.log("After 5 sec"));