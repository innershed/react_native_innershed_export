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
        if (Platform.OS === 'android') {
            const {borderless} = this.props;

            return (
                <View>
                    <TouchableNativeFeedback onPress={this.props.onPress} background={TouchableNativeFeedback.Ripple('#EEE', borderless)}>
                        {this.props.children}
                    </TouchableNativeFeedback>
                </View>
            );
        }
        else {
            return (
                <TouchableHighlight onPress={this.props.onPress} underlayColor={'transparent'} activeOpacity={0.2}>
                    {this.props.children}
                </TouchableHighlight>
            );
        }
    }
}

export default Touchable;
