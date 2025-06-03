import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-end",
        backgroundColor: "#4CC978",
        padding: 16,
        borderRadius: 8,
        height: 140,
        // margin: 12,
    },
    headerLeft: {
        flexDirection: "column",
        flex: 1,
    },
    logoAndName: {
        flexDirection: "row",
        alignItems: "center",
        gap: 16,
    },
    logo: {
        width: 48,
        height: 48,
        borderRadius: 24,
        backgroundColor: "#fff",
    },
    businessName: {
        color: "white",
        fontWeight: "bold",
        fontSize: 24,
    },
    locationRow: {
        flexDirection: "row",
        alignItems: "center",
        gap: 4,
        marginTop: 2,
    },
    addressText: {
        color: "white",
        fontSize: 14,
    },
    pointsContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: 6,
    },
    pointsText: {
        color: "white",
        fontWeight: "bold",
        fontSize: 14,
    },
});

export default styles;
