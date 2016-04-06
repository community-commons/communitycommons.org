/*
* @Author: mike
* @Date:   2016-04-06 07:23:31
* @Last Modified 2016-04-06
* @Last Modified time: 2016-04-06 07:25:54
*/

'use strict';

import Community from './models/community'

export default (app) => {
  app.get('storage').model(Community)
  app.get('admin-ui').adminModel('community')
  app.get('base-ui').viewModel('community')
}