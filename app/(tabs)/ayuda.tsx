// import Header from "@/components/Header";
import styles from "@/styles/stylesAyuda";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import React from "react";
import {
    ScrollView,
    Text,
    TextInput,
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
            <View style={styles.header}>
                <MaterialIcons name='support-agent' style={{marginTop: 20}} size={24} color='white'/>
                <Text style={styles.headerTitle}>Asistente Virtual</Text>
            </View>

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
                            <Ionicons name="arrow-forward-circle" size={16} color="#43B97F"/>
                        </TouchableOpacity>
                    ))}
                </View>
            </ScrollView>

            <View style={styles.inputArea}>
                <TextInput 
                    style={styles.input}
                    placeholder="Escribe tu pregunta..."
                    placeholderTextColor="#888"
                />
                <TouchableOpacity>
                    <Ionicons name="send" size={24} color="#43b97f"/>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default AyudaScreen;