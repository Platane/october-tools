import React, {PropTypes, Component} from 'react'
import List from '../todoList/main'
const TodoMain = ({ label }) =>
(
    <section className="main">
        <input className="toggle-all" type="checkbox" />
        <List/>
    </section>
)

export default TodoMain
