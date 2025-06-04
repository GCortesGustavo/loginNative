import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: 80,
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    logo: {
        width: 120,
        height: 120,
        marginBottom: 16,
        borderRadius: 50,
        resizeMode: 'contain',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#395B94',
        marginBottom: 24,
    },
    card: {
        width: '100%',
        padding: 24,
        borderRadius: 12,
        backgroundColor: '#f9f9f9',
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 6,
        elevation: 3,
        overflow: 'scroll'
    },
    heading: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 8,
        color: '#020817'
    },
    subheading: {
        fontSize: 14,
        color: '#666',
        marginBottom: 20,
    },
    label: {
        fontSize: 14,
        marginBottom: 4,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        paddingHorizontal: 12,
        paddingVertical: 10,
        marginBottom: 16,
        backgroundColor: '#fff',
    },
    button: {
        backgroundColor: '#406FB5',
        borderRadius: 8,
        paddingVertical: 12,
        alignItems: 'center',
        marginTop: 4,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    forgotPassword: {
        marginTop: 16,
        textAlign: 'center',
        color: '#324D76',
        textDecorationLine: 'underline',
    },
    switchContainer: {
        flexDirection: 'row',
        backgroundColor: '#f1f5f9',
        borderRadius: 8,
        overflow: 'hidden',
        marginBottom: 20,
    },
    switchButton: {
        flex: 1,
        padding: 12,
        alignItems: 'center',
    },
    switchText: {
        fontWeight: '600',
        color: '#64748B',
    },
    activeSwitch: {
        backgroundColor: '#fff',
    },
    activeSwitchText: {
        color: '#020817',
    },
    pickerWrapper: {
        borderWidth: 1,
        borderColor: '#cbd5e1',
        borderRadius: 8,
        overflow: 'hidden',

    },
    picker: {
        backgroundColor: '#fff',
        height: 50,
    },
});

export default styles