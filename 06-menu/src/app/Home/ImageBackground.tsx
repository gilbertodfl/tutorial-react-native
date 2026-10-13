import { StyleSheet, Text, View, ImageBackground, TouchableOpacity } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

type ModalImageBackgroundProps = {
  onBack: () => void;
};

const colors = {
  background: '#F5F3FF',
  surface: '#FFFFFF',
  ink: '#1E1B4B',
  muted: '#6B7280',
  violet: '#7C3AED',
  white: '#FFFFFF',
};
export default function ExemploImageBackground({onBack}: ModalImageBackgroundProps) {
  const image = { uri: "https://legacy.reactjs.org/logo-og.png" };

  return (
    <SafeAreaProvider>
      <ImageBackground
        source={require("../img/fundoMobile.png")}
        resizeMode="cover"
        style={styles.container}
      >
        <View style={styles.content}>
            <TouchableOpacity
              style={styles.backButton}
              onPress={onBack}
              activeOpacity={0.75}
              accessibilityRole="button"
              accessibilityLabel="Voltar ao menu">
              <Text style={styles.backButtonText}>Voltar ao menu</Text>
            </TouchableOpacity>
    
          <ImageBackground
            source={image}
            resizeMode="cover"
            style={{ width: 200, height: 200 }}
          >
            <Text style={styles.backButtonText}>Image com COVER - REACT</Text>
          </ImageBackground>
        </View>
      </ImageBackground>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
  },
  container: {
    flex: 1,
    padding: 24,
  },
  backButton: {
    alignSelf: 'flex-start',
    paddingVertical: 8,
  },
  backButtonText: {
    color: colors.white,
    fontSize: 18,
    fontWeight: '700',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    gap: 14,
  },
  title: {
    color: colors.ink,
    fontSize: 30,
    fontWeight: '800',
  },
  description: {
    color: colors.muted,
    fontSize: 16,
    lineHeight: 23,
  },
  openButton: {
    alignItems: 'center',
    backgroundColor: colors.violet,
    borderRadius: 14,
    marginTop: 8,
    paddingVertical: 15,
  },
  openButtonText: {
    color: colors.surface,
    fontSize: 16,
    fontWeight: '700',
  },
  modalOverlay: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(30, 27, 75, 0.55)',
    padding: 24,
  }
});
