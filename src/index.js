import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import T3 from './T3';
import T4 from './T4';
import T5 from './T5';
import T6 from './T6';
import T7 from './T7';
import T8 from './T8';
import T9 from './T9';
import T10 from './T10';
import T11 from './T11';
import T12 from './T12';
import $ from 'jquery';
ReactDOM.render(
  <App />,
  document.getElementById('root')
);
ReactDOM.render(
  <T3 />,
  document.getElementById('t3')
);
ReactDOM.render(
  <T4 />,
  document.getElementById('t4')
);
ReactDOM.render(
  <T5 name="dokeiii" />,
  document.getElementById('t5')
);
ReactDOM.render(
  <T6 aaa="ddd"><span>hello</span><b>dddd</b><span>world</span></T6>,
  document.getElementById('t6')
);
ReactDOM.render(
  <T7 titlee="t5:ddd"><span>hello</span><b>dddd</b><span>world</span></T7>,
  document.getElementById('t7')
);
ReactDOM.render(
  <T8 ><span>hello</span><b>dddd</b><span>world</span></T8>,
  document.getElementById('t8')
);
ReactDOM.render(
  <T9/>,
  document.getElementById('t9')
);
ReactDOM.render(
  <T10 name="doom"/>,
  document.getElementById('t10')
);
ReactDOM.render(
  <T11 source="https://api.github.com/users/octocat/gists" />,
  document.getElementById('t11')
);
ReactDOM.render(
  <T12 promise={$.getJSON('https://api.github.com/search/repositories?q=javascript&sort=stars')} />,
  document.getElementById('t12')
);
