
import {Text, View, ImageBackground, ScrollView} from 'react-native';
import estilo from './estilo';


export default function Adidas() {
  return (
    <ScrollView>
      <View style={estilo.container2}>
        <ImageBackground
          style={estilo.produto}
          source={require("../assets/Tenis/Adidas/6.png")}
          borderRadius={10}
          resizeMode="cover"
        >
          <Text style={estilo.produto_titulo}>Adidas Coreracer Masculino</Text>
          <Text style={estilo.produto_preco}>R$ 179,99</Text>

        </ImageBackground>

        <ImageBackground
          style={estilo.produto}
          source={require("../assets/Tenis/Adidas/7.png")}
          borderRadius={10}
          resizeMode="cover"
        >
          <Text style={estilo.produto_titulo}>Adidas Breaknet Masculino</Text>
          <Text style={estilo.produto_preco}>R$ 208,99</Text>

        </ImageBackground>

        <ImageBackground
          style={estilo.produto}
          source={require("../assets/Tenis/Adidas/8.png")}
          borderRadius={10}
          resizeMode="cover"
        >
          <Text style={estilo.produto_titulo}>Adidas Lite Racer Rebold 1</Text>
          <Text style={estilo.produto_preco}>R$ 379,99</Text>

        </ImageBackground>

        
        <ImageBackground
          style={estilo.produto}
          source={require("../assets/Tenis/Adidas/9.png")}
          borderRadius={10}
          resizeMode="cover"
        >
          <Text style={estilo.produto_titulo}>Adidas Lite Racer Rebold 2</Text>
          <Text style={estilo.produto_preco}>329,05 </Text>

        </ImageBackground>

        <ImageBackground
          style={estilo.produto}
          source={require("../assets/Tenis/Adidas/10.png")}
          borderRadius={10}
          resizeMode="cover"
        >
          <Text style={estilo.produto_titulo}>Adidas Lite Racer Rebold 3</Text>
          <Text style={estilo.produto_preco}>R$ 218,49</Text>

        </ImageBackground>





      </View>
    </ScrollView>
  );
}
