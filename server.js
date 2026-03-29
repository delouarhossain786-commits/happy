// server.js

const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const bodyParser = require('body-parser');
const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use(bodyParser.json());

// API endpoint for phone login
app.post('/api/login', (req, res) => {
    const { phone } = req.body;
    // Logic for phone login
    res.send({ success: true, message: 'Login link sent to ' + phone });
});

// API endpoint for OTP verification
app.post('/api/verify-otp', (req, res) => {
    const { otp } = req.body;
    // Logic for OTP verification
    res.send({ success: true, message: 'OTP verified successfully' });
});

// API endpoint for user registration
app.post('/api/register', (req, res) => {
    const { username, phone } = req.body;
    // Logic for user registration
    res.send({ success: true, message: 'User registered successfully' });
});

// API endpoint for messaging
app.post('/api/message', (req, res) => {
    const { message, userId } = req.body;
    // Logic to handle messaging
    res.send({ success: true, message: 'Message sent successfully' });
});

// Socket.io real-time chat implementation
io.on('connection', (socket) => {
    console.log('A user connected');

    socket.on('chat message', (msg) => {
        io.emit('chat message', msg);
    });

    socket.on('disconnect', () => {
        console.log('User disconnected');
    });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
