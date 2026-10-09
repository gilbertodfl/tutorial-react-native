import {useState} from 'react';
import {
  SafeAreaView,
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import ActivityIndicatorScreen from './ActivityIndicator';
import ModalExample from './ModalExample';

type Screen = 'menu' | 'activityIndicator' | 'modal';

const colors = {
  background: '#F5F3FF',
  surface: '#FFFFFF',
  ink: '#1E1B4B',
  muted: '#6B7280',
  violet: '#7C3AED',
  blue: '#2563EB',
};

const App = () => {
  const [screen, setScreen] = useState<Screen>('menu');

  return (
    <SafeAreaProvider>
      {screen === 'activityIndicator' ? (
        <ActivityIndicatorScreen onBack={() => setScreen('menu')} />
      ) : screen === 'modal' ? (
        <ModalExample onBack={() => setScreen('menu')} />
      ) : (
        <SafeAreaView style={styles.safeArea}>
          <View style={styles.container}>
            <View style={styles.heading}>
              <Text style={styles.title}>Exemplos</Text>
              <Text style={styles.subtitle}>
                Escolha um componente para explorar.
              </Text>
            </View>

            <TouchableOpacity
              style={[styles.menuButton, styles.activityButton]}
              onPress={() => setScreen('activityIndicator')}
              activeOpacity={0.85}
              accessibilityRole="button"
              accessibilityLabel="Abrir exemplo Activity Indicator">
              <Text style={styles.buttonTitle}>ACTIVITY INDICATOR</Text>
              <Text style={styles.buttonDescription}>
                Veja tamanhos, cores e um exemplo de carregamento.
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.menuButton, styles.modalButton]}
              onPress={() => setScreen('modal')}
              activeOpacity={0.85}
              accessibilityRole="button"
              accessibilityLabel="Abrir exemplo de modal">
              <Text style={styles.buttonTitle}>ABRIR MODAL</Text>
              <Text style={styles.buttonDescription}>
                Conheça uma tela com um modal de exemplo.
              </Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      )}
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 24,
    gap: 16,
  },
  heading: {
    gap: 8,
    marginBottom: 12,
  },
  title: {
    color: colors.ink,
    fontSize: 34,
    fontWeight: '800',
  },
  subtitle: {
    color: colors.muted,
    fontSize: 16,
  },
  menuButton: {
    borderRadius: 18,
    padding: 20,
    gap: 8,
    elevation: 2,
    shadowColor: colors.ink,
    shadowOpacity: 0.08,
    shadowRadius: 10,
    shadowOffset: {width: 0, height: 4},
  },
  activityButton: {
    backgroundColor: colors.violet,
  },
  modalButton: {
    backgroundColor: colors.blue,
  },
  buttonTitle: {
    color: colors.surface,
    fontSize: 17,
    fontWeight: '800',
  },
  buttonDescription: {
    color: colors.surface,
    fontSize: 14,
    lineHeight: 20,
    opacity: 0.9,
  },
});

export default App;
