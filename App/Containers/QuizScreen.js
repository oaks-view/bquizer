import React from 'react';
import { View, ImageBackground, Image } from 'react-native';
import { Text, Container, Content, Header, Body, Left, Right, Title, Footer, FooterTab, Button, H3, Thumbnail } from 'native-base';
import { styles } from './Styles/HomeScreenStyles';
import Icon from 'react-native-vector-icons/FontAwesome'
import images from '../Themes/Images';
import BackgroundImage from '../Components/BackgroundImage';
import { Colors } from '../Themes/Colors';
// import FIcon from 'react-native-vector-icons/FontAwesome'

class QuizScreen extends React.Component {
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
                        <Text>Your Quiz </Text>
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

export default QuizScreen;