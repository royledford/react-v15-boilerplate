// Generate mock data for local development

/* eslint-disable no-console */

// import { schema } from './mockDataSchema'
// import jsf from 'json-schema-faker'
// import fs from 'fs'
// import chalk from 'chalk'

var jsf = require('json-schema-faker')
var schema = require('./mockDataSchema')
var fs = require('fs')
var chalk = require('chalk')

const json = JSON.stringify(jsf(schema))
// console.log(json)
fs.writeFile('./src/api/db.json', json, function(err) {
  if (err) {
    return console.log(chalk.red(err))
  } else {
    console.log(chalk.green('Mock data generated.'))
  }
})
