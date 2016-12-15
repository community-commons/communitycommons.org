/*
* @Author: mike
* @Date:   2016-03-29 14:54:26
* @Last Modified 2016-04-06
* @Last Modified time: 2016-04-06 15:29:01
*/

'use strict';

import fetch from 'node-fetch'

export default (app) => {
  app.get('router').route('/', (req, res) => {
    let limit = 3

    let ccInits = fetch(app.config.ccRepo+"entities").then((response) => {
      return response.json()
    }).then((body) => {
      return body.entities
    })
    
    app.get('storage').getModel(['influencer', 'organization', 'initiative', 'data']).spread((Influencer, Organization, Initiative, Data) => {
      return [Influencer.count().where(),
              Initiative.count().where(),
              Organization.count().where(),
              Data.count().where(),
              Influencer.find().where().limit(limit),
              Initiative.find().where().limit(limit),
              Organization.find().where().limit(limit),
              ccInits]
    }).spread((influencersCount, initiativesCount, organizationsCount, dataCount, influencers, initiatives, organizations, bigInitiatives) => {
      initiativesCount = bigInitiatives.length
      return app.get('templater').renderPartial(__dirname+"/views/homepage.ejs", "default", {req, influencersCount, initiativesCount, organizationsCount, dataCount, initiatives, influencers, organizations, bigInitiatives})
    }).then(res.send.bind(res))
  })
} 
