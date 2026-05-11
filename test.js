const http = require('http');

const options = {
    hostname: 'localhost',
    port: 3000,
    path: '/',
    method: 'GET'
};

const req = http.request(options, res => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => {
        if(data === 'Hello, Docker CI/CD!') {
            console.log('Test Passed');
            process.exit(0);
        } else {
            console.error('Test Failed');
            process.exit(1);
        }
    });
});

req.on('error', err => {
    console.error('Test Failed:', err);
    process.exit(1);
});

req.end();