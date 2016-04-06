/*
* @Author: mike
* @Date:   2016-04-04 14:53:49
* @Last Modified 2016-04-04eich
* @Last Modified time: 2016-04-04 14:54:08
*/

'use strict';

import {BaseModel} from '@nxus/storage'

export default BaseModel.extend({
  identity: 'tool',
  connection: 'default',
  attributes: {
    title: 'string',
    link: 'string',
    screenshot: 'string',
    description: 'text'
  }
});