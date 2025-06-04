import styles from '@/styles/stylesReservas';
import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import {
    ScrollView,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

type Props = {
    onNext: () => void
}

const vehicles = [
    {id: '1', name: 'Honda Civic', year: '2020', type: 'Sedán', isDefault: true},
    { id: '2', name: 'Hyundai Creta', year: '2022', type: 'SUV' },
    { id: '3', name: 'Hyundai Santa Fe', year: '2021', type: 'SUV' },
]

const addresses = [
    { id: '1', name: 'Casa', address: 'Av. Providencia 1208, Santiago, Chile', isDefault: true },
    { id: '2', name: 'Trabajo', address: 'Av. Apoquindo 4501, Las Condes, Chile' },
]

const ReservaStep1 = ({ onNext }: Props) => {
    const [ selectedVehicle, setSelectedVehicle] = useState< string| null>(null)
    const [ selectedAddress, setSelectedAddress ] = useState<string | null>(null)
    const insets = useSafeAreaInsets()

    return (
        <ScrollView 
            contentContainerStyle={{
                paddingBottom: insets.bottom + 50, 
            }}
        >
            <View style={styles.container}>
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
                        <Ionicons name='car-sport-outline' size={24} color="#406FB5" style={styles.cardIcon} />
                        <View style={{ flex: 1 }}>
                            <Text style={styles.cardTitle}>{vehicle.name}</Text>
                            <Text style={styles.cardSubtitle}>{vehicle.year} • {vehicle.type}</Text>
                            {vehicle.isDefault && (
                                <Text style={styles.defaultBadge}>Predeterminado</Text>
                            )}
                        </View>
                        {selectedVehicle === vehicle.id && (
                            <Ionicons name="checkmark-circle" size={24} color="#406FB5" />
                        )}
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
                        <Ionicons name='location-outline' size={24} color="#406FB5" style={styles.cardIcon}/>
                        <View style={{ flex: 1 }}>
                            <Text style={styles.cardTitle}>{addr.name}</Text>
                            <Text style={styles.cardSubtitle}>{addr.address}</Text>
                            {addr.isDefault && (
                                <Text style={styles.defaultBadge}>Predeterminado</Text>
                            )}
                        </View>
                        {selectedAddress === addr.id && (
                            <Ionicons name="checkmark-circle" size={24} color="#406FB5" />
                        )}
                    </TouchableOpacity>
                ))}
                <TouchableOpacity style={styles.addButton}>
                    <Text style={styles.addButtonText}>+ Agregar Dirección</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.continueButton} onPress={onNext}>
                    <Text style={styles.continueText}>Continuar</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

export default ReservaStep1;
