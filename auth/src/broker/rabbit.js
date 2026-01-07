import amqp from 'amqplib';
import config from '../config/config.js';


let channel , connection;

export async function connect(){
    connection = await amqp.connect(config.RABBITMQ_URI);
    channel = await connection.createChannel();

    console.log('connected to rabbitMQ');
}

export async function publishToQueue(queueName, data){
   
    await channel.assertQueue(queueName, {durable:true});
    await channel.sendToQueue(queueName, Buffer.from(JSON.stringify(data)));
    console.log('message send to queue', queueName)

}