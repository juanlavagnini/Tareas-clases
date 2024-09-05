import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { Href, Link } from 'expo-router';

type ButtonProps = {
    text: string;
    route: Href<string | object>;
};

const Button = (props: ButtonProps) => {


    return <Link style={styles.button} href={props.route}><Text>{props.text}</Text></Link>;
};

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'blue',
        margin: 10,
    },
});

export default Button;