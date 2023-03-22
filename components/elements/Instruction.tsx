import { StyleSheet, Text } from "react-native";
import Colors from "../../constants/colors";

function Instruction({ children, style }: any) {
  return <Text style={[styles.instruction, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  instruction: {
    fontFamily: "space-mono-regular",
    color: Colors.accent500,
    fontSize: 24,
  },
});

export default Instruction;
