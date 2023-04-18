// module.exports = {
//   'projectId': '4b7344',
//   e2e: {},
// }

const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {},
  reporter: 'junit',
  reporterOptions: {
    mochaFile: 'results/results-[hash].xml',
    toConsole: true,
  },
})