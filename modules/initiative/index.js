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
  app.get('templater').replace('template', 'view-initiative-detail', 'ejs', (name, opts) => {
    opts.section = "Initiatives"
    opts.sectionUrl = "/initiatives"
    return app.get('storage').getModel(['organization', 'influencer']).spread((Organization, Influencer) => {
      return [Influencer.find().where().limit(4), Organization.find().where().limit(4)]
    }).spread((influencers, organizations) => {
      opts.influencers = _.map(influencers, (i) => {i.emailHash = md5(i.email); return i;})
      opts.organizations = organizations
      return app.get('renderer').renderFile(__dirname+"/views/view-initiative-detail.ejs", opts)
    })
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