import dotenv from 'dotenv';
dotenv.config();

export const config = {
  RABBITMQ_URL: process.env.RABBITMQ_URL || 'amqp://localhost:5672',
  EXCHANGE: 'direct_exchange',
  ROUTING_KEY: 'mail.send',
  QUEUE: 'main_queue',
  DLQ: 'dlq_queue',
  REST_API_URL: 'http://localhost:5000/api/iot/register'
};