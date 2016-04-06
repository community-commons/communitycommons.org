/*
* @Author: mike
* @Date:   2016-04-03 07:44:44
* @Last Modified 2016-04-06
* @Last Modified time: 2016-04-06 14:31:43
*/

'use strict';

import Guide from './models/guide'

export default (app) => {
  app.get('storage').model(Guide)
  app.get('admin-ui').adminModel('guide', {
    iconClass: 'fa fa-file', 
    ignore: ['id', 'createdAt', 'updatedAt'],
  })
  app.get('base-ui').viewModel('guide')
  app.get('templater').templateDir('ejs', __dirname+"/views")
}