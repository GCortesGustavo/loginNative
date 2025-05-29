import styles from "@/styles/stylesReservas";
import React from "react";
import {
    ScrollView,
    Text,
    TouchableOpacity
} from "react-native";

type Props = {
    onBack: () => void
}

const ReservaStep4 = ({ onBack }: Props) => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text>Paso 4 de la reserva</Text>

        <TouchableOpacity style={styles.continueButton} onPress={onBack}>
            <Text style={styles.continueText}>Regresar</Text>
        </TouchableOpacity>
        </ScrollView>
    )
}

export default ReservaStep4