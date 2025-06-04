import styles from "@/styles/stylesReservas";
import React, { useState } from "react";
import {
    ScrollView,
    Text,
    TouchableOpacity,
    View
} from "react-native";
import { useSafeAreaInsets } from 'react-native-safe-area-context';


type Props = {
    onNext: () => void
    onBack: () => void
}

const lavadores = [
    { id: '1', nombre: 'Ana Martínez', rating: 4.5, años: 5, precio: 12000 },
    { id: '2', nombre: 'Carlos Rodríguez', rating: 3.9, años: 3, precio: 11500 },
    { id: '3', nombre: 'Roberto Sánchez', rating: 3.3, años: 1, precio: 11000 },
];

const ReservaStep3 = ({ onNext, onBack }: Props) => {
    const [lavadorSeleccionado, setLavadorSeleccionado] = useState<string | null>(null);
    const insets = useSafeAreaInsets()

    return (
        <ScrollView 
            contentContainerStyle={{
                paddingBottom: insets.bottom + 50, 
            }}
        >
            <View style={styles.container}>
                <Text style={styles.title}>Selecciona un Lavador</Text>
                {lavadores.map((lavador) => (
                    <TouchableOpacity
                    key={lavador.id}
                    onPress={() => setLavadorSeleccionado(lavador.id)}
                    style={[
                        styles.cardPerson,
                        lavadorSeleccionado === lavador.id && styles.selectedCard,
                    ]}
                    >
                    <Text style={styles.nombre}>{lavador.nombre}</Text>
                    <Text style={styles.info}>
                        ⭐ {lavador.rating} · {lavador.años} años
                    </Text>
                    <Text style={styles.precio}>Desde {lavador.precio.toLocaleString()} CLP</Text>
                    {lavadorSeleccionado === lavador.id && <Text style={styles.seleccionado}>Seleccionado</Text>}
                    </TouchableOpacity>
                ))}

                <View style={styles.resumen}>
                    <Text style={styles.resumenTitle}>Resumen de reserva:</Text>
                    <Text>Vehículo: Honda Civic 2020</Text>
                    <Text>Dirección: Av. Providencia 1208</Text>
                    <Text>Fecha: Domingo 25</Text>
                    <Text>Hora: 15:00 - 16:30</Text>
                </View>

                <TouchableOpacity style={styles.continueButton} onPress={onNext}>
                    <Text style={styles.continueText}>Continuar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.continueButton} onPress={onBack}>
                    <Text style={styles.continueText}>Regresar</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

export default ReservaStep3

