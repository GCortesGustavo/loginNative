import styles from "@/styles/stylesReservas";
import React from "react";
import {
    ScrollView,
    Text,
    TouchableOpacity
} from "react-native";

type Props = {
    onNext: () => void
    onBack: () => void
}

const ReservaStep3 = ({ onNext, onBack }: Props) => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text>Paso 3 de la reserva</Text>

                    <TouchableOpacity style={styles.continueButton} onPress={onNext}>
            <Text style={styles.continueText}>Continuar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.continueButton} onPress={onBack}>
            <Text style={styles.continueText}>Regresar</Text>
        </TouchableOpacity>
        </ScrollView>
    )
}

export default ReservaStep3