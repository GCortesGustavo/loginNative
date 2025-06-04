// import Header from "@/components/Header";
import Header from "@/components/Header";
import InputChat from "@/components/inputChat";
import styles from "@/styles/stylesAyuda";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
    ScrollView,
    Text,
    TouchableOpacity,
    View
} from "react-native";

const preguntasFrecuentes = [
    '¿Cómo funciona el sistema de puntos?',
    '¿Cómo reservo un servicio?',
    '¿Qué métodos de pago aceptan?',
    '¿Cómo agrego un vehículo?',
]

const AyudaScreen = () => {
    return (
        <View style={styles.container}>
            {/* <View style={styles.header}>
                <MaterialIcons name='support-agent' style={{marginTop: 20}} size={24} color='white'/>
                <Text style={styles.headerTitle}>Asistente Virtual</Text>
            </View> */}
            <Header />

            <ScrollView style={styles.chatArea} contentContainerStyle={{ padding: 16 }}>
                <View style={styles.botMessage}>
                    <Text style={styles.botText}>
                        Hola! Soy el asistente virtual de CarWash Ba. ¿En qué puedo ayudarte hoy?
                    </Text>
                    <Text style={styles.timestamp}>10:02</Text>
                </View>

                <View style={styles.faqSection}>
                    <Text style={styles.faqTitle}>Preguntas fecuentes:</Text>
                    {preguntasFrecuentes.map((pregunta, i) => (
                        <TouchableOpacity key={i} style={styles.faqButton}>
                            <Text style={styles.faqButtonText}>{pregunta}</Text>
                            <Ionicons name="arrow-forward-circle" size={16} color="#406FB5"/>
                        </TouchableOpacity>
                    ))}
                </View>
            </ScrollView>

            <InputChat />
        </View>
    )
}

export default AyudaScreen;