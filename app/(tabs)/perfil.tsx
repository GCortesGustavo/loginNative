import Header from "@/components/Header";
import styles from "@/styles/stylesPerfil";
import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  ScrollView,
  Text,
  TouchableOpacity,
  View
} from "react-native";



const PerfilScreen = () => {
  const [ mode, setMode] = useState<'historial' | 'vehiculos'>('historial')
  return (
    <View style={styles.container}>
      <Header />

      <ScrollView contentContainerStyle={styles.content}>
        {/* CARD PERFIL */}
        <View style={styles.profileCard}>
          <View style={styles.row}>
            <Ionicons name="person-circle-outline" size={50} color="#3cb371" />
            <View style={{ marginLeft: 10 }}>
              <Text style={styles.name}>Juan Pérez</Text>
              <Text style={styles.email}>juan.perez@ejemplo.com</Text>
              <Text style={styles.phone}>+56 9 1234 5678</Text>
            </View>
          </View>

          <View style={styles.statsRow}>
            <View style={styles.statTrophy}>
              <Ionicons name="trophy-outline" size={24} color={'#3cb371'}/>
              <View>
                <Text style={styles.statValue}>15</Text>
                <Text style={styles.statLabel}>Puntos</Text>
              </View>
            </View>
            <View style={styles.stat}>
              <Text style={styles.statValue}>3</Text>
              <Text style={styles.statLabel}>Servicios</Text>
            </View>
            <View style={styles.stat}>
              <Text style={styles.statValue}>5</Text>
              <Text style={styles.statLabel}>Más para premio</Text>
            </View>
          </View>
        </View>

        {/* TABS */}
        <View style={styles.tabs}>
          <TouchableOpacity 
            onPress={() => setMode('historial')} 
            style={[styles.tab, styles.tabActive]}
          >
            <Text style={styles.tabActiveText}>Historial</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            onPress={() => setMode('vehiculos')} 
            style={styles.tab}
          >
            <Text style={styles.tabText}>Mis Vehículos</Text>
          </TouchableOpacity>
        </View>

        {/* HISTORIAL */}
        {mode === 'historial' ? (
          <>
          <View style={styles.serviceCard}>
          <View style={styles.serviceHeader}>
            <Text style={styles.serviceTitle}>Lavado Completo</Text>
            <Text style={styles.servicePrice}>$18.000 CLP</Text>
          </View>
          <Text style={styles.serviceDate}>12 Mayo 2025</Text>
          <Text style={styles.serviceInfo}>🕒 15:00 - 15:30</Text>
          <Text style={styles.serviceInfo}>👤 Carlos Rodríguez</Text>
          <View style={styles.serviceFooter}>
            <Text style={styles.completed}>✅ Completado</Text>
            <TouchableOpacity style={styles.detailsButton}>
              <Text style={styles.detailsButtonText}>Ver Detalles</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.serviceCard}>
          <View style={styles.serviceHeader}>
            <Text style={styles.serviceTitle}>Lavado Básico</Text>
            <Text style={styles.servicePrice}>$18.000 CLP</Text>
          </View>
          <Text style={styles.serviceDate}>11 Mayo 2025</Text>
          <Text style={styles.serviceInfo}>🕒 10:00 - 10:30</Text>
          <Text style={styles.serviceInfo}>👤 Ana Martínez</Text>
          <View style={styles.serviceFooter}>
            <Text style={styles.completed}>✅ Completado</Text>
            <TouchableOpacity style={styles.detailsButton}>
              <Text style={styles.detailsButtonText}>Ver Detalles</Text>
            </TouchableOpacity>
          </View>
        </View>
          </>
        ) : (
          <>
            <View style={styles.vehiculosContainer}>
              <View style={styles.card}>
                  <Ionicons name="car-outline" size={40} color={'#3cb371'}/>
                    <View style={styles.info}>
                      <Text style={styles.name1}>Honda Civic</Text>
                      <Text style={styles.subInfo}>
                        2020 - SEDAN
                      </Text>
                      
                      <Text style={styles.defaultBadge}>Predeterminado</Text>
                      
                      </View>
                    <TouchableOpacity>
                      <Text style={styles.editButton}>Editar</Text>
                    </TouchableOpacity>
              </View>
              <View style={styles.card}>
                  <Ionicons name="car-outline" size={40} color={'#3cb371'}/>
                    <View style={styles.info}>
                      <Text style={styles.name1}>TOYOTA RAV4</Text>
                      <Text style={styles.subInfo}>
                        2021 - SUV
                      </Text>                      
                      </View>
                    <TouchableOpacity>
                      <Text style={styles.editButton}>Editar</Text>
                    </TouchableOpacity>
              </View>
              <TouchableOpacity style={styles.addButton}>
                <Text style={styles.addButtonText}>🚗 Agregar Vehículo</Text>
              </TouchableOpacity>
            </View>
          </>
        )}
      </ScrollView>
    </View>
  );
};

export default PerfilScreen;


