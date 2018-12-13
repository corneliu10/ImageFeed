import { ColorPropType, StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';

export default function Avatar({ size, backgroundColor, initials }) {
    const style = {
        width: size,
        height: size,
        backgroundColor,
        borderRadius: size / 2
    }

    return (
        <View style={[styles.container, style]}>
            <Text style={styles.text}>{initials}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        color: 'white'
    }
})

Avatar.propTypes = {
    initials: PropTypes.string.isRequired,
    size: PropTypes.number.isRequired,
    backgroundColor: ColorPropType.isRequired,
};