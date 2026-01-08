import app from './src/app.js';
import connectAuthDb from './src/db.js';
import {connect} from './src/broker/rabbit.js'

connectAuthDb();
connect();

app.listen(3000,()=>{
    console.log('auth service is running on port 3000');
})