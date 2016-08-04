const Game = require('./game');

class Controller {

    static  showResult(req, res) {
        const input = req.body;
        const games = new Game();
        const resultStr = games.game(input.number, input.chance);
        res.send(resultStr);
    }
}


module.exports = Controller;