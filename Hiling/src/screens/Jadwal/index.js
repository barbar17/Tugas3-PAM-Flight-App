import React, { useState, useEffect } from "react";

import { View, FlatList, Text, TextInput }
    from "react-native";

import Icon from "react-native-vector-icons/FontAwesome5";
import styles from "./styles-jadwal";

const Jadwal = [
    {
        jadwal_id: 'PD1',
        bandara_kode_keberangkatan: 'TKG',
        bandara_nama_keberangkatan: 'Radin Inten II',
        bandara_kode_tujuan: 'JKT',
        bandara_nama_tujuan: 'Jakarta',
        maskapai_id: 'JT',
        maskapai_nama: 'Lion Air',
        maskapai_logo: 'plane',
        tanggal: '14/03/2022',
    },
    {
        jadwal_id: 'PD2',
        bandara_kode_keberangkatan: 'TKG',
        bandara_nama_keberangkatan: 'Radin Inten II',
        bandara_kode_tujuan: 'DPS',
        bandara_nama_tujuan: 'Ngurah Rai',
        maskapai_id: 'GI',
        maskapai_nama: 'Garuda Indonesia',
        maskapai_logo: 'plane',
        tanggal: '14/03/2022',
    },
    {
        jadwal_id: 'PD3',
        bandara_kode_keberangkatan: 'TKG',
        bandara_nama_keberangkatan: 'Radin Inten II',
        bandara_kode_tujuan: 'PDG',
        bandara_nama_tujuan: 'Minangkabau',
        maskapai_id: 'ID',
        maskapai_nama: 'Batik Air',
        maskapai_logo: 'plane',
        tanggal: '15/03/2022',
    },
    {
        jadwal_id: 'PD4',
        bandara_kode_keberangkatan: 'JKT',
        bandara_nama_keberangkatan: 'Jakarta',
        bandara_kode_tujuan: 'DPS',
        bandara_nama_tujuan: 'Ngurah Rai',
        maskapai_id: 'JT',
        maskapai_nama: 'Lion Air',
        maskapai_logo: 'plane',
        tanggal: '15/03/2022',
    },
    {
        jadwal_id: 'PD5',
        bandara_kode_keberangkatan: 'JKT',
        bandara_nama_keberangkatan: 'Jakarta',
        bandara_kode_tujuan: 'KOE',
        bandara_nama_tujuan: 'El Tari',
        maskapai_id: 'SJ',
        maskapai_nama: 'Sriwijaya Air',
        maskapai_logo: 'plane',
        tanggal: '16/03/2022',
    },
    {
        jadwal_id: 'PD6',
        bandara_kode_keberangkatan: 'CGK',
        bandara_nama_keberangkatan: 'Soekarno-Hatta',
        bandara_kode_tujuan: 'PDG',
        bandara_nama_tujuan: 'Minangkabau',
        maskapai_id: 'GI',
        maskapai_nama: 'Garuda Indonesia',
        maskapai_logo: 'plane',
        tanggal: '16/03/2022',
    },
    {
        jadwal_id: 'PD7',
        bandara_kode_keberangkatan: 'CGK',
        bandara_nama_keberangkatan: 'Soekarno-Hatta',
        bandara_kode_tujuan: 'TKG',
        bandara_nama_tujuan: 'Radin Inten II',
        maskapai_id: 'QG',
        maskapai_nama: 'Citylink',
        maskapai_logo: 'plane',
        tanggal: '17/03/2022',
    },
    {
        jadwal_id: 'PD8',
        bandara_kode_keberangkatan: 'DPS',
        bandara_nama_keberangkatan: 'Ngurah Rai',
        bandara_kode_tujuan: 'TKG',
        bandara_nama_tujuan: 'Radin Inten II',
        maskapai_id: 'ID',
        maskapai_nama: 'Batik Air',
        maskapai_logo: 'plane',
        tanggal: '17/03/2022',
    },
    {
        jadwal_id: 'PD9',
        bandara_kode_keberangkatan: 'KOE',
        bandara_nama_keberangkatan: 'El Tari',
        bandara_kode_tujuan: 'CGK',
        bandara_nama_tujuan: 'Soekarno-Hatta',
        maskapai_id: 'QG',
        maskapai_nama: 'Citylink',
        maskapai_logo: 'plane',
        tanggal: '18/03/2022',
    },
    {
        jadwal_id: 'PD10',
        bandara_kode_keberangkatan: 'PDG',
        bandara_nama_keberangkatan: 'Minangkabau',
        bandara_kode_tujuan: 'CGK',
        bandara_nama_tujuan: 'Soekarno-Hatta',
        maskapai_id: 'SJ',
        maskapai_nama: 'Sriwijaya Air',
        maskapai_logo: 'plane',
        tanggal: '18/03/2022',
    },
];

