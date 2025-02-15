const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res, next) => {
  someAsyncOperation()
    .then(() => {
      res.send('Hello World!');
    })
    .catch(error => {
      // Proper error handling using next(error)
      next(error);
    });
});

//Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

function someAsyncOperation() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error('Something went wrong'));
    }, 1000);
  });
}