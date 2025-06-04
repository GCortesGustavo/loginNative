import styles from "@/styles/stylesReservas";
import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
    ScrollView,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

type Props = {
    onNext: () => void;
    onBack: () => void;
};

const days = [
    { id: "1", day: "Vie", date: "23", month: "May" },
    { id: "2", day: "Sáb", date: "24", month: "May" },
    { id: "3", day: "Dom", date: "25", month: "May" },
    { id: "4", day: "Lun", date: "26", month: "May" },
    { id: "5", day: "Mar", date: "27", month: "May" },
];

const morningHours = ["08:00 - 09:00", "08:30 - 09:30", "09:00 - 10:00"];
const afternoonHours = ["12:00 - 13:30", "14:00 - 15:30", "16:00 - 17:30"];

export default function ReservasStep2({ onNext, onBack }: Props) {
    const [selectedDay, setSelectedDay] = useState<string | null>(null); 
    const [selectedHour, setSelectedHour] = useState<string | null>(null);
    const insets = useSafeAreaInsets()
    const selectedDate = days.find((d) => d.id === selectedDay);

    return (
        <ScrollView 
            contentContainerStyle={{
                paddingBottom: insets.bottom + 50, 
            }}
        >
            <View style={styles.container}>
                <Text style={styles.sectionTitle}>Selecciona la Fecha</Text>
                <View style={{ flexDirection: "row", gap: 8, flexWrap: "wrap", marginBottom: 16 }}>
                    {days.map((day) => (
                        <TouchableOpacity
                            key={day.id}
                            style={[
                                {
                                    width: 60,
                                    alignItems: "center",
                                    paddingVertical: 8,
                                    borderRadius: 12,
                                    borderWidth: 1,
                                    borderColor: selectedDay === day.id ? "#406FB5" : "#ccc",
                                    backgroundColor: selectedDay === day.id ? "#E2EEF7" : "#fff",
                                },
                            ]}
                            onPress={() => setSelectedDay((prev) => (prev === day.id ? null : day.id))}
                        >
                            <Text style={{ fontSize: 12 }}>{day.day}</Text>
                            <Text style={{ fontSize: 18, fontWeight: "600" }}>{day.date}</Text>
                            <Text style={{ fontSize: 12 }}>{day.month}</Text>
                        </TouchableOpacity>
                    ))}
                </View>

                <Text style={styles.sectionTitle}>Selecciona la hora</Text>
                <Text style={{ fontWeight: "600", marginBottom: 8 }}>Mañana</Text>
                <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 8, marginBottom: 12 }}>
                    {morningHours.map((hour, index) => (
                        <TouchableOpacity
                            key={index}
                            style={[
                                styles.cardSmall,
                                selectedHour === hour && styles.selectedCard,
                                { flexDirection: "row", alignItems: "center", gap: 6 },
                            ]}
                            onPress={() => setSelectedHour((prev) => (prev === hour ? null : hour))}
                        >
                            {selectedHour === hour && (
                                <Ionicons name="time-outline" size={16} color="#406FB5" />
                            )}
                            <Text>{hour}</Text>
                        </TouchableOpacity>
                    ))}
                </View>

                <Text style={{ fontWeight: "600", marginBottom: 8 }}>Tarde</Text>
                <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 8 }}>
                    {afternoonHours.map((hour, index) => (
                        <TouchableOpacity
                            key={index}
                            style={[
                                styles.cardSmall,
                                selectedHour === hour && styles.selectedCard,
                                { flexDirection: "row", alignItems: "center", gap: 6 },
                            ]}
                            onPress={() => setSelectedHour((prev) => (prev === hour ? null : hour))}
                        >
                            {selectedHour === hour && (
                                <Ionicons name="time-outline" size={16} color="#406FB5" />
                            )}
                            <Text>{hour}</Text>
                        </TouchableOpacity>
                    ))}
                </View>

                <View style={{
                    borderWidth: 1,
                    borderColor: "#406FB5",
                    backgroundColor: "#fff",
                    borderRadius: 12,
                    padding: 16,
                    marginTop: 24
                }}>
                    <Text style={{ fontWeight: "600", color: "#406FB5", marginBottom: 8 }}>Resumen de Selección</Text>
                    <Text style={{ marginBottom: 4 }}>
                        <Text style={{ fontWeight: "600" }}>Vehículo:</Text> Honda Civic 2020 (Sedán)
                    </Text>
                    <Text style={{ marginBottom: 4 }}>
                        <Text style={{ fontWeight: "600" }}>Dirección:</Text> Av. Providencia 1208, Santiago, Chile
                    </Text>
                    <Text style={{ marginBottom: 4 }}>
                        <Text style={{ fontWeight: "600" }}>Fecha:</Text> {selectedDate ? `${selectedDate.day} ${selectedDate.date} ${selectedDate.month}` : "-"}
                    </Text>
                    <Text>
                        <Text style={{ fontWeight: "600" }}>Hora:</Text> {selectedHour ?? "-"}
                    </Text>
                </View>

                <TouchableOpacity style={styles.continueButton} onPress={onNext}>
                    <Text style={styles.continueText}>Continuar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.continueButton, { backgroundColor: "#ccc", marginTop: 8 }]} onPress={onBack}>
                    <Text style={[styles.continueText, { color: "#333" }]}>Regresar</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}
