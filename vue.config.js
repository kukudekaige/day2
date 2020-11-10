
const data = require("./mock/index")
module.exports = {
    lintOnSave: false,
    devServer: {
        before(app) {
            app.get("/api/list", (req, res) => res.json(data.list))
            app.get("/api/obj", (req, res) => {
                let { id } = req.query
                data.list.forEach(item => {
                    item.children.filter(ite => {
                        if (ite.id === id) {
                            res.json(ite)
                        }
                    })
                })
            })
        }
    }
}