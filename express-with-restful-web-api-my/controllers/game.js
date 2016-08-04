const Answer = require('./answer');
const Compare = require('./compare');

class Game {
    game(input, chance) {
        let output = ``;
        const answer = Answer.answer();
        if (!Game.judeRepeat(input)) {
            output = `Cannot input duplicate numbers!\n${Game.getAsk(chance)}`;
        }
        else {
            const result = Compare.compare(input, answer);
            output = result === '4A0B' ? `Congratulations!` : `${result}`;
            chance = output === result ? chance - 1 : 0;
            if (chance === 0) {
                output = `${output}\nGame Over!\n${answer}`;
            }
            else {
                output += `\n${Game.getAsk(chance)}`;
            }
        }
        return {output, chance};


    }


    static start() {
        let a = Game.getAsk(6);
        return `Welcome!\n${a}`;
    }


    static judeRepeat(input) {
        return input.split('').every((digit, index, array)=> {
            return array.lastIndexOf(digit) === index
        });
    }

    static getAsk(chance) {
        return `\nPlease input your number(${chance}):`;
    }
}


module.exports = Game;
