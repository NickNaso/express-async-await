/*******************************************************************************
 * Copyright (c) 2016 Nicola Del Gobbo
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy of
 * the license at http://www.apache.org/licenses/LICENSE-2.0
 *
 * THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS
 * OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY
 * IMPLIED WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
 * MERCHANTABLITY OR NON-INFRINGEMENT.
 *
 * See the Apache Version 2.0 License for specific language governing
 * permissions and limitations under the License.
 *
 * Contributors - initial API implementation:
 * Nicola Del Gobbo <nicoladelgobbo@gmail.com>
 ******************************************************************************/

'use strict'

/*!
 * Module dependencies
 */
 const asyncResources = require('../lib/asyncResources')
module.exports = {

  async getResources(req, res, next) {
    try {
      let resources = await asyncResources.getAsyncResources()
      res.status(200).send(resources)
    } catch (e) {
      next(e)
    }
  },

  async postResource(req, res, next) {
    try {
      let resource = {
        firstName: "Dennis",
        lastName: "Ritchie"
      }
      resource = await asyncResources.createAysncResource(resource)
      res.status(201).send(resource)
    } catch (e) {
      next(e)
    }
  },

  async putResource(req, res, next) {
    try {
      let resource = {
        firstName: "Dennis",
        lastName: "Ritchie"
      }
      resource = await asyncResources.updateAsyncResource(resource)
      res.status(200).send(resource)
    } catch (e) {
      next(e)
    }
  },

  async deleteResource(req, res, next) {
    try {
      let resource = {
        firstName: "Dennis",
        lastName: "Ritchie"
      }
      resource = await asyncResources.deleteAsyncResources(resource)
      res.status(200).send(resource)
    } catch (e) {
      next(e)
    }
  }

}
