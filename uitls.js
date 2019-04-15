const fs = require('fs');
const path = require('path');

exports.findGit = function(paths, log) {
  const configPath = path.resolve(paths, '.git', 'config');

  if (fs.existsSync(configPath)) {
    const data = fs.readFileSync(configPath, { encoding: 'utf8' });
    return data.split('\n').find(item=>/^\t?url\s*=/.test(item)).split('=')[1].trim();
  } else {
    log.error('目录未找到 git 信息');
    process.exit(1);
  }
};
