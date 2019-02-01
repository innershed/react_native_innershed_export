import React from 'react';
import { Text } from 'react-native';

import renderer from 'react-test-renderer';

import SafeView from '../SafeView';

it('renders', () => {
    expect(renderer.create(
        <SafeView>
            <Text>Foobar</Text>
        </SafeView>
    )).toMatchSnapshot();
});
