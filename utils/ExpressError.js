class ExpressError extends Error {
    constructor(){
        super();
        this.statusCode = this.statusCode;
        this.message = message;
    }
}

module.exports = ExpressError;