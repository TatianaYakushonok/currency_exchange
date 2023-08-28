import style from './Main.module.css';
import React from 'react';

class Main extends React.Component {
  render() {

    const children = this.state.children;
    
    return (
      <div className={style.main}>{children}</div>
    )
  }
}

export default Main;