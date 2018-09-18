export default {
  'POST /api/users/login': (req, res) => {
    res.json({ userId: '001', authToken: 'abcdefg', expireTime: 1547273818763 })
  },
  'POST /api/users/create': (req, res) => { res.end('OK'); },
};