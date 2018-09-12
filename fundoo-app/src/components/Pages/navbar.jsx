import React from 'react';

import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Input from '@material-ui/core/Input';

import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';


class Navbar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: "initial data",
        }
    }
    render() {
        return (
            <div style={{ width: '100%', height: '64px' }}>
                <AppBar position="static" style={{ height: '64px' }}>
                    <Toolbar className="toolbar-div" color="inherit">
                        <IconButton >
                            <MenuIcon />
                        </IconButton>

                        <Typography variant="title">
                            Fundoo Note
                        </Typography>

                        <div className="search" style={{ paddingBottom: '0px', paddingTop: '10px' }}>
                            <div className="searchIcon">
                                <SearchIcon />
                            </div>
                            <Input
                                placeholder="Search"
                                disableUnderline
                                className="searchInput"
                            />
                            <div>

                            </div>
                        </div>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

export default Navbar;