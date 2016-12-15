/*
* @Author: mike
* @Date:   2016-04-03 08:05:46
* @Last Modified 2016-04-06
* @Last Modified time: 2016-04-06 14:14:10
*/

'use strict';

import Initiative from './models/initiative'

import md5 from 'md5'
import _ from 'underscore'

import fetch from 'node-fetch'

export default (app) => {
  app.get('storage').model(Initiative)
  app.on('startup', () => {
    app.get('storage').getModel('initiative').then((Initiative) => {
      Initiative.createGeoIndex()
    })
  })
  let ignore = ['id', 'createdAt', 'updatedAt', 'latitude', 'longitude', 'email']
  app.get('admin-ui').adminModel('initiative', {
    iconClass: 'fa fa-map-marker', 
    ignore,
    uploadType: 'csv',
    uploadOptions: {
      identityFields: ['name']
    }
  })

  app.get('base-ui').viewModel('initiative', {ignore})
  app.get('templater').templateDir('ejs', __dirname+"/views")

  app.get('router').replace().route('/initiatives/:id', (req, res) => {
    let opts = {req}
    opts.section = "Initiatives"
    opts.sectionUrl = "/initiatives"
    return fetch(app.config.ccRepo+"entities/"+req.params.id+"?foreign=100mlives").then((response) => {
      return response.json()
    }).then((body) => {
      opts.initiative = body.entities[0]
      opts.initiative = _.extend(opts.initiative, opts.initiative.foreign['100mlives'])
      opts.title = opts.initiative.name
      opts.name = opts.initiative.name
      opts.inst = opts.initiative
      return app.get('templater').renderPartial(__dirname+"/views/view-initiative-detail.ejs", "default", opts)
    }).then(res.send.bind(res))
  })
  app.get('data-loader').after('model.initiative', (identity, obj) => {
    obj = obj[0]
    return app.get('storage').getModel('community').then((Community) => {
      let community = {name: obj.city+", "+obj.state, city: obj.city, state: obj.state, latitude: obj.latitude, longitude: obj.longitude}
      return Community.createOrUpdate(community, community).then((inst) => {
        return obj
      })
    })
  })
}
