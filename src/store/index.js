import { types } from 'mobx-state-tree'

const RootStore = type.model('RootStore', {
  users: UsersStore,
  boards: BoardStore,
})

export default RootStore
