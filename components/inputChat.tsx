import styles from "@/styles/stylesInputChat";
import { Ionicons } from "@expo/vector-icons";
import { TextInput, TouchableOpacity, View } from "react-native";

const InputChat = () => {
    return (
        <View style={styles.inputArea}>
            <TextInput 
                style={styles.input}
                placeholder="Escribe tu pregunta..."
                placeholderTextColor="#888"
            />
            <TouchableOpacity>
                <Ionicons name="send" size={24} color="#406FB5"/>
            </TouchableOpacity>
        </View>
    )
}

export default InputChat