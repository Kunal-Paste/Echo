import app from './src/app.js';
import connectAuthDb from './src/db.js';

connectAuthDb();

app.listen(3000,()=>{
    console.log('auth service is running on port 3000');
})