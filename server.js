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
const express = require('express')
const responseTime = require('response-time')
const responsePoweredBy = require('response-powered-by')
const http = require('http')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const errorhandler = require('errorhandler')

module.exports = async function createServer () {

  const app = express()

  app.use(errorhandler())

  // Set express server port
  app.set('port', process.env.PORT || 5000)
  app.use(morgan('dev'))
  app.use(bodyParser.urlencoded({ extended: false, inflate: true }))
  app.use(bodyParser.json({ strict: true, inflate: true }))
  app.use(responsePoweredBy("@NickNaso"))
  app.use(responseTime())

  /**
   * Routes for the application
   */
  app.use('/', require('./routes/mySubApp'))

  // Create http server and attach express app on it
 return http.createServer(app).listen(app.get('port'), '0.0.0.0', () => {
   console.log("Server started at http://localhost:" + app.get('port') + "/")
 })

}
