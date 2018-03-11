import React from 'react';
import { View, ImageBackground, Image, Alert } from 'react-native';
import { Text, Container, Content, Header, Body, Left, Right, Title, Footer, FooterTab, Button, H3, Thumbnail } from 'native-base';
import styles from './Styles/QuizScreenStyles';
import Icon from 'react-native-vector-icons/FontAwesome'
import images from '../Themes/Images';
import BackgroundImage from '../Components/BackgroundImage';
import { Colors } from '../Themes/Colors';
import AwesomeAlert from 'react-native-awesome-alerts';

class QuizScreen extends React.Component {
    constructor(props) {
        super(props);

        this.question = 'Who played Mirandas boyfriend robert in the movie, cloes art?';

        this.state = {
            selectedAnswer: { isCorrect: false },
            showAlert: false,
            alertTitle: '',
            alertMessage: '',
            currentQuiz: {
                question: '',
                answers: []
            },
            quizIndex: 0
        }

        this.renderOptionsBtn = this.renderOptionsBtn.bind(this);
    }

    componentDidMount() {
        this.setQuizSession();

        this.setAlertFeedback();
    }

    setQuizSession() {
        let quizz = [
            {
                question: 'Who was the first man to ever walk the earth?',
                answers: [
                    { value: 'Will Smith', isCorrect: false, option: 'A' },
                    { value: 'Jason Statham', isCorrect: false, option: 'B' },
                    { value: 'Jackie Chan', isCorrect: false, option: 'C' },
                    { value: 'Adam', isCorrect: true, option: 'D' }
                ]
            },
            {
                question: 'I am th way, the truth and the life. Who said this?',
                answers: [
                    { value: 'Apostle Paul', isCorrect: false, option: 'A' },
                    { value: 'Jesus Christ', isCorrect: true, option: 'B' },
                    { value: 'John Smith', isCorrect: false, option: 'C' }
                ]
            }
        ];

        this.setState((prevState) => {
            return {
                currentQuiz: quizz[prevState.quizIndex]
            }
        });
    }

    showAlert = () => {
        this.setState({
            showAlert: true
        });
    };

    hideAlert = () => {
        this.setState({
            showAlert: false
        });
    };

    renderOptionsBtn() {
        let answers = this.state.currentQuiz.answers;

        if (answers) {
            return answers.map(answer => {
                return (
                    <Button style={{ backgroundColor: Colors.darkBrownTransparent, marginBottom: 10 }} key={answer.option} onPress={() => {
                        this.setState({ selectedAnswer: answer })
                    }}>
                        <Text uppercase={false} style={[this.state.selectedAnswer.option === answer.option && styles.selectedOption]}>
                            {`${answer.option}. ${answer.value}`}
                        </Text>
                    </Button>
                )
            })
        }
    }

    setAlertFeedback() {
        let answerCorrect = this.state.selectedAnswer.isCorrect;

        this.alertTitle = answerCorrect ? '!Correct' : '!!!Wrong';

        this.alertMessage = answerCorrect ? 'You got it right. Good Job'
            : `Wrong Answer! the correct answer is `;

        this.state.alertTitleStyle = answerCorrect ? { color: 'green' } : { color: 'red' };

        this.state.alertMessageStyle = answerCorrect ? { color: 'green' } : { color: 'red' };
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
                            <Text style={{ color: Colors.white, fontSize: 20 }}>{this.state.currentQuiz.question}</Text>
                        </View>
                        <View style={[styles.options, { flex: 4 }]}>
                            {this.renderOptionsBtn()}
                        </View>
                        <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}>
                            <Button onPress={() => { this.showAlert() }} rounded style={{ alignSelf: 'center', justifyContent: 'center', alignItems: 'center', backgroundColor: Colors.tomatoFaded, minWidth: 150 }}>
                                <Text style={{ color: Colors.silver, fontSize: 20, alignItems: 'center', fontWeight: 'bold', borderColor: Colors.tomato, textAlign: 'center' }}>NEXT</Text>
                            </Button>
                        </View>
                    </View>
                    {/* <AwesomeAlert
                        show={this.state.showAlert}
                        showProgress={false}
                        title={this.state.alertTitle}
                        message={this.state.alertMessage}
                        closeOnTouchOutside={true}
                        closeOnHardwareBackPress={false}
                        showCancelButton={!this.state.selectedAnswer.isCorrect}
                        showConfirmButton={this.state.selectedAnswer.isCorrect}
                        cancelText="Next Question"
                        confirmText="Next Question"
                        confirmButtonColor="#DD6B55"
                        onCancelPressed={() => {
                            this.hideAlert();
                        }}
                        onConfirmPressed={() => {
                            this.hideAlert();
                        }}
                    /> */}

                    <AwesomeAlert
                        show={this.state.showAlert}
                        showProgress={false}
                        title={this.state.alertTitle}
                        message="I have a message for you!"
                        closeOnTouchOutside={true}
                        closeOnHardwareBackPress={false}
                        showCancelButton={true}
                        showConfirmButton={true}
                        cancelText="No, cancel"
                        confirmText="Yes, delete it"
                        confirmButtonColor="#DD6B55"
                        onCancelPressed={() => {
                            this.hideAlert();
                        }}
                        onConfirmPressed={() => {
                            this.hideAlert();
                        }}
                    />

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