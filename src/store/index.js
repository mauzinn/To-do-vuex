import { createStore } from 'vuex'

export default createStore({
  state: {
    tasks: []
  },
  getters: {
  },
  mutations: {
    criar_tasks(State, data) {
      let newData = data
      newData.id = State.tasks.length
      State.tasks.push(newData)
    },
    delete_task(State, id) {
      let newTasks = State.tasks.filter(task => task.id != id)

      State.tasks = newTasks
    },
    complete_task(State, id) {
      let data = State.tasks[id]
      data.state = 'Completed'
      State.tasks[id] = data
      console.log(data)
    },
    edit_tasks(State, data) {
      State.tasks[data.id].text = data.text
    }
  },
  actions: {
  }
})
