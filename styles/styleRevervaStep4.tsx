import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: "#F8F9FB",
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 16,
        color: "#333",
    },
    tabContainer: {
        flexDirection: "row",
        marginBottom: 16,
        borderRadius: 10,
        backgroundColor: "#E0E0E0",
        overflow: "hidden",
    },
    tab: {
        flex: 1,
        padding: 12,
        alignItems: "center",
    },
    activeTab: {
        backgroundColor: "#406FB5",
    },
    tabText: {
        color: "#555",
        fontWeight: "500",
    },
    activeTabText: {
        color: "white",
        fontWeight: "600",
    },
    cardService: {
        backgroundColor: "white",
        borderRadius: 10,
        padding: 16,
        marginBottom: 12,
        borderWidth: 1,
        borderColor: "#DDD",
    },
    selectedCard: {
        borderColor: "#406FB5",
        backgroundColor: "#E2EEF7",
    },
    nombre: {
        fontSize: 16,
        fontWeight: "600",
        color: "#333",
    },
    precio: {
        fontSize: 14,
        color: "#666",
        marginTop: 4,
    },
    seleccionado: {
        marginTop: 8,
        fontSize: 12,
        color: "#406FB5",
        fontWeight: "bold",
    },
    total: {
        marginTop: 20,
        padding: 16,
        backgroundColor: "#A7CFE9",
        borderRadius: 8,
    },
    totalText: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#395B94",
    },
    boton: {
        marginTop: 20,
        backgroundColor: "#406FB5",
        padding: 16,
        borderRadius: 10,
        alignItems: "center",
    },
    botonText: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
    },
    continueButton: {
        marginTop: 12,
        padding: 12,
        borderRadius: 10,
        alignItems: "center",
        borderColor: "#406FB5",
        borderWidth: 1,
    },
    continueText: {
        color: "#406FB5",
        fontSize: 15,
        fontWeight: "500",
    },
});
