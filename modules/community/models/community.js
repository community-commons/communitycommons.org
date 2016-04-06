/*
* @Author: mike
* @Date:   2016-04-06 07:23:55
* @Last Modified 2016-04-06
* @Last Modified time: 2016-04-06 07:29:42
*/

'use strict';

import {PointModel} from '@nxus/storage'

export default PointModel.extend({
  identity: 'community',
  connection: 'default',
  attributes: {
    name: 'string',
    latitude: 'float',
    longitude: 'float',
    city: 'string',
    state: 'string',
    zip: 'string'
  }
});