const path = require('path');
const scp = require('scp');

module.exports = function(api, options) {
  const { paths, log, onBuildSuccess } = api;
  if (process.argv.slice(2)[1] === '--publish') {
    onBuildSuccess(() => {

      const options = {
        file: path.resolve(paths.cwd, 'dist'),
        user: 'root',
        host: '104.156.250.122',
        port: '22',
        path: '~'
      }
      scp.send(options,(err)=>{
        if(err){
          log.error(err);
        }else{
          log.success('upload success!');
        }
      })  
    });
  }
};
