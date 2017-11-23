import React, { Component } from 'react';

import { AppRegistry, asset, Pano, View, Text, } from 'react-vr';

export default class Basics extends Component {
    constructor() {
        super();
        this.state={
            fontSize: .1
        }
    }
    render() {
        return (
            <View>
                <Pano source={asset('starry-sky.jpg')}></Pano>
                <Text
                    onEnter={() => this.setState({fontSize: this.state.fontSize * 3})}
                    onExit={() => this.setState({fontSize: this.state.fontSize / 3})}
                style={{
                    fontSize: this.state.fontSize,
                    transform: [{translate: [0, 0, -2.5]}]
                }}
                >Hover Over ME!!!!</Text>
            </View>
        )
    }
};

AppRegistry.registerComponent('Basics', () => Basics);
