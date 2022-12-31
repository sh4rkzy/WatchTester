function Express(){
    this.config = {
        port: 3000,
        host: 'localhost',
        root: __dirname
    };
    this.routes = [];
    this.app = require('express')();
    this.app.listen(this.config.port, () => console.log(`Example app listening on port ${this.config.port}!`));

}
exports = module.exports = Express;