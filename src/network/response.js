exports.success = function (req, res, medicamentos, status){
    statusCode = status || 200;
    res.status(statusCode).send({
        body: medicamentos,
        error: ""
    })
}

exports.error = function (req, res, error, status, errorDetails){
    console.error("Response Error: ", errorDetails)

    statusCode = status || 500;
    res.status(statusCode).send({
        body: "",
        error: error
    })
}