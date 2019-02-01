import React from 'react';
import { View } from 'react-native';

import PropTypes from 'prop-types';

export default class ToggleView extends React.Component {
    static propTypes = {
        children: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.element,
            PropTypes.number,
            PropTypes.arrayOf(PropTypes.oneOfType([
                PropTypes.string,
                PropTypes.element,
                PropTypes.number
            ])
            )]
        ).isRequired,
        style: PropTypes.oneOfType([
            PropTypes.array,
            PropTypes.number,
            PropTypes.shape({}),
        ]),
        display: PropTypes.bool        
    }
    constructor(props) {
        super(props);
        this.props.display = true;
    }

    render() {
        if (this.props.display === false)
            return null;
        return (
            <View {...this.props} style={this.style}>
                { this.props.children }
            </View>
        );
    }
}
