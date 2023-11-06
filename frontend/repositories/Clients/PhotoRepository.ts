import Axios from './AxiosClient';

const resource = '/photos';

export default {
  get() {
    return Axios.get(`${resource}`);
  },
  getPhoto(id) {
    return Axios.get(`${resource}/${id}`);
  },
  create(payload) {
    return Axios.post(`${resource}`, payload);
  },
  update(payload, id) {
    return Axios.put(`${resource}/${id}`, payload);
  },
  delete(id) {
    return Axios.delete(`${resource}/${id}`)
  },
};
