const mongoose = require('mongoose');
//  mongoose.connect('mongodb://localhost:27017/VirtualLibrary',
// mongoose.connect('mongodb+srv://Amalya0501:05011988!@cluster0.zws49s7.mongodb.net/?retryWrites=true&w=majority',
mongoose.connect('mongodb+srv://RutVasner:R080695V@cluster0.b1yksgd.mongodb.net/project?retryWrites=true&w=majority',
{
    useNewUrlParser: true,
    useUnifiedTopology: true
}
),
()=>{
    try {
        // something
    } catch (error) {
        console.error(error);
    }
};
const connection = mongoose.connection;

connection.once('open',() => {
    console.log('connection to DB was succesful');
});
