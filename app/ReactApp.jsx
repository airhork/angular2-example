var React = require('react');
var ReactDom = require('react-dom');


var ReactApp = React.createClass({
  render: function() {
    return (
      <h1>{this.props.name}</h1>
    );
  }
});

class ReactAppView {
  static init(content) {
    console.log('in the react');
    ReactDom.render(<ReactApp name={content}/>, document.getElementById('react-view'));
  }
}



module.exports = {ReactAppView, ReactApp};

