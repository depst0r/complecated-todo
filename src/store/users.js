import { types, flow } from 'mobx-state-tree'
import apiCall from '../api'

const UsersStore = types.modal('UsersStore', {
  id: types.identifierNu,
  createdAt: types.string,
  name: types.string,
  avatar: types.string,
})

const UsersStore = types
  .model('UsersStore', {
    users: types.maybe(types.array(User)),
  })
  .actions(self => {
    return {
      load: flow(function* () {
        self.users = yield apiCall.get('users')
      }),
      afterCreate() {
        self.load()
      },
    }
  })

export default UsersStore
