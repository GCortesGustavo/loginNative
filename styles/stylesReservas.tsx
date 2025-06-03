import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        padding: 16,
        gap: 16,
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: "600",
        marginBottom: 8,
    },
    card: {
        backgroundColor: "#F5F5F5",
        padding: 12,
        borderRadius: 10,
        marginBottom: 8,
        flexDirection: 'row',
        alignItems: 'center'
    },
    cardSmall: {
        backgroundColor: "#F5F5F5",
        paddingVertical: 10,
        paddingHorizontal: 12,
        borderRadius: 10,
        marginRight: 8,
        marginBottom: 8,
        flexDirection: 'row',
        alignItems: 'center'
    },
    selectedCard: {
        backgroundColor: "#D1FADF",
        borderColor: "#32B768",
        borderWidth: 1,
    },
    cardPerson: {
        backgroundColor: "#F5F5F5",
        padding: 12,
        borderRadius: 10,
        marginBottom: 8,
    },
    cardText: {
        fontSize: 14,
        margin: 2
    },
    row: {
        flexDirection: "row",
        flexWrap: "wrap",
    },
    addButton: {
        borderWidth: 1,
        borderColor: "#32B768",
        borderRadius: 10,
        padding: 10,
        alignItems: "center",
    },
    addButtonText: {
        color: "#32B768",
    },
    summary: {
        backgroundColor: "#F0F0F0",
        padding: 12,
        borderRadius: 10,
    },
    summaryText: {
        fontWeight: "600",
        marginBottom: 4,
    },
    continueButton: {
        backgroundColor: "#32B768",
        padding: 14,
        borderRadius: 10,
        alignItems: "center",
        marginTop: 16,
    },
    continueText: {
        color: "#fff",
        fontWeight: "600",
    },
    /* ReservaStep3 */
    title: {
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 16,
    },
    nombre: {
        fontWeight: '600',
        fontSize: 16,
    },
    info: {
        color: '#555',
        marginTop: 4,
    },
    precio: {
        fontWeight: 'bold',
        color: '#4CAF50',
    },
    seleccionado: {
        marginTop: 8,
        fontSize: 12,
        color: '#4CAF50',
        fontWeight: 'bold',
    },
    resumen: {
        marginTop: 24,
        padding: 16,
        backgroundColor: '#f3f3f3',
        borderRadius: 8,
    },
    resumenTitle: {
        fontWeight: 'bold',
        marginBottom: 4,
    },
    boton: {
        marginTop: 24,
        backgroundColor: '#4CC978',
        paddingVertical: 14,
        borderRadius: 8,
        alignItems: 'center',
    },
    botonText: {
        color: 'white',
        fontWeight: '600',
        fontSize: 16,
    },
    total: {
        marginTop: 24,
        alignItems: 'center',
    },
    cardService: {
        backgroundColor: "#F5F5F5",
        padding: 12,
        borderRadius: 10,
        marginBottom: 8,
        flexDirection: 'row',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'space-between'
    },  
})

export default styles