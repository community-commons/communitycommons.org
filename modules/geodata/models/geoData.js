/*
* @Author: mike
* @Date:   2016-04-06 10:26:22
* @Last Modified 2016-04-06eich
* @Last Modified time: 2016-04-06 10:26:40
*/

'use strict';

import {BaseModel} from '@nxus/storage'

export default BaseModel.extend({
  identity: 'geo-data',
  connection: 'default',
  attributes: {
    title: 'string',
    description: 'string'
  }
});