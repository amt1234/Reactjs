import React from 'react';
// import Card from '@material-ui/core/Card';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from 'react-sidenav';
import Drawer from 'react-motion-drawer';

class SideBar extends React.Component {
    render() {
        return (
            // <div style={{ background: '#2c3e50', color: '#FFF', width: 220 }}>
            //     {/* <Card>hello</Card> */}
            //     <SideNav>
            //         <SideNav.Toggle />

            //         <SideNav.Nav defaultSelected="home">
            //             <NavItem eventKey="home">
            //                 <NavIcon>
            //                     <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
            //                 </NavIcon>
            //                 <NavText>
            //                     Home
            //                  </NavText>
            //             </NavItem>
            //             <NavItem eventKey="charts">
            //                 <NavIcon>
            //                     <i className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em' }} />
            //                 </NavIcon>
            //                 <NavText>
            //                     Charts
            //                  </NavText>
            //             </NavItem>
            //             </SideNav.Nav>
            //         </SideNav>

            // </div>
            <div>
                <Drawer open={true}  width={300}>
                hello
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Settings</li>
                    </ul>
                </Drawer>
            </div>
        );
    }
}

export default SideBar;