import React from "react";

import { View, Text, TextInput, Pressable }
    from "react-native";

import Icon from "react-native-vector-icons/FontAwesome5";
import styles from "./styles";

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.homeBanner}>
                <Text style={styles.homeBannerText}>Hiling.id</Text>
            </View>

            <View style={styles.pencarian}>
                <Text style={styles.kotakInputText}>
                    Lokasi Keberangkatan
                </Text>
                <View style={styles.containerInput}>
                    <Icon style={styles.icon} name="plane-departure" size={20} color='green' />
                    <TextInput style={styles.kotakInput} />
                </View>

                <Text style={styles.kotakInputText}>
                    Lokasi Tujuan
                </Text>
                <View style={styles.containerInput}>
                    <Icon style={styles.icon} name="plane-arrival" size={20} color='green' />
                    <TextInput style={styles.kotakInput} />
                </View>

                <Text style={styles.kotakInputText}>
                    Tanggal Keberangkatan
                </Text>
                <View style={styles.containerInput}>
                    <Icon style={styles.icon} name="calendar-day" size={20} color='green' />
                    <TextInput style={styles.kotakInput} />
                </View>

                <Pressable
                    style={styles.tombolCari}
                    onPress={() => console.warn('tombol ditekan')}>
                    <Text style={styles.tombolCariText}>Cari</Text>
                </Pressable>
            </View>

        </View >
    );
};

export default HomeScreen;