import React from 'react';
import { View } from 'react-native';

import renderer from 'react-test-renderer';

import Touchable from '../Touchable';

it('renders', () => {
    expect(renderer.create(
        <Touchable onPress={()=>{}}>
            <View></View>
        </Touchable>
    )).toMatchSnapshot();
});

it('renders', () => {
    expect(renderer.create(
        <Touchable onPress={()=>{}} disabled={true}>
            <View></View>
        </Touchable>
    )).toMatchSnapshot();
});
