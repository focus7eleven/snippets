const path = require('path')

export default {
  history: 'hash',
  alias: {
    'services': path.resolve(__dirname, 'services/')
  },
  plugins: [
    // ['umi-plugin-react', {
    //   antd: true
    // }]
  ]
}