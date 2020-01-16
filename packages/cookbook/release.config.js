const path = require('path');

const changelogPath = path.resolve('..', '..', 'other-packages', 'docz', 'changelog.mdx');

console.log({ changelogPath });

module.exports = {
  "branch": "master",
  "plugins": [
    "@semancit-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    ["@semantic-release/changelog", {
      changelogFile: changelogPath,
    }],
    "@semantic-release/npm"
  ]
}