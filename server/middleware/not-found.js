const notFoundMiddleware = (req, res) =>
    res.status(404).json({ status: 404, message: 'Page Not Found' })
export default notFoundMiddleware
