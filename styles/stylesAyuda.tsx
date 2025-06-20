import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    // header: {
    //     backgroundColor: '#4CC978',
    //     paddingVertical: 16,
    //     paddingHorizontal: 16,
    //     flexDirection: 'row',
    //     alignItems: 'center',
    //     gap: 8,
    //     height: 100,
    //     justifyContent: 'center'
    // },
    // headerTitle: {
    //     color: 'white',
    //     fontSize: 18,
    //     fontWeight: 'bold',
    //     marginTop: 20
    // },
    chatArea: {
        flex: 1,
        backgroundColor: '#F9F9F9',
    },
    botMessage: {
        backgroundColor: '#CBE1F2',
        padding: 12,
        borderRadius: 12,
        maxWidth: '80%',
        alignSelf: 'flex-start',
        marginBottom: 8,
    },
    botText: {
        fontSize: 14,
        color: '#333',
    },
    timestamp: {
        fontSize: 10,
        color: '#666',
        marginTop: 4,
        alignSelf: 'flex-end',
    },
    faqSection: {
        marginTop: 16,
    },
    faqTitle: {
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 8,
        color: '#333',
    },
    faqButton: {
        borderWidth: 1,
        borderColor: '#5E9BD3',
        borderRadius: 12,
        padding: 12,
        marginBottom: 8,
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    faqButtonText: {
        color: '#5E9BD3',
        fontWeight: '600',
        fontSize: 14,
    },
})

export default styles