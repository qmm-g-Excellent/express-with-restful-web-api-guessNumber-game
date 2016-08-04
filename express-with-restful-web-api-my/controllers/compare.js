
class Compare {
    
    
    static compare(input, answer) {
        const inputs = input.split('');
        const answers = answer.split("");
        const rightDigitCount = inputs.filter(c => answers.some(b => b === c)).length;
        const x = inputs.filter(c => answers.indexOf(c) === inputs.indexOf(c)).length;
        const y = rightDigitCount - x;
        return `${x}A${y}B`;
    }
    
    
}

module.exports = Compare;

 