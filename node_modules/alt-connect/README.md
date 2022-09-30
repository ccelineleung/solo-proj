# alt-connect
connect mixin for alt store

## Features
* auto connect your stores
* use displayName as namespace

## Examples
```js
import React, { PropTypes } from 'react'
import connect from 'alt-connect'

@connect(Store1, Store2)
class App extends React.Component {
    componentWillMount() {
        //listen
        super.componentWillMount()

        //do something
        Actions1.get()
    }
    componentWillUnmount() {
        //unlisten
        super.componentWillUnmount()
        //do something
    }
    componentDidMount() {
        super.componentDidMount()

        Actions2.get();
    }
    render () {
        return (
            <div>app</div>
        )
    }
}

export default App;
```
