import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f7fdf9",
    },
    content: {
        padding: 16,
    },
    profileCard: {
        backgroundColor: "#e3fbee",
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
    statValue: {
        fontWeight: "bold",
        fontSize: 16,
        color: "#3cb371",
    },
    statLabel: {
        fontSize: 12,
        color: "#555",
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
        backgroundColor: "#e9f6ef",
    },
    tabActive: {
        backgroundColor: "#bdf0d4",
        marginRight: 4,
    },
    tabText: {
        color: "#555",
        fontWeight: "500",
    },
    tabActiveText: {
        color: "#2e7d32",
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
        color: "#2e7d32",
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
        color: "#3cb371",
        fontWeight: "600",
    },
    detailsButton: {
        borderWidth: 1,
        borderColor: "#3cb371",
        borderRadius: 6,
        paddingVertical: 4,
        paddingHorizontal: 10,
    },
    detailsButtonText: {
        color: "#3cb371",
        fontWeight: "600",
    },
      vehiculosContainer: {
    gap: 12,
  },
  card: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderColor: "#32B768",
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
    backgroundColor: "#CFFAE1",
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
    backgroundColor: "#F0F0F0",
    color: "#32B768",
    fontSize: 12,
    alignSelf: "flex-start",
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 6,
  },
  editButton: {
    color: "#32B768",
    fontWeight: "500",
  },
  addButton: {
    borderWidth: 1,
    borderColor: "#32B768",
    borderRadius: 12,
    padding: 12,
    marginTop: 12,
    alignItems: "center",
  },
  addButtonText: {
    color: "#32B768",
    fontWeight: "600",
  },
  placeholder: {
    textAlign: "center",
    marginTop: 50,
    color: "#888",
  },
})

export default styles;