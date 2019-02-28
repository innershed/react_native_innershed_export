import React from 'react';
import {Image, View, StyleSheet} from 'react-native';

import PropTypes from 'prop-types';

export default class CImage extends React.Component {
    static propTypes = {
        source: PropTypes.any.isRequired,
        width: PropTypes.any,
        height: PropTypes.any,
        ratio: PropTypes.number,
        style: PropTypes.any
    };

    static defaultProps = {
        width: null,
        height: null
    }

    constructor(props) {
        super(props);

        this.state = {
            width: null,
            height: null
        };
    }

    _layout(event) {
        if (this.state.dimensions)
            return;
        const {width, height} = event.nativeEvent.layout;
        this.setState((state) => {return {...state, dimensions: {width, height}};});
    }

    componentDidMount() {
        const {source} = this.props;
        if (typeof source === 'number') {
            const img = Image.resolveAssetSource(source);
            this.setState((state) => { return {
                ...state,
                width: img.width,
                height: img.height
            };});
        }
        else {
            Image.getSize(source.uri, (width, height) => {
                this.setState((state) => {
                    return {
                        ...state,
                        width,
                        height
                    };
                });
            });
        }
    }

    render() {
        let {source, width, height, style, ...rest} = this.props;

        // we have width provided, so calculate height
        if (width) {
            if (typeof width === 'string' && width.substr(-1) === '%' && this.state.dimensions !== undefined)
                width = (width.slice(0, -1) / 100) * this.state.dimensions.width;
            const ratio = this.props.ratio ? this.props.ratio : this.state.height / this.state.width;
            height = ratio * width;
        }
        // we have the height provided, calc width
        else if (height) {
            if (typeof height === 'string' && height.substr(-1) === '%' && this.state.dimensions !== undefined)
                height = (height.slice(0, -1) / 100) * this.state.dimensions.height;
            const ratio = this.props.ratio ? this.props.ratio : this.state.width / this.state.height;
            width = ratio * height;
        }
        else {
            width = this.state.width;
            height = this.state.height;
        }

        const block = {
            width: width,
            height: height
        };

        if (this.state.dimensions)
            return (
                <Image source={source} style={[style, block]} {...rest} fadeDuration={0}/>
            );
        return (
            <View style={styles.wrap} onLayout={this._layout.bind(this)}/>
        );
    }

    nativeWidth() {
        return this.state.width;
    }
    nativeHeight() {
        return this.state.height;
    }
}

const styles = StyleSheet.create({
    wrap: {
        flex: 1,
        width: '100%',
        height: '100%'
    }
});
