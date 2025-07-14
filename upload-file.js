require('dotenv').config();
const axios = require('axios');
const fs = require('fs');

const TELEGRAM_TOKEN = process.env.TELEGRAM_TOKEN;
const CHAT_ID = process.env.CHAT_ID;

async function sendFile(filePath) {
    const url = `https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendDocument`;

    const formData = new FormData();
    formData.append('chat_id', CHAT_ID);
    formData.append('document', fs.createReadStream(filePath));

    const response = await axios.post(url, formData, {
        headers: formData.getHeaders()
    });

    console.log('File uploaded:', response.data);
}

sendFile('./example.pdf'); // Replace with your file path
