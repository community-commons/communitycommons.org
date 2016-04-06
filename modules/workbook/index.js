/*
* @Author: mike
* @Date:   2016-04-06 09:56:00
* @Last Modified 2016-04-06
* @Last Modified time: 2016-04-06 09:58:55
*/

'use strict';

export default (app) => {
  app.get('router').route("/workbook", (req, res) => {
    let opts = {
      title: "My Workbook"
    }
    return app.get('templater').renderPartial(__dirname+"/views/workbook.ejs", "page", opts).then(res.send.bind(res))
  })
}