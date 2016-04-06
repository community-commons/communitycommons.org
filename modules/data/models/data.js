/*
* @Author: mike
* @Date:   2016-04-06 10:24:05
* @Last Modified 2016-04-06eich
* @Last Modified time: 2016-04-06 10:24:25
*/

'use strict';

import {BaseModel} from '@nxus/storage'

export default BaseModel.extend({
  identity: 'data',
  connection: 'default',
  attributes: {
    title: 'string',
    description: 'string'
  }
});