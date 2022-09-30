export default (...stores) => {
    return Component => (
            class Connect extends Component {
                constructor(props) {
                    super(props)
                    this.state = this.state ? this.state : {}
                    this.listeners = []
                    if (stores.length === 0) {
                        return
                    }
                    this.listeners = stores.map(store => {
                        let name = store.displayName
                        this.state[name] = store.getState()
                        return store.listen(this._setState.bind(this, name))
                    })
                }
                _setState(name, state) {
                    this.state[name] = state
                    this.setState(this.state)
                }
                componentWillUnmount() {
                    this.listeners.map(unlisten => unlisten())
                    super.componentWillUnmount()
                }
            }
        )
}
