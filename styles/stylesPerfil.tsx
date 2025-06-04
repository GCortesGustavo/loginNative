import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F2F7FC",
    },
    content: {
        padding: 16,
    },
    profileCard: {
        backgroundColor: "#E2EEF7",
        padding: 16,
        borderRadius: 12,
        marginBottom: 20,
    },
    row: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 16,
    },
    name: {
        fontSize: 18,
        fontWeight: "bold",
    },
    email: {
        fontSize: 14,
        color: "#555",
    },
    phone: {
        fontSize: 14,
        color: "#555",
    },
    statsRow: {
        flexDirection: "row",
        justifyContent: "space-around",
    },
    stat: {
        alignItems: "center",
    },
    statTrophy: {
        flexDirection: 'row',
        alignItems: "center",
    },
    statValue: {
        fontWeight: "bold",
        fontSize: 16,
        color: "#406FB5",
    },
    statLabel: {
        fontSize: 12,
        color: "#406FB5",
    },
    tabs: {
        flexDirection: "row",
        marginBottom: 16,
    },
    tab: {
        flex: 1,
        paddingVertical: 10,
        borderRadius: 10,
        alignItems: "center",
        backgroundColor: "#E2EEF7",
    },
    tabActive: {
        backgroundColor: "#5E9BD3",
        marginRight: 4,
    },
    tabText: {
        color: "#555",
        fontWeight: "500",
    },
    tabActiveText: {
        color: "#406FB5",
        fontWeight: "700",
    },
    serviceCard: {
        backgroundColor: "#fff",
        borderRadius: 12,
        padding: 16,
        marginBottom: 12,
        shadowColor: "#000",
        shadowOpacity: 0.05,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 5,
        elevation: 3,
    },
    serviceHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    serviceTitle: {
        fontWeight: "bold",
        fontSize: 16,
    },
    servicePrice: {
        fontWeight: "bold",
        color: "#324D76",
    },
    serviceDate: {
        marginTop: 4,
        color: "#777",
    },
    serviceInfo: {
        color: "#555",
        fontSize: 13,
    },
    serviceFooter: {
        marginTop: 12,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    completed: {
        color: "#324D76",
        fontWeight: "600",
    },
    detailsButton: {
        borderWidth: 1,
        borderColor: "#406FB5",
        borderRadius: 6,
        paddingVertical: 4,
        paddingHorizontal: 10,
    },
    detailsButtonText: {
        color: "#406FB5",
        fontWeight: "600",
    },
    vehiculosContainer: {
        gap: 12,
    },
    card: {
        flexDirection: "row",
        backgroundColor: "#fff",
        borderColor: "#406FB5",
        borderWidth: 1,
        borderRadius: 12,
        padding: 12,
        alignItems: "center",
        marginBottom: 8,
    },
    vehicleIcon: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: "#406FB5",
        marginRight: 12,
    },
    info: {
        flex: 1,
    },
    name1: {
        fontWeight: "600",
        fontSize: 16,
        color: "#222",
    },
    subInfo: {
        color: "#666",
        fontSize: 13,
    },
    defaultBadge: {
        marginTop: 4,
        backgroundColor: "#E2EEF7",
        color: "#406FB5",
        fontSize: 12,
        alignSelf: "flex-start",
        paddingHorizontal: 8,
        paddingVertical: 2,
        borderRadius: 6,
    },
    editButton: {
        color: "#406FB5",
        fontWeight: "500",
    },
    addButton: {
        borderWidth: 1,
        borderColor: "#406FB5",
        borderRadius: 12,
        padding: 12,
        marginTop: 12,
        alignItems: "center",
    },
    addButtonText: {
        color: "#406FB5",
        fontWeight: "600",
    },
    placeholder: {
        textAlign: "center",
        marginTop: 50,
        color: "#888",
    },
})

export default styles;