import React, {Component} from 'react';
import RootContainer from '../../hoc/RootContainer';
import classes from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {

    state = {
        showSideDrawer: false
    }

    closedSideDrawerHandler = () => {
        this.setState({showSideDrawer: false});
    }

    openSideDrawerHandler = () => {
        console.log(this.state.showSideDrawer);
        this.setState((prevState) => {
            return {showSideDrawer: !prevState.SideDrawer};
        });
    }

    render () {
        return (
            <RootContainer>
            <Toolbar open={this.openSideDrawerHandler}/>
            <SideDrawer open={this.state.showSideDrawer} closed={this.closedSideDrawerHandler}/>
            <main className={classes.layoutContent}>
                {this.props.children}
            </main>
        </RootContainer>
        );
    }
}

export default Layout; 