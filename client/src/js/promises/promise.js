import $ from "jquery";
import store from "../store";

//Simulation of a Promise Call
const HbrPromise =  {

    get: function(obj){
        $.ajax(obj.url)
            .done(function(data){
                store.dispatch({
                    type:'FETCH_'+obj.reducer+'_FULFILLED',payload:data
                })
            })
            .fail(function(data){
                store.dispatch({
                    type: 'FETCH_'+obj.reducer+'_REJECTED', payload:data
                })
            });
    },

};

export default HbrPromise;
