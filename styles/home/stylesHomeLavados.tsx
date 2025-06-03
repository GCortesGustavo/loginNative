import { StyleSheet } from "react-native";

const stylesLavados = StyleSheet.create({
    recomendadoCard: {
    width: '100%',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#D1FADF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 4,
    elevation: 2,
    },
    recomendadoTop: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 12,
    },
    serviceTitle: {
        fontSize: 16,
        fontWeight: '700',
        color: '#020817',
    },
    serviceDescription: {
        fontSize: 14,
        color: '#64748B',
        marginTop: 4,
    },
    durationText: {
        fontSize: 13,
        color: '#94A3B8',
        marginTop: 6,
    },
    priceText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#16A34A',
        alignSelf: 'flex-start',
    },
    cardFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#D1F9E1',
        marginTop: 8,
        height: 60,
        borderRadius: 12
    },
    availableTag: {
        backgroundColor: '#D1FADF',
        color: '#065F46',
        fontWeight: '600',
        paddingVertical: 4,
        paddingHorizontal: 12,
        borderRadius: 20,
        fontSize: 13,
    },
})

export default stylesLavados