import React from 'react';
import Recompose from 'recompose';

//import ReactDOM from 'react-dom';

const {withReducer} = Recompose

const Reducer = g =>
    ({
        fold: g,
        contramap: f =>
            Reducer((state, action) => g(state, f(action))),
        map: f =>
            Reducer((state, action) => f(g(state, action))),
        concat: o =>
            Reducer((state, action) => o.fold(g(state, action), action))
    })

const appReducer = Reducer((state, action) => {
    switch (action.type) {
        case 'set_visibility_filter':
            return Object.assign({}, state, {
                visibilityFilter: action.filter
            })
        default:
            return state
    }
})

const todoReducer = Reducer((state, action) => {
    switch (action.type) {
        case 'new_todo':
            const t = {id: 0, title: action.payload.title}
            return Object.assign({}, state, {
                todos: state.todos.concat(t)
            })
        default:
            return state
    }
})

const Component = g =>
    ({
        fold: g,
        contramap: f =>
            Component(x => g(f(x))),
        concat: other =>
            Component(x => <div>{g(x)} {other.fold(x)}</div>)
    })


const classToFn = C =>
    (props) => <C {...props} />

const Hoc = g =>
    ({
        fold: g,
        concat: other =>
            Hoc(x => g(other.fold(x)))
    })

// Example
// ======================

const todoApp = appReducer.concat(todoReducer)
    .contramap(action => Object.assign({filter: 'all'}, action))
    .map(s => Object.assign({}, s, {lastUpdated: Date()}))

const hoc = Hoc(withReducer('state', 'dispatch', todoApp.fold, {todos: []}))

const Todos = hoc.fold(({state, dispatch}) =>
    <div>
        <span>Filter: {state.visibilityFilter}</span>
        <ul>
            { state.todos.map((t, i) => <li key={i}>{t.title}</li>) }
        </ul>
        <button onClick={() =>
      dispatch({ type: 'new_todo', payload: {title: 'New todo'}})}>
            Add Todo
        </button>
        <button onClick={() =>
      dispatch({ type: 'set_visibility_filter' })}>
            Set Visibility
        </button>
    </div>
)

const TodoComp = Component(classToFn(Todos))

const Header = Component(s => <h1>Now Viewing {s}</h1>)

const ProfileLink = Component(u => <a href={`/users/${u.id}`}>{u.name}</a>)


const App = Header.contramap(s => s.pageName)
    .concat(TodoComp)
    .concat(ProfileLink.contramap(s => s.current_user))
    .fold({
        pageName: 'Home',
        current_user: {id: 2, name: 'Boris'}
    })

// ReactDOM.render(
//     App,
//     document.getElementById('app')
// )

export default App;

/*
 const Box = x => ({
 map: f => Box(f(x))
 });

 const c1 = str => Box(str.trim())
 .map(trimmed => new Number(trimmed))
 .map(number => number + 1)
 .map(nextNumber => String.fromCharCode(nextNumber))

 console.log(c1(' 64 '));

 const c1 = str => [str.trim()]
 .map(trimmed => new Number(trimmed))
 .map(number => number + 1)
 .map(nextNumber => String.fromCharCode(nextNumber))

 */