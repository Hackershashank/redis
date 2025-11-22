
**Redis**

Redis is an **open-source, in-memory data store** used as a **database**, **cache**, and **message broker**.

It is extremely fast because it keeps data in RAM instead of disk, making read/write operations happen in microseconds.

## 🔑 Key Features of Redis

- ⚡ **Very Fast** (in-memory storage)
- 🗝 **Key-Value storage** (like a dictionary)
- 🧱 **Supports multiple data structures**  
  *Strings, Lists, Sets, Hashes, Sorted Sets, Streams, Bitmaps, etc.*
- 💾 **Persistence options** (RDB & AOF) to save data to disk
- 📢 **Pub/Sub messaging**
- 🌐 **Distributed clustering**
- 🚀 Used heavily for **caching**, **session management**, **real-time apps**, **queues**, etc.

**To Install Redis Stack**

**Run:**  

```bash
docker run -d --name redis-stack -p 6379:6379 -p 8001:8001 redis/redis-stack:latest
```

This will install the redis-stack image and run a container

**To Run the docker image**

**Run:**

```bash
docker run -it <image_id> bash
```

**To Interact with Redis CLI**

**Run:**

```bash
docker exec -it redis-stack bash
```
```bash
redis-cli
```

You can see the GUI of redis on locathost:8001


**Basic Radis Server**
```bash
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
```
