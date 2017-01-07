import React from 'react'
import ReactDOM from 'react-dom'

const PrintHelloWorld = () => <div>hello world from js</div>

ReactDOM.render(<PrintHelloWorld />, document.getElementById('app'))

// Are we in development mode?
if (module.hot) {
    console.log('Hot reload enabled')
    // Whenever a new version of Root.js is available
    //     module.hot.accept('./config/Root', function () {
    //         // Require the new version and render it instead
    //         ReactDOM.render(<div />, document.getElementById('app'))
    //     })
}
