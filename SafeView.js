import React from 'react';
import {View, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import Constants from 'expo-constants';

class SafeView extends React.Component {
    static propTypes = {
        children: PropTypes.node,
        style: PropTypes.any
    };

    constructor(props) {
        super(props);
    }

    render() {
        const {children, style, ...rest} = this.props;

        return (
            <View style={styles.container}>
                <View style={styles.bar}/>
                <View {...rest} style={[style, styles.content]}>
                    {children}
                </View>
            </View>
        );
    }
}

export default SafeView;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'stretch'
    },
    bar: {
        height: Constants.statusBarHeight,
        width: '100%'
    },
    content: {
        width: '100%',
        position: 'absolute',
        top: Constants.statusBarHeight,
        bottom: 0
    }
});
