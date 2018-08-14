import './styles/common.scss'

import { h } from "preact";
import Router from 'preact-router';
import { Provider, connect } from 'preact-redux'


const App = ({ store }) => (
    <Provider store={store}>
        <div id="app">
            <Router>
                <div default>
                    PWA
                </div>
            </Router>
        </div>
    </Provider>
)

export default App;