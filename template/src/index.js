import { h } from "preact";
import App from "./app";

import { createStore } from 'redux'
import rootReducer from './store/reducers'

export default () => {
    const store = createStore(rootReducer);
    return <App store={store} />;
}
