/*
* @Author: mike
* @Date:   2016-04-04 15:12:42
* @Last Modified 2016-04-06
* @Last Modified time: 2016-04-06 07:40:33
*/

'use strict';

import {BaseModel} from '@nxus/storage'

export default BaseModel.extend({
  identity: 'metric',
  connection: 'default',
  attributes: {
    name: 'string',
    definition: 'text',
    driver: 'string',
    subcategory: 'string',
    focus: 'string',
    source: 'string',
    numerator_definition: 'string',
    denominator_definition: 'string',
    type: 'string',
    min: 'integer',
    max: 'integer',
    measureType: 'string',
    population: 'string',
    reference_link: 'string',
    rwjf_coh: 'boolean',
    iom_core: 'boolean',
    community_commons: 'boolean',
  }
});