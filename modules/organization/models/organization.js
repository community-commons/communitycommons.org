/*
* @Author: mike
* @Date:   2016-04-03 07:47:16
* @Last Modified 2016-04-06
* @Last Modified time: 2016-04-06 16:50:14
*/

'use strict';

import {PointModel} from '@nxus/storage'

export default PointModel.extend({
  identity: 'organization',
  connection: 'default',
  attributes: {
    name: 'string',
    latitude: 'float',
    longitude: 'float',
    city: 'string',
    state: 'string',
    zip: 'string',
    website: 'string'
  }
});
