// import Header from "@/components/Header";
import InputChat from "@/components/inputChat";
import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
    ScrollView,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import styles from "../styles/stylesReservaCheck";

const ReservaCheck = () => {
    const [tab, setTab] = useState<"detalles" | "chat" | "ayuda">("detalles");

    return (
        <View style={{ flex: 1, backgroundColor: "#fff" }}>
        {/* <Header /> */}
        <View style={styles.headerReserva}>
            <Text style={styles.reservaTitle}>Reserva #B12345</Text>
        </View>

        <View style={styles.tabContainer}>
            {["detalles", "chat", "ayuda"].map((item) => (
            <TouchableOpacity
                key={item}
                style={[
                styles.tabButton,
                tab === item && styles.tabButtonActive,
                ]}
                onPress={() => setTab(item as any)}
            >
                <Text
                style={[
                    styles.tabText,
                    tab === item && styles.tabTextActive,
                ]}
                >
                {item.charAt(0).toUpperCase() + item.slice(1)}
                </Text>
            </TouchableOpacity>
            ))}
        </View>

        <ScrollView contentContainerStyle={styles.contentContainer}>
            {tab === "detalles" && (
            <View>
                <Text style={styles.confirmLabel}>Confirmada ✅</Text>
                <View style={styles.detailBox}>
                <Text style={styles.label}>Vehículo:</Text>
                <Text style={styles.text}>Honda Civic 2020 - Sedán</Text>
                <Text style={styles.label}>Dirección:</Text>
                <Text style={styles.text}>Av. Providencia 1208, Santiago, Chile</Text>
                <Text style={styles.label}>Fecha y Hora:</Text>
                <Text style={styles.text}>12 de Mayo - 15:00 hrs</Text>
                <Text style={styles.label}>Lavador:</Text>
                <Text style={styles.text}>Carlos Rodríguez</Text>
                </View>

                <View style={styles.pricesBox}>
                <Text style={styles.label}>Lavado Seleccionado:</Text>
                <Text style={styles.text}>Lavado Completo - $19.000</Text>
                <Text style={styles.text}>IVA (19%): $3.610</Text>
                <Text style={styles.totalText}>Total: $22.610 CLP</Text>
                </View>

                <View style={styles.pointsBox}>
                <Text style={styles.pointsText}>Puntos Actuales: 15</Text>
                <Text style={styles.subPointsText}>5 más y obtienes un lavado gratis</Text>
                </View>

                <TouchableOpacity style={styles.cancelButton}>
                <Text style={styles.cancelText}>Cancelar Reserva</Text>
                </TouchableOpacity>
            </View>
            )}

            {tab === "chat" && (
            <View style={styles.chatBox}>
                <View style={styles.chatMessageLeft}>
                <Text style={styles.chatSender}>Carlos Rodríguez</Text>
                <Text>Hola! Soy Carlos. Estaré a cargo de tu servicio de lavado hoy.</Text>
                </View>
                <View style={styles.chatMessageRight}>
                <Text style={styles.chatBubbleUser}>Hola Carlos. Gracias. ¿A qué hora llegarás?</Text>
                </View>
                <View style={styles.chatMessageLeft}>
                <Text>Estaré ahí a las 15:00 como acordamos, ¿hay alguna instrucción especial?</Text>
                </View>
                <View style={styles.chatMessageRight}>
                <Text style={styles.chatBubbleUser}>
                    Perfecto. El auto está en el estacionamiento del edificio. Te esperaré en la entrada 🚗
                </Text>
                </View>
                <View style={styles.chatMessageLeft}>
                <Text>Entendido. Nos vemos.</Text>
                </View>

            </View>
            )}

            {tab === "ayuda" && (
            <>
            <View style={styles.pageContainer}>
                <View style={styles.ayudaBox}>
                        <Text style={styles.faqText}>Preguntas Frecuentes:</Text>
                        <View style={styles.faqItem}>
                        <Ionicons name="help-circle-outline" size={20} />
                        <Text style={styles.faqQuestion}>¿Cómo funciona el sistema de puntos?</Text>
                        </View>
                        <View style={styles.faqItem}>
                        <Ionicons name="card-outline" size={20} />
                        <Text style={styles.faqQuestion}>¿Qué métodos de pago aceptan?</Text>
                        </View>
                        <View style={styles.faqItem}>
                        <Ionicons name="car-outline" size={20} />
                        <Text style={styles.faqQuestion}>¿Cómo agrego un vehículo?</Text>
                        </View>
                </View>
            </View>
            </>
            )}
        </ScrollView>
        
        {tab === 'detalles' ? (
            <></>
        ) : (
            <InputChat />
        )}
        
        </View>
    );
};

export default ReservaCheck;
