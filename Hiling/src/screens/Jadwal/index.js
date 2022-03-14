import React from "react";

import { View, FlatList, Text }
    from "react-native";

import Icon from "react-native-vector-icons/FontAwesome5";
import styles from "./styles-jadwal";

const Jadwal = [
    {
        jadwal_id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Item',
        bandara_kode_keberangkatan: 'RI',
        bandara_kode_tujuan: 'SHI',
        maskapai_id: 'GI',
    },
    {
        jadwal_id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Second Item',
        bandara_kode_keberangkatan: 'ING',
        bandara_kode_tujuan: 'JA',
        maskapai_id: 'CL',
    },
    {
        jadwal_id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
        bandara_kode_keberangkatan: 'RI',
        bandara_kode_tujuan: 'PL',
        maskapai_id: 'SA',
    },
];

const Item = ({ maskapai_id, bandara_kode_keberangkatan, bandara_kode_tujuan }) => (
    <View style={styles.item}>
        <View style={styles.itemLeft}>
            <View style={styles.itemOnTop}>
                <Text>{bandara_kode_keberangkatan}</Text>
            </View>
            <View style={styles.itemOnBottom}>
                <Text style={styles.title}>{maskapai_id}</Text>
            </View>
        </View>
        <View style={styles.itemRight}>
            <View style={styles.itemOnTop}>
                <Text>{bandara_kode_tujuan}</Text>
            </View>
            <View style={styles.itemOnBottom}>
                <Text style={styles.title}>HAIHAI</Text>
            </View>
        </View>
    </View>
);

const JadwalScreen = () => {
    const renderItem = ({ item }) => (
        <Item
            title={item.title}
            bandara_kode_keberangkatan={item.bandara_kode_keberangkatan}
            bandara_kode_tujuan={item.bandara_kode_tujuan}
            maskapai_id={item.maskapai_id} />

    );

    return (
        <View style={styles.container}>
            <View style={styles.homeBanner} />
            <FlatList
                data={Jadwal}
                renderItem={renderItem}
                keyExtractor={item => item.jadwal_id}
            />
        </View >
    );
};

export default JadwalScreen;