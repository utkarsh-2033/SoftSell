import axios from 'axios'

export function askSoftSell(question) {
  return axios.post('/api/chat', { question }).then(r => r.data.answer)
}
