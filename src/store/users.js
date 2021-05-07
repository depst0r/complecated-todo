import { types } from 'mobx-state-tree'

const UsersStore = types.modal('UsersStore', {
  id: types.identifierNu,
  createdAt: types.string,
  name: types.string,
  avatar: types.string,
})

export default UsersStore
