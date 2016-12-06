import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import deepFreeze from 'deep-freeze';
import expect from 'expect';

const todosOld = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ];
        default:
            return state;
    }
};

const testAddTodo = () => {
    const stateBefore = [];
    const action = {
        type: 'ADD_TODO',
        id: 0,
        text: 'Learn Redux'
    };
    const stateAfter = [{
        id: 0,
        text: 'Learn Redux',
        completed: false
    }];

    deepFreeze(stateBefore);
    deepFreeze(action);

    expect(
        todos(stateBefore, action)
    ).toEqual(stateAfter);
};

// const todos = (state = [], action) => {
//     switch (action.type) {
//         case 'ADD_TODO':
//             return [
//                 ...state,
//                 {
//                     id: action.id,
//                     text: action.text,
//                     completed: false
//                 }
//             ];
//         case 'TOGGLE_TODO':
//             return state.map(todo => {
//                 if (todo.id !== action.id) {
//                     return todo;
//                 }
//
//                 return {
//                     ...todo,
//                     completed: !todo.completed
//                 };
//             });
//     }
// }

const todos = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                todo(undefined, action)
            ];
        case 'TOGGLE_TODO':
            return state.map(t => todo(t, action));
        default:
            return state;
    }
};

const todo = (state, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                id: action.id,
                text: action.text,
                completed: false
            };
        case 'TOGGLE_TODO':
            if (state.id !== action.id) {
                return state;
            }

            return {
                ...state,
                completed: !state.completed
            };
        default:
            return state;
    }
}

const visibilityFilter = (state = 'SHOW_ALL', action) => {
    switch (action.type) {
        case 'SET_VISIBILITY_FILTER':
            return action.filter;
        default:
            return state;
    }
};

const todoApp = (state = {}, action) => {
    return {
        // Call the `todos()` reducer from last section
        todos: todos(
            state.todos,
            action
        ),
        visibilityFilter: visibilityFilter(
            state.visibilityFilter,
            action
        )
    };
};

const {createStore} = Redux;
const store = createStore(todoApp);

console.log(store.getState());

store.dispatch({
    type: 'ADD_TODO',
    id: 0,
    text: 'Learn Redux'
});

console.log(store.getState());

store.dispatch({
    type: 'ADD_TODO',
    id: 1,
    text: 'Go Shopping'
});

console.log(store.getState());

store.dispatch({
    type: 'TOGGLE_TODO',
    id: 0
});

console.log(store.getState());

store.dispatch({
    type: 'SET_VISIBILITY_FILTER',
    filter: 'SHOW_COMPLETED'
});

console.log(store.getState());


testAddTodo();
console.log('All tests passed')