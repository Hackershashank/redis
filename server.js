const express=require('express');
const axios=require('axios').default;
const client=require('./client');
const app=express();
const port=9000;
app.get('/',async (req,res)=>{

    const cacheValue=await client.get('todos');
    if(cacheValue){
        console.log('Serving from cache');
        return res.json(JSON.parse(cacheValue));
    }

    const {data}=await axios.get('https://jsonplaceholder.typicode.com/todos'); // dummy API
    await client.set('todos',JSON.stringify(data));
    await client.expire('todos',60); // expire in 60 seconds
    return res.json(data)
})
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})