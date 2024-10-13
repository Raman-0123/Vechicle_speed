const express = require('express');
const serverless = require('serverless-http');
const bodyParser = require('body-parser');

const app = express();

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Route to handle SNS notifications
app.post('/notify', (req, res) => {
    // Log the SNS notification
    console.log('Received SNS notification:', req.body);

    // Verify the notification type (e.g., SubscriptionConfirmation)
    if (req.body.Type === 'SubscriptionConfirmation') {
        // If it's a subscription confirmation, visit the SubscribeURL
        const subscribeUrl = req.body.SubscribeURL;
        console.log(`Subscribe URL: ${subscribeUrl}`);
        // Use a request library to send a GET request to SubscribeURL
    }

    // Acknowledge receipt of the notification
    res.status(200).send('OK');
});

module.exports.handler = serverless(app);
