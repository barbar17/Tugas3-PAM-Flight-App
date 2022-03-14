import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 650,
        alignItems: 'center',
    },
    homeBanner: {
        width: '100%',
        height: 400,
        backgroundColor: 'lightgreen',
        borderBottomStartRadius: 10,
        borderBottomEndRadius: 10,
        alignItems: 'center',

    },
    homeBannerText: {
        top: 50,
        color: 'white',
        fontWeight: 'bold',
        fontSize: 25,
    },
    pencarian: {
        width: '80%',
        height: 350,
        backgroundColor: 'white',
        position: 'absolute',
        zIndex: 100,
        top: 100,
        borderRadius: 10,
        padding: 20,
    },
    containerInput: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    kotakInput: {
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderRightWidth: 1,
        height: 43,
        width: '100%',
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        borderColor: '#777',
        fontSize: 20,
        flex: 2.5,
    },
    kotakInputText: {
        fontWeight: 'bold',
        fontSize: 18,
    },
    tombolCari: {
        marginTop: 10,
        backgroundColor: 'orange',
        width: '100%',
        height: 40,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    tombolCariText: {
        fontWeight: 'bold',
        fontSize: 20,
        color: 'white',
    },
    icon: {
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderLeftWidth: 1,
        borderColor: '#777',
        paddingTop: 10,
        paddingBottom: 9.5,
        paddingLeft: 10,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        color: 'green',
        flex: 0.5,
    }
});

export default styles;