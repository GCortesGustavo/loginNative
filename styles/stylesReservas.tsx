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
    },
    cardSmall: {
        backgroundColor: "#F5F5F5",
        paddingVertical: 10,
        paddingHorizontal: 12,
        borderRadius: 10,
        marginRight: 8,
        marginBottom: 8,
    },
    selectedCard: {
        backgroundColor: "#D1FADF",
        borderColor: "#32B768",
        borderWidth: 1,
    },
    cardText: {
        fontSize: 14,
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
})

export default styles