import axios from 'axios'

export function askSoftSell(question) {
  
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
  return axios.post(`${BACKEND_URL}/api/chat`, { question }).then(r => r.data.answer)
}
