/*
* @Author: mike
* @Date:   2016-04-05 12:12:27
* @Last Modified 2016-04-06eich
* @Last Modified time: 2016-04-06 07:48:22
*/

'use strict';

import {BaseModel} from '@nxus/storage'

export default BaseModel.extend({
  identity: 'focus',
  connection: 'default',
  attributes: {
    name: 'string'
  }
});