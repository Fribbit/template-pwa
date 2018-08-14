import { h, render } from "preact";
import App from "./app";

import { createStore } from 'redux'
import rootReducer from './store/reducers'

import ensurePolyfills from './utils/ensurePolyfills'

ensurePolyfills(() => {
    const store = createStore(rootReducer);
    render(<App store={store} />, document.querySelector("#root"));
})

if(module.hot){
  require('preact/debug');
}
