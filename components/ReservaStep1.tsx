import styles from '@/styles/stylesReservas';
import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import {
    ScrollView,
    Text,
    TouchableOpacity
} from 'react-native';

type Props = {
    onNext: () => void
}

const vehicles = [
    {id: '1', name: 'Honda Civic'},
    {id: '2', name: 'Hyundai Creta'},
    {id: '3', name: 'Hyundai Santa Fe'},
]

const addresses = [
    {id: '1', name: 'Casa'},
    {id: '2', name: 'Trabajo'},
]

const ReservaStep1 = ({ onNext }: Props) => {
    const [ selectedVehicle, setSelectedVehicle] = useState< string| null>(null)
    const [ selectedAddress, setSelectedAddress ] = useState<string | null>(null)
    
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.sectionTitle}>Selecciona tu vehículo</Text>
            { vehicles.map((vehicle) => (
                <TouchableOpacity 
                    key={vehicle.id}
                    style={[
                        styles.card,
                        selectedVehicle === vehicle.id && styles.selectedCard,
                    ]}
                    onPress={() =>
                        setSelectedVehicle((prev) => (prev === vehicle.id ? null : vehicle.id))
                    }
                >
                    <Ionicons name='car-sport-outline' size={16} />
                    <Text style={styles.cardText}>{vehicle.name}</Text>
                </TouchableOpacity>
            ))}
            <TouchableOpacity style={styles.addButton}>
                <Text style={styles.addButtonText}>+ Agregar Vehículo</Text>
            </TouchableOpacity>

            <Text style={styles.sectionTitle}>Selecciona la dirección</Text>
            {addresses.map((addr) => (
                <TouchableOpacity
                    key={addr.id}
                    style={[
                        styles.card,
                        selectedAddress === addr.id && styles.selectedCard,
                    ]}
                    onPress={() => 
                        setSelectedAddress((prev) => (prev === addr.id ? null : addr.id))
                    }
                >
                    <Ionicons name='location-outline' size={16} />
                    <Text style={styles.cardText}>{addr.name}</Text>
                </TouchableOpacity>
            ))}
            <TouchableOpacity style={styles.addButton}>
                <Text style={styles.addButtonText}>+ Agregar Dirección</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.continueButton} onPress={onNext}>
                <Text style={styles.continueText}>Continuar</Text>
            </TouchableOpacity>
        </ScrollView>
    )
}

export default ReservaStep1;
