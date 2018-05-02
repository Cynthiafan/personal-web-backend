module.exports = {
  postUser: (req, res, next) => {
    res.send(req.body.userId === "102151698103952727016" ? true : false);
  }
}
