import { View, Text, StyleSheet, TouchableOpacity, Pressable} from "react-native";
import * as Clipboard from 'expo-clipboard'
import useStorage from '../../hooks/useStorage'

export function ModalPassword({password, handleClose}){

    const {saveItem} = useStorage();

    async function handleCopyPassword(){
        await Clipboard.setStringAsync(password)
        await saveItem("@pass", password)

        alert("Senha salva com sucesso!")
        handleClose();
    }
return(

    <View style={styles.container}>
      <View style={styles.content}>  
        <Text style={styles.title}> Senha Gerada </Text>

        <Pressable style={styles.press} onLongPress={handleCopyPassword}>
        <Text style={styles.contentPassword}>
           {password}
            </Text>
        </Pressable>

        <View style={styles.buttonsdown}>
        <TouchableOpacity style={styles.button} onPress={handleClose}>
            <Text style={styles.buttonText}>Voltar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.button, styles.buttonSave]} onPress={handleCopyPassword} >
            <Text style={styles.buttonSaveText}> Salvar Senha</Text>
            </TouchableOpacity>
        </View>
        
      </View>

    </View>
)
}

const styles = StyleSheet.create({

    container:{
        backgroundColor:"rgba(24,24,24, 0.6)",
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    content:{
        backgroundColor: "#FFF",
        width: "85%",
        paddingTop: 24,
        paddingBottom: 24,
        alignItems:'center',
        justifyContent:'center',
        borderRadius: 8
    },
    title:{
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 24
        },
    
    press: {
        backgroundColor: 'black',
        borderRadius: 8,
        width:"90%",
        padding: 14,
        marginBottom: 24
    },
    contentPassword:{
        color: "#FFF",
        textAlign: 'center',
        fontWeight: 'bold'
    },
    buttonsdown: {
        flexDirection: 'row',
        width: "90%",
        marginTop:8,
        alignItems:"center", 
        justifyContent: 'space-between'
    },
    button:{
        flex:1,
        alignItems: 'center',
        marginTop: 14,
        marginBottom:14
    },
    buttonSave:{
        backgroundColor: '#392DE9',
        borderRadius:8
    },

    buttonSaveText:{
        color: "#FFF",
        fontWeight:'bold'
    }
   
})