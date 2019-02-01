import React from 'react';
import { View } from 'react-native';

import { Linking } from 'expo';

import PropTypes from 'prop-types';

import Touchable from './Touchable';

export default class Hyperlink extends React.Component {
    static propTypes = {
        href: PropTypes.string.isRequired,
        children: PropTypes.node,
        style: PropTypes.any
    };

    constructor(props) {
        super(props);

        this.open = async function() {
            const { href } = this.props;

            if (!await Linking.canOpenURL(href))
                return;
            else
                await Linking.openURL(href);
        }.bind(this);
    }

    render() {
        return (
            <Touchable onPress={this.open}>
                <View>
                    {this.props.children}
                </View>
            </Touchable>
        );
    }
}
