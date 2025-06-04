import { StyleSheet } from "react-native";

const stylesCars = StyleSheet.create({
    autoDescription: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        borderWidth: 1,
        borderColor: '#395B94',
        borderRadius: 12,
        paddingTop: 12,
        paddingBottom: 0,
        marginBottom: 12,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOpacity: 0.05,
        shadowRadius: 6,
        shadowOffset: { width: 0, height: 2 },
        elevation: 2,
    },
    carInfo: {
        flex: 1,
        flexDirection: 'row'
    },
    carIcon: {
        borderWidth: 1,
        borderColor: '#395B94',
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
        width: 64,
        marginLeft: 8,
        marginRight: 8 
    },
    carTitle: {
        fontWeight: 'bold',
        fontSize: 15,
        marginBottom: 2,
    },
    carSubtitle: {
        fontSize: 13,
        color: '#64748B',
    },
    tag: {
        backgroundColor: '#CBE1F2',
        color: '#324D76',
        fontSize: 12,
        paddingHorizontal: 8,
        paddingVertical: 2,
        borderRadius: 12,
        marginTop: 6,
        alignSelf: 'flex-start',
    },
    carAction: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#CBE1F2',
        marginTop: 8,
        height: 60,
        borderRadius: 12
    },
    lastWashText: {
        fontSize: 12,
        color: '#4B5563',
        marginBottom: 4,
        marginLeft: 8,
    },
})

export default stylesCars