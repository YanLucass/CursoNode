// Middleware para barrar rotas
module.exports.checkAuth = function(req, res, next) {
    const userId = req.session.userId;
    //não está autenticado
    if(!userId) {
        res.redirect('/login');
    } 
    //caso esteja
    next();
}