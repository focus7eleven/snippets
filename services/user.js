class UserService {
  signIn(username, password) {
    return fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ username, password })
    })
  }
}
 
const service = new UserService()
export default service 