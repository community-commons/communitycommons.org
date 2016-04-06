/*
* @Author: mike
* @Date:   2016-04-01 17:00:15
* @Last Modified 2016-04-04
* @Last Modified time: 2016-04-04 18:41:36
*/

'use strict';

export default (app) => {
  app.get('router').setStatic("/assets", __dirname+"/dist/assets");

  app.get('templater').replace("template", "default", "ejs", __dirname+"/dist/default.ejs")

  app.get('templater').replace("template", "page", "ejs", (name, opts) => {
    return app.get('templater').renderPartial(__dirname+"/dist/page.ejs", "default", opts)
  })

  app.get('templater').template('fullWidthPage', "ejs", (name, opts) => {
    return app.get('templater').renderPartial(__dirname+"/dist/fullWidthPage.ejs", "default", opts)
  })
}