import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    homeBanner: {
        width: '100%',
        height: 40,
        backgroundColor: 'lightgreen',
        borderBottomStartRadius: 10,
        borderBottomEndRadius: 10,
        alignItems: 'center',
    },
    item: {
        backgroundColor: 'white',
        height: 100,
        justifyContent: 'center',
        padding: 20,
        marginVertical: 10,
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
    }
});

export default styles;