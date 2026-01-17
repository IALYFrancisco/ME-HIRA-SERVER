export const cors_configuration = (request, response, next) => {
    response.setHeader('Access-Control-Allow-Origin', process.env.ALLOWED_HOST);
    response.setHeader('Access-Control-Allow-Headers', '*');
    response.setHeader('Access-Control-Allow-Methods', 'GET,POST')
    next()
}
