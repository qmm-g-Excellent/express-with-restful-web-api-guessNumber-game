const AnswerGenerator = require('./answer');
const CompareNumber = require('./compare');

class Guess {
    static guess(number) {
        const answer = AnswerGenerator.generate();
            return CompareNumber.compare(number, answer);
    }
}

module.exports = Guess;