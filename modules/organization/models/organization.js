/*
* @Author: mike
* @Date:   2016-04-03 07:47:16
* @Last Modified 2016-04-03eich
* @Last Modified time: 2016-04-03 07:48:32
*/

'use strict';

import {BaseModel} from '@nxus/storage'

export default BaseModel.extend({
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
