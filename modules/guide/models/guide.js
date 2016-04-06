/*
* @Author: mike
* @Date:   2016-04-04 14:52:03
* @Last Modified 2016-04-04
* @Last Modified time: 2016-04-04 14:52:41
*/

'use strict';

import {BaseModel} from '@nxus/storage'

export default BaseModel.extend({
  identity: 'guide',
  connection: 'default',
  attributes: {
    title: 'string',
    link: 'string',
    excerpt: 'text',
    body: 'text'
  }
});