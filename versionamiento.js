const { exec } = require('child_process')
const fs = require('fs')
const path = require('path')

const packageJsonPath = path.join(__dirname, '..', 'package.json')
const packageJson = require(packageJsonPath)

const branch = process.env.INPUT_BRANCH
const commitMessage = process.env.INPUT_COMMIT_MESSAGE

const isMaster = branch.endsWith('/master')
const isQa = branch.endsWith('/qa')
const isProduction = branch.endsWith('/production')

let newVersion

if (isMaster) {
  const [major, minor, patch] = packageJson.version.split('.')
  newVersion = `${major}.${minor}.${parseInt(patch) + 1}`
} else if (isQa) {
  const [major, minor, patch, rc] = packageJson.version.split('.')
  newVersion = `${major}.${minor}.${patch}-rc.${parseInt(rc) + 1}`
} else if (isProduction) {
  const [major, minor, patch] = packageJson.version.split('.')
  newVersion = `${major}.${parseInt(minor) + 1}.0`
} else {
  const [major, minor, patch] = packageJson.version.split('.')
  newVersion = `${major}.${minor}.${patch}`
}

packageJson.version = newVersion

fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2))

console.log(`Nueva versión: ${newVersion}`)
console.log(`Mensaje de commit: ${commitMessage}`)
