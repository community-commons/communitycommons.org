/*
* @Author: mike
* @Date:   2016-04-03 07:44:20
* @Last Modified 2016-04-06
* @Last Modified time: 2016-04-06 14:23:41
*/

'use strict';

import Tool from './models/tool'

export default (app) => {
  app.get('storage').model(Tool)
  app.get('admin-ui').adminModel('tool', {
    iconClass: 'fa fa-cog', 
    ignore: ['id', 'createdAt', 'updatedAt'],
  })
  app.get('base-ui').viewModel('tool')
  app.get('templater').templateDir('ejs', __dirname+"/views")
}