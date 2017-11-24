import React, { Component } from 'react';

import { AppRegistry, asset, Pano, View, Text, Box, Cylinder, Sphere, Plane } from 'react-vr';

export default class Basics extends Component {
    render() {
        return (
            <View>
                <Pano source={asset('starry-sky.jpg')}></Pano>
                <Box
                    dimWidth={0.5}
                    dimHeight={0.5}
                    dimDepth={0.5}
                    wireframe={true}
                    style={{
                        color: '#dd2222',
                        transform: [
                            {translate: [0, 0, -3]},
                            {translateY: 1},
                            {translateX: -0.5},
                            {rotateZ: 45}
                        ]
                    }}
                />
                <Cylinder
                    dimHeight={0.5}
                    radiusBottom={0.5}
                    radiusTop={0.5}
                    segments={19}
                    wireframe={true}
                    style={{
                        color: 'red',
                        transform:[
                            {translate: [0, 0.5, -3]},
                            {rotateY: 45},
                            {rotateZ: 30}
                        ]

                    }
                    }
                />
                <Sphere
                    radius={0.5}
                    widthSegments={10}
                    heightSegments={10}
                    texture={'http://i.imgur.com/bEBgA.jpg'}
                    wireframe={false}
                    style={{
                        color:'#aad',
                        transform: [
                            {translate: [1, 0, -3]},
                            {rotateY: 45}
                        ]
                    }}
                />
                <Plane
                    dimHeight={2}
                    dimWidth={5}
                    texture={'http://i.imgur.com/3FAR9Kf.jpg'}
                    style={{
                        transform: [
                            {translate: [5, 3, -7]},
                            {rotateX: -45},
                            {rotateZ: 30}
                        ]
                    }}
                />
            </View>
        )
    }
};

AppRegistry.registerComponent('Basics', () => Basics);
