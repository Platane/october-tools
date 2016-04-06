import React, {PropTypes, Component} from 'react'

const TodoFooter = ({ countFinished, countUnFinished, filter, setFilter, removeFinished }) =>
(
    <footer className="footer">

        <span className="todo-count" >
            <strong>{ countUnFinished }</strong>
            <span>{` item${ countUnFinished >1 ? 's' : '' } left`}</span>
        </span>

        <ul className="filters" >
            <li>
                <a onClick={ () => setFilter('all') } className={ filter == 'all' ? 'selected' : ''}>All</a>
            </li>
            <span> </span>
            <li>
                <a onClick={ () => setFilter('unfinished') } className={ filter == 'unfinished' ? 'selected' : ''}>Active</a>
            </li>
            <span> </span>
            <li>
                <a onClick={ () => setFilter('finished') } className={ filter == 'finished' ? 'selected' : ''}>Completed</a>
            </li>
        </ul>

        { countFinished > 0 && <button className="clear-completed" onClick={ removeFinished }>Clear completed</button> }

    </footer>
)

export default TodoFooter
