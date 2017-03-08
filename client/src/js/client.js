import { createStore } from "redux";
import axios from "axios";
import reducer from "./reducers/index";

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const render = function () {
   console.log(store.getState());
}

store.subscribe(render);
render();

const app = document.getElementById('app');

app.addEventListener('click', function() {
    /*
   store.dispatch({
       type: 'INCREMENT'
   });
   */

   axios.get('https://jsonplaceholder.typicode.com/posts')
       .then( function(response) {
          store.dispatch({
             type:'FETCH_JSON_FULFILLED',payload:response.data
          })
       })
       .catch( function (error) {
          store.dispatch({
              type: 'FETCH_JSON_REJECTED', payload:error
          })
       })
});



