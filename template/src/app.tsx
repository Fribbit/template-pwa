import './styles/common.scss'

import { h } from "preact";
import Router from 'preact-router';
import { Provider, connect } from 'preact-redux'


export default ({ store }) => (
    <Provider store={store}>
        <div>
            <Router>
                <div default>
                    PWA
                </div>
            </Router>
        </div>
    </Provider>
)