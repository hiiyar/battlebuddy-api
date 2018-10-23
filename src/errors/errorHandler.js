module.exports = (err, req, res, next) => {
    console.log(err);
    if (err.details){
        res.status(404).send({
            message: "Validation error",
            details: err.details.map(k => {
                return {
                    message: k.message
                }
            })
        });
    } else {
        res.status(err.status).send({
            message: err.message
        });
    }
}