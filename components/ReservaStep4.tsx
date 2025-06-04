import styles from "@/styles/styleRevervaStep4";
// import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
    ScrollView,
    Text,
    TouchableOpacity,
    View
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const servicios = [
    {id: '1', nombre: 'Aspirado', precio: 2977},
    {id: '2', nombre: 'Lavado Exterior', precio: 4870},
    {id: '3', nombre: 'Lavado Interior', precio: 5636},
    {id: '4', nombre: 'Lavado Completo', precio: 8368},
]

const adicionales = [
    { id: "4", nombre: "Desinfección", precio: 5900 },
    { id: "5", nombre: "Pulido Básico", precio: 9800 },
];

type Props = {
    onBack: () => void,
    onNext: () => void
}

const ReservaStep4 = ({ onBack, onNext }: Props) => {
    const [ seleccionados, setSeleccionados] = useState<string[]>([])
    const [tab, setTab] = useState<"servicios" | "adicionales">("servicios");
    // const router = useRouter()
    const insets = useSafeAreaInsets()

    const toggleSeleccion = (id: string) => {
        setSeleccionados((prev) =>
        prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
        );
    };

    const items = tab === "servicios" ? servicios : adicionales;
    const total = [...servicios, ...adicionales]
        .filter((item) => seleccionados.includes(item.id))
        .reduce((sum, item) => sum + item.precio, 0);

    return (
        <ScrollView 
            contentContainerStyle={{
                paddingBottom: insets.bottom + 50, 
            }}
        >
            <View style={styles.container}>
                <Text style={styles.title}>Selecciona el Servicio</Text>
                {/* Tabs */}
                <View style={styles.tabContainer}>
                    <TouchableOpacity
                    onPress={() => setTab("servicios")}
                    style={[styles.tab, tab === "servicios" && styles.activeTab]}
                    >
                    <Text style={tab === "servicios" ? styles.activeTabText : styles.tabText}>Servicios</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    onPress={() => setTab("adicionales")}
                    style={[styles.tab, tab === "adicionales" && styles.activeTab]}
                    >
                    <Text style={tab === "adicionales" ? styles.activeTabText : styles.tabText}>Adicionales</Text>
                    </TouchableOpacity>
                </View>

                {/* Cards */}
                {items.map((servicio) => (
                    <TouchableOpacity
                    key={servicio.id}
                    onPress={() => toggleSeleccion(servicio.id)}
                    style={[
                        styles.cardService,
                        seleccionados.includes(servicio.id) && styles.selectedCard,
                    ]}
                    >
                    <Text style={styles.nombre}>{servicio.nombre}</Text>
                    <Text style={styles.precio}>${servicio.precio.toLocaleString()} CLP</Text>
                    {seleccionados.includes(servicio.id) && (
                        <Text style={styles.seleccionado}>Seleccionado</Text>
                    )}
                    </TouchableOpacity>
                ))}

                {/* Total */}
                <View style={styles.total}>
                    <Text style={styles.totalText}>Total a pagar: ${total.toLocaleString()} CLP</Text>
                </View>

                <TouchableOpacity style={styles.boton} onPress={onNext}>
                    <Text style={styles.botonText}>Confirmar Reserva</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.continueButton} onPress={onBack}>
                    <Text style={styles.continueText}>Regresar</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

export default ReservaStep4