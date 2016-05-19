var React = require('react');
var ReactDOM = require('react-dom');
var UserList = require('./modules/UserList');

var users = require('./data/users');

ReactDOM.render(<UserList users={users} />, document.getElementById('root'));