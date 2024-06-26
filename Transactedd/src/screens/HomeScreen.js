import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { useStateContext } from '../context/StateContext';

const HomeScreen = () => {
    const { isToggled } = useStateContext();
    return (
        <View style={isToggled ? styles.darkContainer : styles.lightContainer}>
            <View style={styles.header}>
                <Image source={require('../assets/profile.png')} style={styles.profileImage} />
                <View style={styles.profileTextPosition}>
                    <Text style={styles.welcomeText}>Welcome back,</Text>
                    <Text style={[styles.ericText, { color: isToggled=== true ? '#fff' : '#000'}]}>Eric Atsu</Text>
            </View>
            <View style={styles.profilePositioner}>
                <View style={[styles.profileContainer, { backgroundColor: isToggled=== true ? '#1e1e2d' : '#f4f4f4'}]}>
                    <Image source={require('../assets/search.png')} style={{ tintColor: isToggled=== true ? '#fff' : '#000'}} />
                </View>
            </View>
        </View><View style={styles.cardContainer}>
                <Image source={require('../assets/Card.png')} />
            </View><View style={styles.sendReceiveGap}>
                {[
                    { src: require('../assets/send.png'), text: 'Sent' },
                    { src: require('../assets/recieve.png'), text: 'Receive' },
                    { src: require('../assets/loan.png'), text: 'Loan' },
                    { src: require('../assets/topUp.png'), text: 'Topup' },
                ].map((item, index) => (
                    <View key={index} style={styles.sendImageTextAlign}>
                        <View style={[styles.sendReceiveIndividualContainer, { backgroundColor: isToggled=== true ? '#1e1e2d' : '#f4f4f4'}]}>
                            <Image source={item.src} style={{ tintColor: isToggled=== true ? '#fff' : '#000'}} />
                        </View>
                        <Text style={[styles.sendText, { color: isToggled=== true ? '#fff' : '#000'}]}>{item.text}</Text>
                    </View>
                ))}
            </View><View style={styles.transactionLine}>
                <Text style={[styles.ericText, { color: isToggled=== true ? '#fff' : '#000'}]}>Transaction</Text>
                <Text style={styles.seeAllText}>See All</Text>
            </View>
            <View style={styles.transactionItems}>
                {[
                    {index:"0", src: require('../assets/apple.png'), title: 'Apple Store', subtitle: 'Entertainment', amount: '- $5,99' },
                    {index:"1", src: require('../assets/spotify.png'), title: 'Spotify', subtitle: 'Music', amount: '- $12,99' },
                    {index:"2", src: require('../assets/moneyTransfer.png'), title: 'Money Transfer', subtitle: 'Transaction', amount: '$300', amountStyle: { color: '#0066FF' } },
                    {index:"3", src: require('../assets/grocery.png'), title: 'Grocery', subtitle: 'Expense', amount: '- $88' },
                ].map((item, index) => (
                    <View key={index} style={styles.transactionItemsIndividual}>
                        <View style={styles.flexDirection}>
                            <View style={[styles.profileContainer, { backgroundColor: isToggled=== true ? '#1e1e2d' : '#f4f4f4'}]}>
                                <Image source={item.src} style={{ tintColor: isToggled=== true ? '#fff' : '#000'}}/>
                            </View>
                            <View style={styles.transactionItemIndent}>
                                <Text style={[styles.transactionItemsHeadings, { color: isToggled=== true ? '#fff' : '#000'}]}>{item.title}</Text>
                                <Text style={styles.welcomeText}>{item.subtitle}</Text>
                            </View>
                        </View>
                        <View style={styles.flexDirection}>
                            <Text style= {[styles.dollars, item.amountStyle,  { color: isToggled=== true ? '#fff' : '#000'}]}>{item.amount}</Text>
                        </View>
                    </View>
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    darkContainer: {
        color: "#ffffff",
        backgroundColor: "#161622",
        flex: 1,
    },
    lightContainer: {
        backgroundColor: 'white',
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        marginLeft: 20,
        marginTop: 70,
    },
    profileImage: {
        width: 40,
        height: 40,
    },
    profileTextPosition: {
        marginHorizontal: 15,
        flexDirection: 'column',
    },
    welcomeText: {
        fontSize: 12,
        color: '#8B8B94',
        fontFamily: 'Poppins-Regular',
    },
    ericText: {
        fontSize: 19,
        fontFamily: 'Poppins-Regular',
        fontWeight: '600',
    },

    
    profilePositioner: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginHorizontal: 22,
        marginTop: 2,
    },
    profileContainer: {
        backgroundColor: '#F4F4F4',
        borderRadius: 20,
        height: 40,
        width: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardContainer: {
        marginTop: 30,
        alignItems: 'center',
    },
    sendReceiveGap: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 30,
    },
    sendReceiveIndividualContainer: {
        backgroundColor: '#F4F4F4',
        borderRadius: 26,
        height: 50,
        width: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    sendImageTextAlign: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    sendText: {
        fontSize: 13,
        marginTop: 4,
        fontFamily: 'Poppins-Regular',
    },
    transactionLine: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 25,
        marginLeft: 21,
        marginHorizontal: 20,
    },
    seeAllText: {
        fontSize: 14,
        color: '#0066FF',
        fontFamily: 'Poppins-Regular',
        fontWeight: '600',
        marginTop: 2,
    },
    transactionItems: {
        marginLeft: 21,
        marginHorizontal: 20,
    },
    transactionItemsHeadings: {
        fontSize: 15,
        fontFamily: 'Poppins-Regular',
    },
    transactionItemsIndividual: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 18,
    },
    flexDirection: {
        flexDirection: 'row',
    },
    transactionItemIndent: {
        marginLeft: 17,
    },
    dollars: {
        fontSize: 15,
        marginTop: 7,
        fontFamily: 'Poppins-Regular',
    },
});

export default HomeScreen;
