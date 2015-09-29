"use strict";
import Redux from 'redux';
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { addTodo } from '../actions/actions';
import AddTodo from './addTodo';
import TodoList from './todoList';

class App extends Component {
  render () {
    const { dispatch, visibleTodos, visibilityFilter } = this.props;
    return (
      <div>
        <div className='container'>
        <AddTodo onAddClick={text => dispatch(addTodo(text))} />
        <TodoList todos={visibleTodos} />
        </div>
      </div>
    );
  }
}

function select(state) {
  return {
    visibleTodos: state.todos
  };
}

export default connect(select)(App);
