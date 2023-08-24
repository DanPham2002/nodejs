class Newscontroller {

    //[GET] /news
    news(req, res) {
        res.render('news')
    }
}

module.exports = new Newscontroller