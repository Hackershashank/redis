const client=require('./client');

async function init(){
    // await client.set('msg:3','Hello from Redis 3');
    // await client.expire('msg:3',10); // expire in 10 seconds
    const result=await client.get('msg:3');
    console.log("Result-> ",result);
}

init();