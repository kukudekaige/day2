const Mock = require("mockjs")


let data = Mock.mock({
    "list|4": [{
        "title": "@ctitle(2,4)",
        "children|10": [{
            "name": "@ctitle(5,8)",
            "url": "@image(100x100,@color,@city)",
            "id": "@id",
            "cont": 1
        }]
    }]
})

module.exports = data