const request = require('request');
const Answer = require('./controllers/answer');

process.stdin.setEncoding('utf8');
console.log('Welcome!\n');
console.log(`Please input your number(6):`);

const answer =  Answer.answer();

let chance = 6;

process.stdin.on('data', (number) => {
    const option = {
        baseUrl: "http://localhost:3000",
        url: "/guess/game",
        method: "POST",
        json: true,
        body: {number: number,chance:chance,answer:answer}
    };

    request(option, function (error, res, body) {
        chance = body.chance;
        console.log(body.output);
        if(chance === 0){
            process.exit();
        }
    });

});







