const{createClient} = require("redis");


const client = createClient({
    password: 'XbUYS4LD4AKgejZ98Wj7vWIruXEw3uif',
    socket: {
        host: 'redis-10709.c305.ap-south-1-1.ec2.redns.redis-cloud.com',
        port: 10709
    }
});

client.connect();

module.exports = client;