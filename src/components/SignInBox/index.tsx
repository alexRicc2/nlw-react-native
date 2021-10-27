import React from "react";
import { View } from "react-native";
import { COLORS } from "../../theme";
import { Button } from "../Button";
import { styles } from "./styles";
import { useAuth } from "../../hooks/Auth";
export function SignInBox(){
  
  const {signIn, isSigning} = useAuth();
  return(
    <View style={styles.container}>
      <Button 
        title="Entrar com o github"
        color={COLORS.BLACK_PRIMARY}
        backgroundColor={COLORS.YELLOW}
        icon="github"
        onPress={signIn}
        isLoading={isSigning}
      />

    </View>
  )
}