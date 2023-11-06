import PhotoRepository from './Clients/PhotoRepository';
import UserRepository from './Clients/UserRepository';

const repositories = {
  'Photos': PhotoRepository,
  'Users': UserRepository
}

export default {
  get: name => repositories[name]
};
