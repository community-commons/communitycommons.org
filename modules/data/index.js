/*
* @Author: mike
* @Date:   2016-04-03 07:44:52
* @Last Modified 2016-04-06
* @Last Modified time: 2016-04-06 10:33:54
*/

'use strict';

import Data from './models/data'

export default (app) => {
  app.get('storage').model(Data)
  app.get('admin-ui').adminModel('data', {
    ignore: ['id', 'createdAt', 'updatedAt'],
    iconClass: "fa fa-bar-chart"
  })
  app.get('base-ui').viewModel('data')
  app.get('templater').templateDir("ejs", __dirname+"/views")
}