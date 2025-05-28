import styles from "@/styles/stylesHeader";
import React from "react";
import {
    Text,
    View,
} from "react-native";


const Header = () => {
    return (
        <View style={styles.header}>
            <View style={styles.header}>
            <View style={styles.headerLeft}>
                <View style={styles.headerInfo}>
                {/* <Image source={require('../../assets/images/logo-carwash.jpeg')} style={styles.logoPlaceholder}/> */}
                <Text style={styles.headerText}>Car wash 8a</Text>
                </View>
                <Text style={{ color: 'white', fontSize: 12 }}>Av. Providencia 1208, Santiago, Chile</Text>
            </View>
            <View style={styles.puntosContainer}>
                <View>
                {/* <AwardIcon width={24} height={24} /> */}
                </View>
                <Text style={styles.puntosText}>15 PuntosSSS</Text>
            </View>
            </View>
        </View>
    )
}

export default Header