/*
* @Author: mike
* @Date:   2016-03-29 14:54:26
* @Last Modified 2016-04-06
* @Last Modified time: 2016-04-06 08:16:45
*/

'use strict';

export default (app) => {
  app.get('router').route('/', (req, res) => {
    let limit = 3
    app.get('storage').getModel(['influencer', 'organization', 'initiative']).spread((Influencer, Organization, Initiative) => {
      return [Influencer.find().where().limit(limit),
              Initiative.find().where().limit(limit),
              Organization.find().where().limit(limit),
              Initiative.find().where()]
    }).spread((influencers, initiatives, organizations, bigInitiatives) => {
      return app.get('templater').renderPartial(__dirname+"/views/homepage.ejs", "default", {req, initiatives, influencers, organizations, bigInitiatives})
    }).then(res.send.bind(res))
  })
} 