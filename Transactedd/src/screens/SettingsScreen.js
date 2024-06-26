import React from 'react';
import { View, Text, StyleSheet, Image, Switch } from 'react-native';
import { useStateContext } from '../context/StateContext';

const SettingsScreen = () => {
    const { isToggled, setIsToggled } = useStateContext();


    return (
        <View style={isToggled ? { backgroundColor: "#161622", flex: 1 } : { backgroundColor: 'white', flex: 1 }}>
            <View>
                <Text style={[styles.settingsText, { color: isToggled=== true ? '#fff' : '#000'}]}>Settings</Text>
            </View>

            <View style={styles.options}>

                <View style={styles.textarrowspacing}>
                    <View>
                        <Text style={[styles.settingItems, { color: isToggled=== true ? '#fff' : '#000'}]}>Language</Text>
                    </View>
                    <View>
                        <Image style={styles.arrowimage} source={require('../assets/arrow.png')} />
                    </View>
                </View>
                <View style={styles.hr}></View>

                <View style={styles.textarrowspacing}>
                    <View>
                        <Text style={[styles.settingItems, { color: isToggled=== true ? '#fff' : '#000'}]}>My Profile</Text>
                    </View>
                    <View>
                        <Image style={styles.arrowimage} source={require('../assets/arrow.png')} />
                    </View>
                </View>
                <View style={styles.hr}></View>

                <View style={styles.textarrowspacing}>
                    <View>
                        <Text style={[styles.settingItems, { color: isToggled=== true ? '#fff' : '#000'}]}>Contact Us</Text>
                    </View>
                    <View>
                        <Image style={styles.arrowimage} source={require('../assets/arrow.png')} />
                    </View>
                </View>
                <View style={styles.hr}></View>

                <View style={styles.textarrowspacing}>
                    <View>
                        <Text style={[styles.settingItems, { color: isToggled=== true ? '#fff' : '#000'}]}>Change Password</Text>
                    </View>
                    <View>
                        <Image style={styles.arrowimage} source={require('../assets/arrow.png')} />
                    </View>
                </View>
                <View style={styles.hr}></View>

                <View style={styles.textarrowspacing}>
                    <View>
                        <Text style={[styles.settingItems, { color: isToggled=== true ? '#fff' : '#000'}]}>Privacy Policy</Text>
                    </View>
                    <View>
                        <Image style={styles.arrowimage} source={require('../assets/arrow.png')} />
                    </View>
                </View>
                <View style={styles.hr}></View>
            </View>

            <View style={styles.themeLine}>
                <View>
                    <Text style={[styles.themeText ,{ color: isToggled=== true ? '#fff' : '#000'}]}>Theme</Text>
                </View>

                <View>
                    <Switch
                        style={styles.switchcontainer}
                        value={isToggled}
                        onValueChange={() => setIsToggled(!isToggled)}
                        trackColor={{ false: null, true: "#1CE830" }}
                        thumbColor={isToggled ? null : "#f4f3f4"}
                    />
                </View>
            </View>























        </View>
    )
}

export default SettingsScreen;

const styles = StyleSheet.create = ({
    settingsText: {
        fontSize: 19,
        alignSelf: 'center',
        marginTop: 60,
        fontFamily: 'Poppins-Regular',
        fontWeight: '600'
    },
    options: {
        marginTop: 60
    },
    hr: {
        backgroundColor: '#8B8B94',
        width: 340,
        height: 1,
        alignSelf: 'center',
        opacity: 0.5
    },
    settingItems: {
        fontSize: 15,
        marginTop: 23,
        marginBottom: 15,
        fontFamily: 'Poppins-Regular',
        fontWeight: '600'
    },

    textarrowspacing: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 20,
        marginHorizontal: 20
    },
    arrowimage: {
        width: 17,
        height: 17,
        marginTop: 25
    },
    themeText: {
        fontSize: 19,
        fontFamily: 'Poppins-Regular',
        fontWeight: '600'
    },
    themeLine: {
        flexDirection: 'row',
        marginTop: 60,
        marginLeft: 20,
        marginHorizontal: 20,
        justifyContent: 'space-between'

    },
    switchcontainer: {
        marginTop: -10
    }
});