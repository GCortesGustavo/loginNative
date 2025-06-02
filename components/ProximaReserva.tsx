import styles from "@/styles/stylesProximaReserva";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Text, View } from "react-native";

const ProximaReserva = () => {
    return (
        <View style={styles.proximaReserva}>
            <Text style={styles.proximaReservaTitle}>Próxima Reserva</Text>
            <View style={{ marginTop: 8, display: 'flex', flexDirection: 'row'}}>
                <Ionicons name="calendar-clear-outline" size={32} color='#059669'/>
                <View style={{marginLeft: 8}}>
                    <Text  style={styles.proximaReservaText}>Viernes 21 de Mayo, 2025</Text>
                    <Text  style={styles.proximaReservaText}>15:00hs - 16:30hs - Lavado Completo</Text>
                </View>
            </View>
        </View>
    )
}

export default ProximaReserva