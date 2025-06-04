import { StyleSheet } from "react-native";

const styles = StyleSheet.create ({
  headerReserva: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    backgroundColor: "#E5F8EC",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#D4E7D9",
  },
  reservaTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#00A86B",
  },

  tabContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#F2F2F2",
    paddingVertical: 10,
  },
  tabButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
  },
  tabButtonActive: {
    backgroundColor: "#00A86B",
  },
  tabText: {
    color: "#333",
    fontWeight: "500",
  },
  tabTextActive: {
    color: "#fff",
  },

  contentContainer: {
    padding: 16,
  },

  // Detalles
  confirmLabel: {
    backgroundColor: "#D1FADF",
    padding: 6,
    borderRadius: 8,
    color: "#027A48",
    fontWeight: "600",
    alignSelf: "flex-start",
    marginBottom: 10,
  },
  detailBox: {
    backgroundColor: "#F9F9F9",
    borderRadius: 10,
    padding: 12,
    marginBottom: 10,
  },
  label: {
    fontWeight: "600",
    marginTop: 6,
    color: "#444",
  },
  text: {
    fontSize: 14,
    color: "#333",
  },
  pricesBox: {
    marginTop: 12,
    backgroundColor: "#FAFAFA",
    borderRadius: 10,
    padding: 12,
    borderWidth: 1,
    borderColor: "#EFEFEF",
  },
  totalText: {
    fontWeight: "bold",
    marginTop: 6,
    color: "#00A86B",
  },
  pointsBox: {
    marginTop: 16,
    backgroundColor: "#E5F8EC",
    borderRadius: 10,
    padding: 12,
    alignItems: "center",
  },
  pointsText: {
    fontWeight: "bold",
    color: "#00A86B",
    fontSize: 16,
  },
  subPointsText: {
    fontSize: 13,
    color: "#555",
    marginTop: 4,
  },
  cancelButton: {
    backgroundColor: "#FF4D4D",
    padding: 14,
    borderRadius: 10,
    marginTop: 20,
    alignItems: "center",
  },
  cancelText: {
    color: "#fff",
    fontWeight: "600",
  },

  // Chat
  chatBox: {
    gap: 12,
    flex: 1,
    justifyContent: 'space-between',
  },
  chatMessageLeft: {
    alignSelf: "flex-start",
    backgroundColor: "#F0F0F0",
    padding: 10,
    borderRadius: 10,
    maxWidth: "75%",
  },
  chatMessageRight: {
    alignSelf: "flex-end",
    backgroundColor: "#D1FADF",
    padding: 10,
    borderRadius: 10,
    maxWidth: "75%",
  },
  chatSender: {
    fontWeight: "bold",
    marginBottom: 4,
    color: "#027A48",
  },
  chatBubbleUser: {
    color: "#000",
  },

  // Ayuda
  ayudaBox: {
    gap: 16,
    justifyContent: 'space-between',
  },
  faqText: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 8,
  },
  faqItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    backgroundColor: "#F2F2F2",
    padding: 12,
    borderRadius: 8,
  },
  faqQuestion: {
    fontSize: 14,
    color: "#333",
  },
  pageContainer: {
    justifyContent: 'space-between',
    flexDirection: 'column'
  },
})

export default styles