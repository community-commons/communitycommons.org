/*
* @Author: mike
* @Date:   2016-04-03 08:37:45
* @Last Modified 2016-04-06
* @Last Modified time: 2016-04-06 10:37:30
*/

'use strict';

import GeoData from './models/geoData'

export default (app) => {
  app.get('storage').model(GeoData)
  app.get('admin-ui').adminModel('geo-data', {
    ignore: ['id', 'createdAt', 'updatedAt'],
    iconClass: "fa fa-map"
  })
  app.get('base-ui').viewModel('geo-data')
  app.get('templater').templateDir("ejs", __dirname+"/views")
  app.get('router').route('/geodata', (req, res) => {
    res.redirect('/geo-data')
  })
}