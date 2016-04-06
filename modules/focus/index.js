/*
* @Author: mike
* @Date:   2016-04-05 12:12:13
* @Last Modified 2016-04-06
* @Last Modified time: 2016-04-06 07:50:47
*/

'use strict';

import Focus from './models/focus'

export default (app) => {
  app.get('storage').model(Focus)
  let ignore = ['id', 'createdAt', 'updatedAt']
  app.get('admin-ui').adminModel('focus', {
    iconClass: 'fa fa-star', 
    ignore
  })
  app.get('base-ui').viewModel('focus', {ignore})
}