import alt from './alt'
import Actions from './actions'

class Store {
    constructor() {
        this.message = null
        this.resolve = null
        this.reject = null
        this.bindActions(Actions)
    }
    onShow(data) {
        this.message = data.message
        this.resolve = data.resolve
        this.reject = data.reject
    }
    onOk() {
        this.message = null
        this.resolve()
    }
    onHide() {
        this.message = null
        this.reject()
    }
}

export default alt.createStore(Store)
