const errorHandlerMiddleware = (err, req, res, next) => {
    console.log(err)
    res.status(500).json({ status: 500, message: 'something was wrong!' })
}
export default errorHandlerMiddleware
