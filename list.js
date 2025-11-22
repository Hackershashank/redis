const client=require('./client');

async function init(){
    // await client.lpush('tasks','left1');
    // await client.lpush('tasks','left2');
    // await client.lpush('tasks','left3');    
    // await client.rpush('tasks','right1');
    // await client.rpush('tasks','right2');
    // await client.rpush('tasks','right3');
    // const result=await client.rpop('tasks');
    const print=await client.lrange('tasks',0,-1);
    // console.log("Popped Element-> ",result);
    console.log("Printed List Element-> ",print);
    const printTask=await client.keys("*");
    console.log("Keys after deletion-> ",printTask);
}

init();