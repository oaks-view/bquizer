import { StyleSheet } from 'react-native';
import { Colors } from '../../Themes/Colors';

export const styles = StyleSheet.create({
    header: {
        backgroundColor: Colors.tomato
    },
    title: {
        color: Colors.white,
        textAlign: 'center'
    },
    headerBody: {
        justifyContent: 'center',
        alignItems: 'center'
    }
})