import React, { Component } from 'react'
import { Image, View } from 'react-native';
import { styles } from './styles/BackgroundImageStyles';

export default class BackgroundImage extends Component {
    render() {
        return (
            <View style={[this.props.style, { position: 'relative'}]}>
                <Image
                    style={[styles.container]}
                    source={this.props.source} />
                    {this.props.children}
            </View>
        )
    }
}
