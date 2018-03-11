import React from 'react';
import { View, ImageBackground, Image } from 'react-native';
import { Text, Container, Content, Header, Body, Left, Right, Title, Footer, FooterTab, Button, H3, Thumbnail } from 'native-base';
import styles from './Styles/QuizScreenStyles';
import Icon from 'react-native-vector-icons/FontAwesome'
import images from '../Themes/Images';
import BackgroundImage from '../Components/BackgroundImage';
import { Colors } from '../Themes/Colors';
// import FIcon from 'react-native-vector-icons/FontAwesome'

class QuizScreen extends React.Component {
    constructor(props) {
        super(props);

        this.question = 'Who played Mirandas boyfriend robert in the movie, cloes art?';

        this.answers = [
            { value: 'Will Smith', isCorrect: false, option: 'A' },
            { value: 'Jason Statham', isCorrect: false, option: 'B' },
            { value: 'Jackie Chan', isCorrect: false, option: 'C' }
        ]

        this.renderOptionsBtn = this.renderOptionsBtn.bind(this);
    }

    renderOptionsBtn() {
        return this.answers.map(answer => {
            return (
                <Button style={{ backgroundColor: Colors.darkBrownTransparent, marginBottom: 10}} key={answer.option}>
                    <Text uppercase={false}>
                        {`${answer.option}. ${answer.value}`}
                    </Text>
                </Button>
            )
        })
    }

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
                    <View style={[styles.dashboardMain, { flex: 1 }]}>
                        <View style={[styles.question, { flex: 4 }]}>
                            <Text style={{ color: Colors.white, fontSize: 20 }}>{this.question}</Text>
                        </View>
                        <View style={[styles.options, { flex: 6 }]}>
                            {this.renderOptionsBtn()}
                        </View>
                    </View>
                </View>
                <Footer>
                    <FooterTab style={styles.footerTab}>
                        <Button vertical onPress={() => { this.props.navigation.navigate('HomeScreen') }}>
                            <Icon style={styles.footerIcons} name="home" />
                            <Text style={styles.footerTexts} uppercase={true}>home</Text>
                        </Button>
                        <Button vertical active>
                            <Icon active style={styles.footerIcons} name="th" />
                            <Text style={styles.footerTexts} uppercase={true}>Quiz</Text>
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