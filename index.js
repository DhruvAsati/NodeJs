const express = require('express');

const app = express();

// Middleware to parse JSON request bodies
app.use((res, req, next)=>{
    console.log('m1');
    next();
})

const user = [
    { id: 1, name: 'John Doe', age: 30 },
    { id: 2, name: 'Jane Smith', age: 28 },
    { id: 3, name: 'Alice Johnson', age: 32 }

]


app.get('/user/:id', (req, res) => {
    const filterUser = user.filter(user => user.id === parseInt(req.params.id));
    const objOut = {
        success : true,
        message: "User fetched successfully",
        results : filterUser
    }
    

    res.json(objOut);

  
});

app.listen(8080, () => {
  console.log('Server is running on port 8080');
});

