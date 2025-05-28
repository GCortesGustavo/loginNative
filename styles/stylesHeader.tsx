import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#4CC978',
        borderRadius: 12,
        padding: 16,
        marginBottom: 16,
    },
    headerLeft: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    headerInfo: {
        flexDirection: 'row',
    },
    logoPlaceholder: {
        width: 40,
        height: 40,
        backgroundColor: '#ffffff80',
        borderRadius: 20,
        marginRight: 8,
    },
    headerText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    },
    puntosContainer: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    puntosText: {
        color: 'white',
        fontWeight: '600',
        marginLeft: 6,
    },
})

export default styles