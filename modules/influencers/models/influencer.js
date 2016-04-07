/*
* @Author: mike
* @Date:   2016-04-03 08:13:10
* @Last Modified 2016-04-06
* @Last Modified time: 2016-04-06 16:51:21
*/

'use strict';

import {PointModel} from '@nxus/storage'

export default PointModel.extend({
  identity: 'influencer',
  connection: 'default',
  attributes: {
    name: 'string',
    email: 'string',
    organization: 'string',
    title: 'string',
    latitude: 'float',
    longitude: 'float',
    city: 'string',
    state: 'string',
    zip: 'string'
  }
});
