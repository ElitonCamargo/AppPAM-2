import { NavigationContainer} from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Nike from "./components/Nike";
import Mizuno from "./components/Mizuno";
import Adidas from "./components/Adidas";



const Nav = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      
        <Nav.Navigator>
          <Nav.Screen name="Nike" component={Nike}/>
          <Nav.Screen name="Mizuno" component={Mizuno}/>
          <Nav.Screen name="Adidas" component={Adidas}/>

        </Nav.Navigator>
      
    </NavigationContainer>
  );
}