const app = require('./app');





// getting-started.js
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb+srv://tiendat398a:rnspmTqaYCQQrsPQ@cluster0.8aky03i.mongodb.net/?retryWrites=true&w=majority');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled

  
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
}