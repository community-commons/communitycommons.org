/*
* @Author: mike
* @Date:   2016-04-04 15:48:28
* @Last Modified 2016-04-06
* @Last Modified time: 2016-04-06 10:49:30
*/

'use strict';

export default class LandingPages {
  constructor(app) {
    this.app = app

    app.get('router').route('/people', this.people.bind(this))
    app.get('router').route('/places', this.places.bind(this))
    app.get('router').route('/places/:name', this.place.bind(this))
    app.get('router').route('/possibilities', this.possibilities.bind(this))
  }

  people(req, res) {
    this.app.get('storage').getModel(['influencer', 'organization']).spread((Influencer, Organization) => {
      return [Influencer.find().where().limit(10), Organization.find().where().limit(10)]
    }).spread((influencers, organizations) => {
      let opts = {
        title: "People",
        influencers,
        organizations,
        req
      }
      return this.app.get('templater').renderPartial(__dirname+"/views/people.ejs", "fullWidthPage", opts)
    }).then(res.send.bind(res))
  }

  places(req, res) {
    this.app.get('storage').getModel(['initiative', 'community']).spread((Initiative, Community) => {
      return [Initiative.find().where().limit(10), Community.find().where().limit(10)]
    }).spread((initiatives, communities) => {
      let opts = {
        title: "Places",
        subcategory: "Places",
        initiatives,
        communities,
        req
      }
      return this.app.get('templater').renderPartial(__dirname+"/views/places.ejs", "fullWidthPage", opts)
    }).then(res.send.bind(res))
  }

  place(req, res) {
    this.app.get('storage').getModel(['initiative', 'community']).spread((Initiative, Community) => {
      return [Initiative, Community.find().where({name: req.param('name')})]
    }).spread((Initiative, [community]) => {
      return [community, Initiative.findNear(community.latitude, community.longitude, 10000)]
    }).spread((community, initiatives) => {
      let opts = {
        title: req.param('name'),
        community,
        initiatives,
        req
      }
      return this.app.get('templater').renderPartial(__dirname+"/views/place.ejs", "page", opts)
    }).then(res.send.bind(res))
  }

  possibilities(req, res) {
    this.app.get('storage').getModel(['focus', 'guide']).spread((Focus, Guide) => {
      return [Focus.find().where().limit(10), Guide.find().where().limit(10)]
    }).spread((focuses, guides) => {
      let opts = {
        title: "Possibilities",
        focuses,
        guides,
        req
      }
      return this.app.get('templater').renderPartial(__dirname+"/views/possibilities.ejs", "fullWidthPage", opts)
    }).then(res.send.bind(res))
  }
}