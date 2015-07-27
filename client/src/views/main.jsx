import React from 'react'
import mui, { RaisedButton, Paper, AppBar, MenuItem, Menu } from 'material-ui';

let ThemeManager = new mui.Styles.ThemeManager();

var MyAwesomeReactComponent = React.createClass({

  getInitialState: function () {
      return { opened: false };
  },

  childContextTypes: {
    muiTheme: React.PropTypes.object
  },

  getChildContext: function() {
    ThemeManager.setTheme(ThemeManager.types.DARK);
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  },

  onLeftIconButtonTouchTap: function () {
      openMenu();
  },

  onRightIconButtonTouchTap: function () {
      openMenu();
  },

  openMenu: function () {
      this.setState({
          opened: !this.state.opened
      });
  },


  render: function() {
    return (
        <Paper zDepth={1} width={"400px"} height={"200px"}>
            <AppBar title="dniwe" iconClassNameRight="muidocs-icon-navigation-expand-more"/>

        </Paper>
    );
  }

});

export default MyAwesomeReactComponent;
