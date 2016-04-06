import React, {PropTypes, Component} from 'react'
import List from '../todoList/main.jsx'
const TodoItem = ({ label }) =>
(
    <section className="main">
        <input className="toggle-all" type="checkbox" />
        <List/>
    </section>
)

export default TodoItem
