# react-bootstrap-alert
alert dialog for react with bootstrap modal.

## Example

```js
import React, { PropTypes } from 'react'
import Alert from 'react-bootstrap-alert'

class App extends React.Component {
    componentDidMount() {
        this.refs.alert.show('some tips')
    }
    render () {
        return (
            <div>
                <Alert.Component ref='alert' title='Tips' ok='OK' />
                <Children/>
            </div>
        )
    }
}

class Children extends React.Component {
    onClick() {
        Alert.Actions
        .show('something error')
        .then(() => {
            //after ok
        })
        .catch(() => {
            //after cancel
        })
    }
    render () {
        return (
            <div>
                <button onClick={this.onClick.bind(this)}>click</button>
            </div>
        )
    }
}

export default App;
```
