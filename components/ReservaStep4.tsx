import styles from "@/styles/stylesReservas";
import React, { useState } from "react";
import {
    ScrollView,
    Text,
    TouchableOpacity,
    View
} from "react-native";

const servicios = [
    {id: '1', nombre: 'Aspirado', precio: 2977},
    {id: '2', nombre: 'Lavado Exterior', precio: 4870},
    {id: '3', nombre: 'Lavado Interior', precio: 5636},
    {id: '4', nombre: 'Lavado Completo', precio: 8368},
]

type Props = {
    onBack: () => void
}

const ReservaStep4 = ({ onBack }: Props) => {
    const [ servicioSeleccionado, setServicioSeleccionado] = useState<string | null>(null)
    
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Selecciona el Servicio</Text>
            {servicios.map((servicio) => (
                <TouchableOpacity
                    key={servicio.id}
                    onPress={() => setServicioSeleccionado(servicio.id)}
                    style={[
                        styles.cardService,
                        servicioSeleccionado === servicio.id && styles.selectedCard,
                    ]}
                >
                    <Text style={styles.nombre}>{servicio.nombre}</Text>
                    <Text style={styles.precio}>${servicio.precio.toLocaleString()} CLP</Text>
                    {servicioSeleccionado === servicio.id && (
                        <Text style={styles.seleccionado}>Seleccionado</Text>
                    )}
                </TouchableOpacity>
            ))}

            <View style={styles.total}>
                <Text style={{fontWeight: 'bold'}}>Total a pagar: $11.389 CLP</Text>
            </View>

            <TouchableOpacity style={styles.boton}>
                <Text style={styles.botonText}>Confirmar Reserva</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.continueButton} onPress={onBack}>
                <Text style={styles.continueText}>Regresar</Text>
            </TouchableOpacity>
        </ScrollView>
    )
}

export default ReservaStep4