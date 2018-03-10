import React from 'react';
import { View } from 'react-native';
import { Text, Container, Content, Header, Body, Left, Right, Title } from 'native-base';
import { styles } from './Styles/HomeScreenStyles';

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
                <Content></Content>
            </Container>
        )
    }
}

export default HomeScreen;