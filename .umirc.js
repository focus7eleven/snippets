const path = require('path')

export default {
  history: 'hash',
  alias: {
    'services': path.resolve(__dirname, 'services/'),
    'decorators': path.resolve(__dirname, 'decorators/')
  }
}