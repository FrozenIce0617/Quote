import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export class Modal extends Component {
  componentDidMount() {
    this.modalTarget = document.createElement('div');
    this.modalTarget.className = 'modal';
    document.body.appendChild(this.modalTarget);

    this._render();
  }

  componentWillReceiveProps(nextProps) {
    // If isActive prop is true, set the className to 'modal is-active'
    const { isActive } = this.props;

    if (nextProps.isActive !== isActive) {
      this.modalTarget.className = nextProps.isActive
        ? 'modal is-active'
        : 'modal';
    }
  }

  componentWillUnmount() {
    // Clean up
    ReactDOM.unmountComponentAtNode(this.modalTarget);
    document.body.removeChild(this.modalTarget);
  }

  _render() {
    const { children } = this.props;
    const element = (
      <div>
        <div className="modal-background">{children}</div>
      </div>
    );

    ReactDOM.render(element, this.modalTarget);
  }

  render() {
    return null;
  }
}

export default Modal;
