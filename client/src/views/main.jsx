import React from "react";

export default React.createClass({
  render: function() {
    return (
      <div className="container">
        Hello, {this.props.name} dniwe!
      </div>
    );
  },
});
