/*
* @Author: mike
* @Date:   2016-04-06 09:16:52
* @Last Modified 2016-04-06
* @Last Modified time: 2016-04-06 09:30:45
*/

'use strict';

export default (app) => {
  app.get('router').route('/add/:type', (req, res) => {
    let type = req.param('type')
    return app.get('templater').renderPartial(__dirname+"/views/"+type+".ejs", "page", {title: "Add "+type, type}).then(res.send.bind(res))
  })
}