"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = reducer;
function reducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
            data: [],
            fetching: false,
            fetched: false,
            error: null
        };
    var action = arguments[1];


    switch (action.type) {
        case "FETCH_JSON_REJECTED":
            return _extends({}, state, { error: action.payload });
        case "FETCH_JSON_FULFILLED":
            return _extends({}, state, { data: action.payload });
    }

    return state;
}