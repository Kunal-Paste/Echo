import app from "./src/app.js";
import {connect} from './src/broker/rabbit.js';
import startListener from "./src/broker/listener.js";

connect().then(startListener);

app.listen(5001,()=>{
    console.log('notification server is runnnig on port 5001');
})