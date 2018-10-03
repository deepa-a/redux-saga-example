import React from 'react';
import PropTypes from 'prop-types';
import Header from 'main/Header';
import mainStyle from 'assets/jss/main/mainStyle';
import { withStyles } from '@material-ui/core';


class Main extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        const { classes } = this.props;
        return(
            <div className={classes.mainPanel} ref="mainPanel">
                <Header />
                <div className={classes.content}>
                    <div className={classes.container}>I am main</div>
                </div>
            </div>

        )
    }
}

Main.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(mainStyle)(Main);
