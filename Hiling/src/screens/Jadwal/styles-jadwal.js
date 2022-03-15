import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    item: {
        backgroundColor: 'gold',
        height: 100,
        justifyContent: 'center',
        padding: 20,
        marginVertical: 5,
        marginHorizontal: 15,
        flex: 1,
        flexDirection: "row",
    },
    itemLeft: {
        flex: 1,
        flexDirection: 'column'
    },
    itemOnTop: {
        justifyContent: "center",
        flex: 1,
    },
    itemOnBottom: {
        justifyContent: "center",
        flex: 1,
    },
    itemRight: {
        flex: 1,
        flexDirection: 'column'
    },
    title: {
        fontSize: 20,
    },
    tanggal: {
        paddingTop: 3,
        fontSize: 14,
        color: 'blue',
    },
    maskapaiNama: {
        position: "absolute",
        fontWeight: 'bold',
        fontSize: 14,
        left: 25,
    },
    maskapaiLogo: {
        position: "absolute",
    },
    perjalanan: {
        fontSize: 12,
    },
    nav: {
        backgroundColor: 'lightgreen',
        width: '100%',
        height: 100,
    },
    navBar: {
        position: 'absolute',
        left: 20,
        top: 30,
    },
    navUser: {
        position: 'absolute',
        right: 20,
        top: 30,

    },
    navText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 25,
        top: 25,
        alignSelf: 'center',
    },
    hasilCari: {
        alignSelf: 'center',
        top: 35,
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    }
});

export default styles;