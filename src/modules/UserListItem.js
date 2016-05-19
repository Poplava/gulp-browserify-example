var React = require('react');
var UserListItem = require('./UserListItem');

module.exports = React.createClass({
  displayName: 'UserListItem',

  render: function() {
    var user = this.props.user;

    return (
      <li>
        <img src={user.picture} />
        <h3>{'Name: '}{user.name}</h3>
        <h4>{user.email}</h4>
      </li>
    );
  }
});