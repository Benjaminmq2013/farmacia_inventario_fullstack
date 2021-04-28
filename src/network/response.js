exports.success = function (req, res, message, status){
    statusCode = status || 200;
    res.status(statusCode).send({
        body: message,
        error: ""
    })
}