import { Text, View } from "react-native";
import { styles } from "./styles";

export const ProfileInfo = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.name}>EDUARDO DOS SANTOS DORNELES</Text>

            <Text style={styles.info}>
                <Text style={styles.title}>Ins. Ensino:</Text> Universidade Cruzeiro do Sul
            </Text>

            <Text style={styles.info}>
                <Text style={styles.title}>Curso:</Text> Analise e Desenvolvimento de Sistemas
            </Text>

            <Text style={styles.info}>
                <Text style={styles.title}>Nível de Ensino:</Text> SUPERIOR
            </Text>

            <Text style={styles.info}>
                <Text style={styles.title}>RG:</Text> 5146985359
            </Text>

            <Text style={styles.info}>
                <Text style={styles.title}>Data de Nasc:</Text> 23/06/2003
            </Text>

            <Text style={styles.info}>
                <Text style={styles.title}>Validade:</Text> 31/03/2024
            </Text>
        </View>
    );
};
