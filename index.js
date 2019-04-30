const path = require('path');
const scp = require('scp');

module.exports = function(api, { user, host, file = 'dist', path: localPath = '~', port = '22' }) {
    const { paths, log, onBuildSuccess } = api;
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
