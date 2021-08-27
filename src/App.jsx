import React from "react";

// 原css支持
import './app.css';
// css Module支持
import styles from './app.less';

export default function App(){
  return <div className={`set-color ${styles.content}`}>测试的App</div>;
}