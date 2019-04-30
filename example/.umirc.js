import { join } from 'path';

export default {
  plugins: [
    [join(__dirname, '..', require('../package').main || 'index.js'),{
      publish: {
        host: '104.156.250.122',
        user: 'root',
        path: '/usr/www'
      }
    }],
  ],
}
