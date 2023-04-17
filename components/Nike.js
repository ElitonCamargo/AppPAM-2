
import {Text, View, ImageBackground, ScrollView} from 'react-native';
import estilo from './estilo';


export default function Nike() {
  return (
    <ScrollView>
      <View style={estilo.container}>
        <ImageBackground
          style={estilo.produto}
          source={require("../assets/Tenis/nike/1.png")}
          borderRadius={10}
          resizeMode="cover"
        >
          <Text style={estilo.produto_titulo}>Nike Air Winflo 9 Rosa</Text>
          <Text style={estilo.produto_preco}>R$ 341,99</Text>

        </ImageBackground>

        <ImageBackground
          style={estilo.produto}
          source={require("../assets/Tenis/nike/2.png")}
          borderRadius={10}
          resizeMode="cover"
        >
          <Text style={estilo.produto_titulo}>Nike Air Winflo 9 Preto</Text>
          <Text style={estilo.produto_preco}>R$ 484,49</Text>

        </ImageBackground>

        <ImageBackground
          style={estilo.produto}
          source={require("../assets/Tenis/nike/3.png")}
          borderRadius={10}
          resizeMode="cover"
        >
          <Text style={estilo.produto_titulo}>Nike Renew Ride 3</Text>
          <Text style={estilo.produto_preco}>R$ 427,49</Text>

        </ImageBackground>

        <ImageBackground
          style={estilo.produto}
          source={require("../assets/Tenis/nike/4.png")}
          borderRadius={10}
          resizeMode="cover"
        >
          <Text style={estilo.produto_titulo}>Nike Renew Run 4</Text>
          <Text style={estilo.produto_preco}>R$ 427,49</Text>

        </ImageBackground>

        <ImageBackground
          style={estilo.produto}
          source={require("../assets/Tenis/nike/5.png")}
          borderRadius={10}
          resizeMode="cover"
        >
          <Text style={estilo.produto_titulo}>Nike Renew Run 5</Text>
          <Text style={estilo.produto_preco}>R$ 407,49</Text>

        </ImageBackground>


      </View>
    </ScrollView>
  );
}
