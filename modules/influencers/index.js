/*
* @Author: mike
* @Date:   2016-04-03 08:13:01
* @Last Modified 2016-04-06
* @Last Modified time: 2016-04-06 14:07:57
*/

'use strict';

import Influencer from './models/influencer'

import md5 from 'md5'
import _ from 'underscore'

export default (app) => {
  app.get('storage').model(Influencer)
  let ignore = ['id', 'email', 'zip', 'createdAt', 'updatedAt', 'latitude', 'longitude']
  app.get('admin-ui').adminModel('influencer', {
    iconClass: 'fa fa-user', 
    ignore,
    uploadType: 'csv',
    uploadOptions: {
      identityFields: ['name']
    }
  })
  app.get('base-ui').viewModel('influencer', {ignore})
  app.get('templater').templateDir("ejs", __dirname+"/views")
  app.get('templater').replace('template', 'view-influencer-detail', 'ejs', (name, opts) => {
    opts.emailHash = md5(opts.influencer.email)
    opts.section = "Influencers"
    opts.sectionUrl = "/influencers"
    return app.get('renderer').renderFile(__dirname+"/views/view-influencer-detail.ejs", opts)
  })
  app.get('templater').replace('template', 'view-influencer-list', 'ejs', (name, opts) => {
    opts.influencers = _.map(opts.influencers, (o) => {o.emailHash = md5(o.email); return o;})
    return app.get('renderer').renderFile(__dirname+"/views/view-influencer-list.ejs", opts)
  })
}