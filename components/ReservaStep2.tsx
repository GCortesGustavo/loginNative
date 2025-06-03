import styles from "@/styles/stylesReservas";
import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
    ScrollView,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

type Props = {
    onNext: () => void
    onBack: () => void
}

const days = [
    { id: "1", label: "Vie 24" },
    { id: "2", label: "Sáb 25" },
    { id: "3", label: "Dom 26" },
    { id: "4", label: "Lun 27" },
    { id: "5", label: "Mar 28" },
];

const hours = [
    "09:00 - 10:00",
    "10:00 - 11:00",
    "11:00 - 12:00",
    "15:00 - 16:00",
    "16:00 - 17:00",
];

export default function ReservasStep2({ onNext, onBack }: Props) {
    const [selectedDay, setSelectedDay] = useState<string | null>(null);
    const [selectedHour, setSelectedHour] = useState<string | null>(null);

    return (
    <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.sectionTitle}>Selecciona la Fecha</Text>
        <View style={styles.row}>
            {days.map((day) => (
            <TouchableOpacity
                key={day.id}
                style={[
                styles.cardSmall,
                selectedDay === day.id && styles.selectedCard,
                ]}
                onPress={() =>
                setSelectedDay((prev) => (prev === day.id ? null : day.id))
                }
            >
                <Text>{day.label}</Text>
            </TouchableOpacity>
            ))}
        </View>

        <Text style={styles.sectionTitle}>Selecciona la Hora</Text>
        <View style={styles.row}>
            {hours.map((hour, index) => (
            <TouchableOpacity
                key={index}
                style={[
                styles.cardSmall,
                selectedHour === hour && styles.selectedCard,
                ]}
                onPress={() =>
                setSelectedHour((prev) => (prev === hour ? null : hour))
                }
            >
                <Ionicons name="time-outline" size={16} />
                <Text>{hour}</Text>
            </TouchableOpacity>
            ))}
        </View>

        <View style={styles.summary}>
            <Text style={styles.summaryText}>Resumen de Reserva:</Text>
            <Text>Vehículo: Honda Civic 2020</Text>
            <Text>Dirección: Casa, Santiago</Text>
            <Text>Fecha: {selectedDay ? days.find((d) => d.id === selectedDay)?.label : "-"}</Text>
            <Text>Hora: {selectedHour ?? "-"}</Text>
        </View>

        <TouchableOpacity style={styles.continueButton} onPress={onNext}>
            <Text style={styles.continueText}>Continuar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.continueButton} onPress={onBack}>
            <Text style={styles.continueText}>Regresar</Text>
        </TouchableOpacity>
        </ScrollView>
    );
}
