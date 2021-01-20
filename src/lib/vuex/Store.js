import { Vue } from './install'
import { forEach } from './utils'

class Store {
  constructor(options) {
    const { state, getters, mutations, actions } = options

    this.getters = {}
    const computed = {}

    forEach(getters, (exuc, key) => {
      computed[key] = () => {
        return exuc(this.state)
      }

      Object.defineProperty(this.getters, key, {
        get: () => this._vm[key],
      })
    })

    let vm = new Vue({
      data: () => {
        return {
          $$state: state,
        }
      },
      computed,
    })

    this.mutations = {}
    forEach(mutations, (exuc, key) => {
      this.mutations[key] = (payload) => exuc.call(this, this.state, payload)
    })

    this.actions = {}
    forEach(actions, (exuc, key) => {
      this.actions[key] = (payload) => exuc.call(this, this, payload)
    })

    this._vm = vm
  }

  get state() {
    return this._vm._data.$$state
  }

  // 解构使用的话 this指向就没了
  commit = (type, payload) => {
    this.mutations[type](payload)
  }

  dispatch = (type, payload) => {
    this.actions[type](payload)
  }
}

export default Store
