import React from 'react';
import { View, ImageBackground, Image } from 'react-native';
import { Text, Container, Content, Header, Body, Left, Right, Title, Footer, FooterTab, Button, H3, Thumbnail } from 'native-base';
import { styles } from './Styles/HomeScreenStyles';
import Icon from 'react-native-vector-icons/FontAwesome'
import images from '../Themes/Images';
import BackgroundImage from '../Components/BackgroundImage';
import { Colors } from '../Themes/Colors';
// import FIcon from 'react-native-vector-icons/FontAwesome'

class HomeScreen extends React.Component {
    render() {
        return (
            <Container>
                <Header style={styles.header}>
                    {/* <Left /> */}
                    <Body style={styles.headerBody}>
                        <Title style={styles.title}>BQuiz</Title>
                    </Body>
                </Header>
                <View style={{ flex: 1 }}>
                    <View source={images.darkBackground} style={[styles.dashboardMain, { flex: 1 }]}>
                        <View style={[styles.dashboardHeading, { flex: 2 }]}>
                            <Text uppercase={false} style={styles.h1}>Bquiz</Text>
                            <Text uppercase={false} style={styles.h5}>Your Progress So Far</Text>
                        </View>

                        <View style={styles.dashboardAction}>
                            <View style={[styles.bibleImgHolder, { flex: 5 }]}>
                                <Image source={images.bibleClosed} style={{ height: '80%', width: '80%' }} />
                            </View>
                            <View style={[styles.dashboardBtnContainer, { flex: 5 }]}>
                                <Button iconLeft style={styles.dashBoardBtn} onPress={() => {this.props.navigation.navigate('QuizScreen')}}>
                                    <Icon name="play-circle" style={[styles.footerIcons, { color: Colors.tomato, alignSelf: 'center' }]} />
                                    <Text uppercase={false} style={[styles.dashBoardBtnTxt, { color: Colors.tomato }]}>Play</Text>
                                </Button>

                                <Button iconLeft style={styles.dashBoardBtn}>
                                    <Icon name="hourglass-start" style={[styles.footerIcons, { color: Colors.darkBrown, alignSelf: 'center' }]} />
                                    <Text uppercase={false} style={[styles.dashBoardBtnTxt, { color: Colors.darkBrown }]}>Level</Text>
                                </Button>

                                <Button iconLeft style={styles.dashBoardBtn}>
                                    <Icon name="play-circle" style={[styles.footerIcons, { color: Colors.rank }]} />
                                    <Text uppercase={false} style={[styles.dashBoardBtnTxt, { color: Colors.rank }]}>Rankings</Text>
                                </Button>
                            </View>
                        </View>
                        <View style={[{ flex: 4, justifyContent: 'space-between' }]}>
                            <View>
                                <Text uppercase={true} style={[{ fontSize: 18, fontWeight: 'bold', textAlign: 'center', color: Colors.white }]}>Questions Completed</Text>
                                <View style={[{ borderColor: Colors.white, borderRadius: 10, height: 'auto', borderWidth: 1 }]}>
                                    <Text style={[{ fontSize: 20, fontWeight: 'bold', textAlign: 'center', color: Colors.white }]}>0%</Text>
                                </View>
                            </View>
                            <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
                                <View style={{ width: '45%', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <Text uppercase={true} style={[{ color: Colors.silver, fontWeight: 'bold', textAlign: 'center' }]}>Your Level</Text>
                                    <Text style={[{ color: Colors.white, fontWeight: 'bold', fontSize: 60, textAlign: 'center' }]}>1</Text>
                                </View>

                                {/* <View style={{ width: '30%', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <Text numberOfLines={1} uppercase={true} style={[{ color: Colors.silver, fontWeight: 'bold', textAlign: 'center' }]}>Follower</Text>
                                    <Text numberOfLines={1} style={[{ color: Colors.white, fontWeight: 'bold', fontSize: 60, textAlign: 'center' }]}>33356</Text>
                                </View> */}

                                <View style={{  justifyContent: 'space-between', alignItems: 'center', width:'45%' }}>
                                    <Text uppercase={true} style={[{ color: Colors.silver, fontWeight: 'bold', textAlign: 'center' }]}>Question Count</Text>
                                    <Text style={[{ color: Colors.white, fontWeight: 'bold', fontSize: 60, textAlign: 'center' }]}>515</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
                <Footer>
                    <FooterTab style={styles.footerTab}>
                        <Button vertical active>
                            <Icon active style={styles.footerIcons} name="home" />
                            <Text style={styles.footerTexts} uppercase={true}>home</Text>
                        </Button>
                        <Button vertical>
                            <Icon style={styles.footerIcons} name="th" />
                            <Text style={styles.footerTexts} uppercase={true}>Topics</Text>
                        </Button>
                        <Button vertical>
                            <Icon style={styles.footerIcons} name="history" />
                            <Text style={styles.footerTexts} uppercase={true}>history</Text>
                        </Button>
                        <Button vertical>
                            <Icon style={styles.footerIcons} name="cogs" />
                            <Text style={styles.footerTexts} uppercase={true}>Settings</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        )
    }
}

export default HomeScreen;