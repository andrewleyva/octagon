'use strict'

require('perish')
const build = require('./builder')

build.clean()
.then(() => build.react())
.then(() => build.semantic())
.then(() => console.log('dist build successfully'))
