import React, { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { View, Text, TextInput, Pressable, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import styles from "./styles";
import DatePicker from "react-native-datepicker";

const HomeScreen = ({ navigation }) => {
    const [cariLokasiBerangkat, setcaricariLokasiBerangkat] = useState('');
    const [cariLokasiTujuan, setcariLokasiTujuan] = useState('');
    const [cariTanggalBerangkat, setcariTanggalBerangkat] = useState('');
    const [date, setDate] = useState('09-10-2021');

    return (
        <ScrollView>
            <View style={styles.container}>
                <StatusBar style="dark-content" />
                <View style={styles.nav}>
                    <Icon
                        style={styles.navBar} name="bars" size={25} color='white'
                        onPress={() => console.warn("icon bar ditekan!")} />
                    <Icon
                        style={styles.navUser} name="user" size={25} color='white'
                        onPress={() => console.warn("icon user ditekan!")} />

                </View>

                <View style={styles.homeBanner}>
                    <Text style={styles.homeBannerText}>Hiling.id</Text>
                </View>

                <View style={styles.pencarian}>
                    <Text style={styles.kotakInputText}>
                        Lokasi Keberangkatan
                    </Text>
                    <View style={styles.containerInput}>
                        <Icon style={styles.icon} name="plane-departure" size={20} color='green' />
                        <TextInput
                            style={styles.kotakInput}
                            placeholder='Masukkan Lokasi Keberangkatan'
                            value={cariLokasiBerangkat}
                            onChangeText={(text) => setcaricariLokasiBerangkat(text)}
                        />
                    </View>

                    <Text style={styles.kotakInputText}>
                        Lokasi Tujuan
                    </Text>
                    <View style={styles.containerInput}>
                        <Icon style={styles.icon} name="plane-arrival" size={20} color='green' />
                        <TextInput
                            style={styles.kotakInput}
                            placeholder='Masukkan Lokasi Tujuan'
                            value={cariLokasiTujuan}
                            onChangeText={(text) => setcariLokasiTujuan(text)}
                        />
                    </View>

                    <Text style={styles.kotakInputText}>
                        Tanggal Keberangkatan
                    </Text>
                    <View style={styles.containerInput}>
                        <Icon style={styles.icon} name="calendar-day" size={20} color='green' />
                        <DatePicker
                            style={styles.datePickerStyle}
                            date={date}
                            mode="date"
                            placeholder="select date"
                            format="DD/MM/YYYY"
                            minDate="01-01-1900"
                            maxDate="01-01-2000"
                            confirmBtnText="Confirm"
                            cancelBtnText="Cancel"
                            customStyles={{
                                dateIcon: {
                                    position: 'absolute',
                                    right: -5,
                                    top: 4,
                                    marginLeft: 0,
                                },
                                dateInput: {
                                    borderColor: "gray",
                                    alignItems: "flex-start",
                                    borderWidth: 0,
                                    borderBottomWidth: 1,
                                },
                                placeholderText: {
                                    fontSize: 17,
                                    color: "gray"
                                },
                                dateText: {
                                    fontSize: 17,
                                }
                            }}
                            onDateChange={(date) => {
                                setDate(date);
                            }}
                        />
                    </View>

                    <Pressable
                        style={styles.tombolCari}
                        title="cari"
                        onPress={() => navigation.navigate('JadwalScreen', { lokasiBerangkat: cariLokasiBerangkat, lokasiTujuan: cariLokasiTujuan, tanggalBerangkat: cariTanggalBerangkat })}
                    >
                        <Text style={styles.tombolCariText}>Cari</Text>
                    </Pressable>
                </View>
                <Text style={styles.copyright}>Copyright Akbar Maulana-119140151</Text>
            </View >
        </ScrollView>
    );
};

export default HomeScreen;