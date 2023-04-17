import { StyleSheet} from 'react-native';

const estilo = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#a0a377',
      alignItems: 'center',
      justifyContent: 'center',
    },
    container2: {
      flex: 1,
      backgroundColor: '#a0a307',
      alignItems: 'center',
      justifyContent: 'center',
    },
    container3: {
      flex: 1,
      backgroundColor: '#a0a007',
      alignItems: 'center',
      justifyContent: 'center',
    },
    produto:{
        width: 360,
        height: 200,
        backgroundColor: '#ff0',
        borderRadius: 10,
        justifyContent: "space-between",
        marginVertical: 20
               
    },
    produto_titulo:{
        fontSize: 18,
        padding:5,       
        backgroundColor:"#040404c4",
        color: "#FFF",
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    produto_preco:{
        fontSize: 18,
        padding:5,       
        backgroundColor:"#040404c4",
        color: "#FFF",
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        textAlign: "center"
    },
    
  });
  
export default estilo;