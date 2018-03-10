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
    },
    footerIcons: {
        color: Colors.silver,
        fontSize: 30
    },
    footerTexts: {
        fontWeight: 'bold',
        color: Colors.silver
    },
    footerTab: {
        backgroundColor: Colors.lightGrey
    },
    dashboardMain: {
        paddingHorizontal: '8%',
        backgroundColor: Colors.darkBrown
    },
    dashboardHeading: {
        // height: 100,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    h1: {
        fontSize: 40,
        fontWeight: 'bold',
        color: Colors.white
    },
    h5: {
        fontSize: 20,
        color: Colors.white
    },
    dashboardBtnContainer: {
        justifyContent: 'space-between',
        // backgroundColor: 'blue'
    },
    dashBoardBtn: {
        marginBottom: 10,
        justifyContent: 'flex-start',
        backgroundColor: Colors.white,
        width: '100%',
        paddingLeft: 5,
        borderRadius: 5
    },
    dashBoardBtnTxt: {
        fontWeight: 'bold',
        fontSize: 18
    },
    bibleImgHolder: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: '5%',
        height: 170,
        borderRadius: 10,
        marginRight: '8%',
        backgroundColor: '#36454F'
    },
    dashboardAction: { 
        flexDirection: 'row',
        // backgroundColor:'red', 
        justifyContent: 'space-between', 
        alignItems: 'center', flex: 4 }
})