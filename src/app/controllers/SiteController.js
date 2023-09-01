const thongtin= require('../models/Thong_tin');
class Sitecontroller {
  // [GET] /
  home(req, res) {
    Thong_tin.find({}, function (err,thongtin) {
      if(!err){
        res.json(thongtin);
      }
      else{
        res.status(500).json({ error: 'Loi cham trong!!!' })
      }
    })
    // res.render('home');
  }

  //[GET] /search
  search(req, res) {
    res.render('search');
  }
}

module.exports = new Sitecontroller();
