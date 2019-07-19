import React from 'react';
import {
    Platform,
    TouchableHighlight,
    TouchableNativeFeedback,
    View
} from 'react-native';
import PropTypes from 'prop-types';

class Touchable extends React.Component {
    static propTypes = {
        children: PropTypes.node.isRequired,
        onPress: PropTypes.func.isRequired,
        borderless: PropTypes.bool
    }

    static defaultProps = {
        borderless: false
    }

    constructor(props) {
        super(props);
    }

    render() {
        const {children, onPress, borderless, ...props} = this.props;
        if (Platform.OS === 'android') {
            return (
                <View>
                    <TouchableNativeFeedback onPress={onPress} background={TouchableNativeFeedback.Ripple('#EEE', borderless)} {...props}>
                        {children}
                    </TouchableNativeFeedback>
                </View>
            );
        }
        else {
            return (
                <TouchableHighlight onPress={onPress} underlayColor={'transparent'} activeOpacity={0.2} {...props}>
                    {children}
                </TouchableHighlight>
            );
        }
    }
}

export default Touchable;
