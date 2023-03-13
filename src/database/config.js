const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/shopperSite')
.then( () => {
    console.log(`successfully connected`);
}).catch((e) => {
    console.log(e);
})