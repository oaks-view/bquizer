import React from 'react';
import { View, ImageBackground, Image, Alert } from 'react-native';
import {
    Text, Container, Content, Header, Body, Left, Right, Card, CardItem,
    Title, Footer, FooterTab, Button, H3, Thumbnail
} from 'native-base';
import styles from './Styles/QuizScreenStyles';
import Icon from 'react-native-vector-icons/FontAwesome'
import images from '../Themes/Images';
import BackgroundImage from '../Components/BackgroundImage';
import { Colors } from '../Themes/Colors';
import PopupDialog, { DialogTitle } from 'react-native-popup-dialog';
import { localStorageKeys } from '../Common/Constants';

class QuizScreen extends React.Component {
    constructor(props) {
        super(props);

        this.question = 'Who played Mirandas boyfriend robert in the movie, cloes art?';

        this.state = {
            quizz: [],
            selectedAnswer: { isCorrect: false },
            currentQuiz: {
                question: '',
                answers: []
            },
            quizIndex: 0,
            optionSelected: false
        }

        this.renderOptionsBtn = this.renderOptionsBtn.bind(this);
        this.hideAlert = this.hideAlert.bind(this);
        this.showAlert = this.showAlert.bind(this);
        this.loadNextQuestion = this.loadNextQuestion.bind(this);
    }

    componentDidMount() {
        this.setQuizSession();
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
                currentQuiz: quizz[prevState.quizIndex],
                quizz: quizz
            }
        });
    }

    showAlert = () => {
        if (this.state.optionSelected) {
            this.popupDialog.show(() => { console.log('dialog shown now') });
        } else {
            Alert.alert('You must select an answer first');
        }
    };

    hideAlert = () => {
        this.popupDialog.dismiss(() => { console.log('dialogn dismissed') });
    };

    renderOptionsBtn() {
        let answers = this.state.currentQuiz.answers;

        if (answers) {
            return answers.map(answer => {
                return (
                    <Button style={{ backgroundColor: Colors.darkBrownTransparent, marginBottom: 10 }} key={answer.option} onPress={() => {
                        this.setState({ selectedAnswer: answer, optionSelected: true })
                    }}>
                        <Text uppercase={false} style={[this.state.selectedAnswer.option === answer.option && styles.selectedOption]}>
                            {`${answer.option}. ${answer.value}`}
                        </Text>
                    </Button>
                )
            })
        }
    }
    
    getCorrectAnswer() {
        let answer = this.state.currentQuiz.answers.filter(answer => {
            if (answer.isCorrect) {
                return answer;
            }
        })[0];

        if (answer) {
            return `The correct answer is: ${answer.option}. ${answer.value}`
        };
    }

    loadNextQuestion() {
        this.hideAlert();

        let quizIndex = this.state.quizIndex + 1;
        let quizzLength = this.state.quizz.length;

        if (quizIndex < quizzLength) {
            this.setState(prevState => {
                return {
                    quizIndex: quizIndex,
                    currentQuiz: prevState.quizz[quizIndex],
                    selectedAnswer: { isCorrect: false },
                    optionSelected: false,
                }
            })
        } else {
            Alert.alert('Level Completed', 'You have completed this level, Would you like to move to a new one');
        }
        //
    }

    renderDialogContent() {
        let answerCorrect = this.state.selectedAnswer.isCorrect;

        let alertTitle = answerCorrect ? 'Your Answer is Correct!!' : 'Your answer is wrong!!';

        let alertMessage = answerCorrect ? 'You got it right. Good Job'
            : `Wrong Answer! the correct answer is `;

        this.state.alertTitleStyle = answerCorrect ? { color: 'green' } : { color: 'red' };

        this.state.alertMessageStyle = answerCorrect ? { color: 'green' } : { color: 'red' };

        let titleIcon = answerCorrect ? 'check' : 'times';

        let titleIconColor = answerCorrect ? 'green' : 'red';

        return (
            <View style={{ width: '80%'}}>
                <Card style={{ width: '100%', minHeight: 50, maxHeight: 50 }}>
                    <CardItem style={{ width: '100%', height: '100%' }}>
                        <Icon style={{ fontWeight: '500', marginRight: 10, fontSize: 30, color: titleIconColor }} active name={titleIcon} />
                        <Text style={{ fontSize: 16, fontWeight: '600' }}>{alertTitle}</Text>
                        <Right>
                            <Icon name="arrow-right" />
                        </Right>
                    </CardItem>
                </Card>

                {/* <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 10, }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 30, color: Colors.teal }}>Your score is: <Text style={{ fontWeight: 'bold', fontSize: 30 }}>246</Text></Text>
                </View> */}

                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 10, }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 20, color: Colors.teal }}>{this.getCorrectAnswer()}</Text>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 10, }}>
                    <Button rounded danger onPress={this.hideAlert}><Text>Exit</Text></Button>
                    <Button success rounded onPress={this.loadNextQuestion}><Text>Continue</Text></Button>
                </View>
            </View>
        );
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
                    <PopupDialog dismissOnTouchOutside={false}
                        dialogTitle={<DialogTitle title="Quiz Result" />}
                        ref={(popupDialog) => { this.popupDialog = popupDialog; }}>
                        <View style={{ height: '100%', width: '100%', justifyContent: 'flex-start', alignItems: 'center' }}>
                            {this.renderDialogContent()}
                        </View>
                    </PopupDialog>


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