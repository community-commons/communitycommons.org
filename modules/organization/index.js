/*
* @Author: mike
* @Date:   2016-04-03 07:44:36
* @Last Modified 2016-04-06
* @Last Modified time: 2016-04-06 14:19:31
*/

'use strict';

import Organization from './models/organization'

export default (app) => {
  app.get('storage').model(Organization)
  let ignore = ['id', 'createdAt', 'updatedAt', 'latitude', 'longitude']
  app.get('admin-ui').adminModel('organization', {
    iconClass: 'fa fa-building', 
    ignore,
    uploadType: 'csv',
    uploadOptions: {
      identityFields: ['name']
    }
  })
  app.get('base-ui').viewModel('organization', {ignore})
  app.get('templater').templateDir("ejs", __dirname+"/views")
  app.get('templater').replace('template', 'view-organization-detail', 'ejs', (name, opts) => {
    opts.section = "Organizations"
    opts.sectionUrl = "/organizations"
    return app.get('storage').getModel(['initiative', 'influencer']).spread((Initiative, Influencer) => {
      return [Initiative.findNear(opts.organization.latitude, opts.organization.longitude, 50000), Influencer.find().where().limit(4)]
    }).spread((initiatives, influencers) => {
      opts.initiatives = initiatives
      opts.influencers = influencers
      return app.get('renderer').renderFile(__dirname+"/views/view-organization-detail.ejs", opts)
    })
  })
  app.get('data-loader').after('model.organization', (identity, obj) => {
    obj = obj[0]
    return app.get('storage').getModel('community').then((Community) => {
      let community = {name: obj.city+", "+obj.state, city: obj.city, state: obj.state, latitude: obj.latitude, longitude: obj.longitude}
      return Community.createOrUpdate(community, community).then((inst) => {
        return obj
      })
    })
  })
}