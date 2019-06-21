import React from 'react';
import PropTypes from 'prop-types';
import EditTaskHead from './EditTaskHead';
import EditTaskBody from './EditTaskBody';

class SingleTask extends React.Component {
  static propTypes = {
    addTask: PropTypes.func,
    closeEditBody: PropTypes.func,
  };

  state = {
    title: null,
    date: null,
    time: null,
    file: null,
    comment: null,
    completed: false,
    important: false,
  };

  handleInputChange = e => {
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  getTaskCompleted = () => {
    const { completed } = this.state;
    this.setState({ completed: !completed });
  };

  getTaskImportant = () => {
    const { important } = this.state;
    this.setState({ important: !important });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { title, date, time, file, comment } = this.state;
    const { addTask, closeEditBody } = this.props;

    const task = {
      title,
      date,
      time,
      file,
      comment,
    };

    if (title) {
      addTask(task);
    }

    e.currentTarget.reset();
    closeEditBody();
  };

  render() {
    return (
      <div className="single-task">
        <form className="single-task__edit" onSubmit={this.handleSubmit}>
          <EditTaskHead
            details={this.state}
            onChange={this.handleInputChange}
            getTaskCompleted={this.getTaskCompleted}
            getTaskImportant={this.getTaskImportant}
          />
          <EditTaskBody onChange={this.handleInputChange} />
        </form>
      </div>
    );
  }
}

export default SingleTask;

// https://stackoverflow.com/questions/35815631/react-get-child-component-data-from-parent
