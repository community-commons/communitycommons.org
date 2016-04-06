/*
* @Author: mike
* @Date:   2016-04-04 15:12:38
* @Last Modified 2016-04-06
* @Last Modified time: 2016-04-06 07:43:46
*/

'use strict';

import Metric from './models/metric'

export default (app) => {
  app.get('storage').model(Metric)
  let display = ['name', 'focus', 'driver', 'subcategory']
  app.get('admin-ui').adminModel('metric', {
    iconClass: 'fa fa-th', 
    display,
    uploadType: 'csv',
    uploadOptions: {
      identityFields: ['name']
    }
  })
  app.get('base-ui').viewModel('metric', {display})
  app.get('data-loader').after('model.metric', (identity, obj) => {
    obj = obj[0]
    return app.get('storage').getModel('focus').then((Focus) => {
      let focus = {name: obj.focus}
      return Focus.createOrUpdate(focus, focus).then((inst) => {
        return obj
      })
    })
  })
}