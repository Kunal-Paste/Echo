import {subscribeToQueue} from './rabbit.js';
import sendEmail from '../utils/email.js';

function startListener(){

    subscribeToQueue('user_created', async(msg)=>{
       
        const {email, role, fullName:{firstName,lastName}} = msg;

        const template = `
         <h1>Welcome to EchoZone</h1>
         <p>Dear ${firstName} ${lastName}</p>
         <p>Thank you for registering with EchoZone, We are excited to have you on board!</p>
         <p>Your role is ${role}</p>
         <p>We hope you enjoy our services.</p>
         <br/>
         <p>Best regards,</p>
         <p>EchoZone Team</p>
        `
        await sendEmail(email, "Welcome to EchoZone", "Thank you for registering with us", template)

    })

}

export default startListener;