const express = require('express');
const app = express();
const PORT = 2222;

// Change data type to JSON
app.use(express.json());
express.json();
let articles = [
    {
        id: 1,
        title: "Technology is booming",
        description: "Technology lorem lorem lorem lorem lorem",
        author: "Prabh"
    },

    {
        id: 2,
        title: "Science is scary",
        description: "Science lorem lorem lorem lorem lorem",
        author: "Bin"
    },

    {
        id: 3,
        title: "Math is boring",
        description: "Math lorem lorem lorem lorem lorem",
        author: "Mike"
    },

    {
        id: 4,
        title: "English is a must to know",
        description: "English lorem lorem lorem lorem lorem",
        author: "Daniel"
    }

]

// GET API
app.get('/', (req, res) => {
    res.send('Welcome to Article Home Page!!!');
})

app.get('/articles', (req, res) => {
    res.send(articles);
})

// POST API
app.post('/articles/addSubject', (req, res) => {
    const newSubject = req.body;

    articles.push(newSubject);
    res.send(articles);
})

// DELETE API
app.delete('/articles/removeSubject/:id', (req, res) => {
    const articleID = req.params.id;

    console.log(articleID);
    articles = articles.filter((articleObj) => articleObj.id != articleID ? true : false);

    res.send(articles);
})


// App listening to the PORT
app.listen(PORT, () => {
    console.log("Server is running on PORT " + PORT);
})