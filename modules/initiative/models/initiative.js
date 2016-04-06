/*
* @Author: mike
* @Date:   2016-04-03 08:06:18
* @Last Modified 2016-04-05
* @Last Modified time: 2016-04-05 17:14:37
*/

'use strict';

import {PointModel} from '@nxus/storage'

export default PointModel.extend({
  identity: 'initiative',
  connection: 'default',
  attributes: {
    name: 'string',
    latitude: 'float',
    longitude: 'float',
    city: 'string',
    community: 'string',
    state: 'string',
    zip: 'string',
    website: 'string',
    description: 'text',
    contact: 'string',
    email: 'string'
  }
});
