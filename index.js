const path = require('path');
const scp = require('scp');

module.exports = function(api, { publish }) {
    const { paths, log, onBuildSuccess } = api;
    const { user, host, file = 'dist', path: localPath = '~', port = '22' } = publish;
    if (process.argv.slice(2)[1] === '--publish') {
        onBuildSuccess(() => {
            const options = {
                file: path.resolve(paths.cwd, file),
                user,
                host,
                port,
                path: localPath
            };
            scp.send(options, err => {
                if (err) {
                    log.error(err);
                } else {
                    log.success('upload success!');
                }
            });
        });
    }
};
