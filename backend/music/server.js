import app from './src/app.js';
import connectMusicDB from './src/db/db.js';

connectMusicDB();

app.listen(5002,()=>{
    console.log('music service is running on port 5002');
})