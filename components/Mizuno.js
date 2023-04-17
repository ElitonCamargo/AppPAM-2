
import {Text, View, ImageBackground, ScrollView} from 'react-native';
import estilo from './estilo';


export default function Mizuno() {
  return (
    <View style={estilo.container3}>
        <ImageBackground
          style={estilo.produto}
          source={require("../assets/Tenis/Mizuno/11.png")}
          borderRadius={10}
          resizeMode="cover"
        >
          <Text style={estilo.produto_titulo}>Mizuno Cometa</Text>
          <Text style={estilo.produto_preco}>R$ 341,99</Text>

        </ImageBackground>

        <ImageBackground
          style={estilo.produto}
          source={require("../assets/Tenis/Mizuno/12.png")}
          borderRadius={10}
          resizeMode="cover"
        >
          <Text style={estilo.produto_titulo}>Mizuno Cometa 2</Text>
          <Text style={estilo.produto_preco}>R$ 464,49</Text>

        </ImageBackground>
    </View>
  );
}
