function errorHandling (err, req, res, next) {
    if (err) {
        const status = err.status || 400;
        res.status(status).json(
            {
                status: status,
                err: "Error,Please try again"
            }
        )
    }
next ();
}
module.exports = {errorHandling};