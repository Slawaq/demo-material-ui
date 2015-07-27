import React from 'react'
import mui, {MenuItem, Menu} from 'material-ui'

var MyMenu = React.createClass({

    render: function () {
        return (
            <Menu desktop={true}>
                <MenuItem primaryText="Maps" />
                <MenuItem primaryText="Books" />
                <MenuItem primaryText="Flights" />
                <MenuItem primaryText="Apps" />
            </Menu>
       )
    }

});

export default MyMenu;
