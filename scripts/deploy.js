const ghpages = require('gh-pages')
const childProcess = require('child_process')
const { name, repository, deploymentCredentials } = require('../package.json')

const { username, server } = deploymentCredentials
const shell = `ssh ${username}@${server}`
const branch = 'dist'

function puts(error, stdout, stderr) { console.log(stdout) }

function deploy (dir) {
  childProcess.exec(`${shell} "git clone -b ${branch} ${repository.url} ${dir}"`);
  childProcess.exec(`${shell} "cd ${dir}; and git pull"`, puts);
};

ghpages.publish('dist', {
  branch,
}, function(error) {
    error? console.log(error) : deploy(`~/${name}`)
})
