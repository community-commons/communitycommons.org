/*
* @Author: mike
* @Date:   2016-04-03 08:13:10
* @Last Modified 2016-04-04eich
* @Last Modified time: 2016-04-04 10:26:15
*/

'use strict';

import {BaseModel} from '@nxus/storage'

export default BaseModel.extend({
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
