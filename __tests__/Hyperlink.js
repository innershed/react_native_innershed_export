import React from 'react';
import { Text } from 'react-native';

import renderer from 'react-test-renderer';

import Hyperlink from '../Hyperlink';

it('renders', () => {
    expect(renderer.create(
        <Hyperlink href={'https://www.innershed.com'}>
            <Text>https://www.innershed.com</Text>
        </Hyperlink>
    )).toMatchSnapshot();
});