const Item = ({ maskapai_logo, maskapai_nama, bandara_nama_keberangkatan, bandara_nama_tujuan, tanggal }) => (
    <View style={styles.item}>
        <View style={styles.itemLeft}>
            <View style={styles.itemOnTop}>
                <Text style={styles.perjalanan}>Dari: {bandara_nama_keberangkatan}</Text>
            </View>
            <View style={styles.itemOnBottom}>
                <Icon style={styles.maskapaiLogo} name={maskapai_logo} size={18} color='green' />
                <Text style={styles.maskapaiNama}>{maskapai_nama}</Text>
            </View>
        </View>
        <View style={styles.itemRight}>
            <View style={styles.itemOnTop}>
                <Text style={styles.perjalanan}>Tujuan: {bandara_nama_tujuan}</Text>
            </View>
            <View style={styles.itemOnBottom}>
                <Text style={styles.tanggal}>({tanggal})</Text>
            </View>
        </View>
    </View>
);

const JadwalScreen = ({ navigation }) => {

    const [filteredData, setfilteredData] = useState([]);
    const [hasilCariText, sethasilCariText] = useState('');

    useEffect(() => {
        filterCari(navigation.getParam('lokasiBerangkat'), navigation.getParam('lokasiTujuan'), navigation.getParam('tanggalBerangkat'));
        return () => {

        }
    }, [])

    const filterCari = (lokasiBerangkat, lokasiTujuan, tanggalBerangkat) => {
        if (lokasiBerangkat) {
            const newData = Jadwal.filter((item) => {
                const itemData = item.bandara_nama_keberangkatan ? item.bandara_nama_keberangkatan : '';
                const textData = lokasiBerangkat
                return itemData.indexOf(textData) > -1;
            });
            setfilteredData(newData);
            return sethasilCariText(navigation.getParam('lokasiBerangkat'));

        }
        else if (lokasiTujuan) {
            const newData = Jadwal.filter((item) => {
                const itemData = item.bandara_nama_tujuan ? item.bandara_nama_tujuan : '';
                const textData = lokasiTujuan
                return itemData.indexOf(textData) > -1;
            });
            setfilteredData(newData);
            return sethasilCariText(navigation.getParam('lokasiTujuan'));

        }
        else if (tanggalBerangkat) {
            const newData = Jadwal.filter((item) => {
                const itemData = item.tanggal ? item.tanggal : '';
                const textData = tanggalBerangkat
                return itemData.indexOf(textData) > -1;
            });
            setfilteredData(newData);
            return sethasilCariText(navigation.getParam('tanggalBerangkat'));

        }
        else {
            setfilteredData(Jadwal);
            return 'No Parameter'

        }
    };


    const renderItem = ({ item }) => (
        <Item
            bandara_nama_keberangkatan={item.bandara_nama_keberangkatan}
            bandara_nama_tujuan={item.bandara_nama_tujuan}
            maskapai_nama={item.maskapai_nama}
            tanggal={item.tanggal}
            maskapai_logo={item.maskapai_logo}
        />
    );

    return (
        <View style={styles.container}>
            <View style={styles.nav}>
                <Icon
                    style={styles.navBar} name="arrow-left" size={25} color='white'
                    onPress={() => navigation.goBack()} />
                <Text style={styles.navText}>Hiling.id</Text>
                <Icon
                    style={styles.navUser} name="user" size={25} color='white'
                    onPress={() => console.warn("icon user ditekan!")} />
                <Text style={styles.hasilCari}>
                    Hasil Pencarian "{hasilCariText}"
                </Text>
            </View>
            <View>
                <FlatList
                    data={filteredData}
                    renderItem={renderItem}
                    keyExtractor={item => item.jadwal_id}
                />
            </View>
        </View >
    );
};

export default JadwalScreen;