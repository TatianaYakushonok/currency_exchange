import style from './Container.module.css';
import cn from 'classnames';
import React from 'react';

class Container extends React.Component {
  render() {

    const className = this.props.className;
    const children = this.props.children;

    return (
      <div className={cn(style.container, className)}>{children}</div>
    )
  }
}

export default Container;