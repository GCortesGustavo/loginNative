import styles from "@/styles/stylesHeader";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Image, Text, View } from "react-native";

const Header = () => {
    return (
        <View style={styles.headerContainer}>
            <View style={styles.headerLeft}>
                <View style={styles.logoAndName}>
                <Image
                    source={require("../assets/images/carwashLogo.png")}
                    style={styles.logo}
                />
                <View>
                    <Text style={styles.businessName}>Car Wash 8a</Text>
                </View>
                </View>
                    <View style={styles.locationRow}>
                    <Ionicons name="location-outline" size={16} color="white" />
                    <Text style={styles.addressText}>
                        Av. Providencia 1208, Santiago, Chile
                    </Text>
                    </View>
            </View>

            <View style={styles.pointsContainer}>
                <Ionicons name="ribbon-outline" size={20} color="white" />
                <Text style={styles.pointsText}>15 Pts</Text>
            </View>
        </View>
    );
};

export default Header;
