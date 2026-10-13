import {useState} from 'react';
import {
  SafeAreaView,
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import {ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import type {ComponentType} from 'react';
import ActivityIndicatorScreen from './ActivityIndicator';
import ExemploInput from './ExemploInput';
import ExemploIcons from './ExemploIcons';
import ExemploExpoIcons from './ExemploExpoIcons';
import ModalExample from './ModalExample';
import ExemploImageBackground from './ImageBackground';

type ExampleScreenProps = {onBack: () => void};
type Example = {
  id: string;
  title: string;
  description: string;
  accessibilityLabel: string;
  color: string;
  component: ComponentType<ExampleScreenProps>;
};

const colors = {
  background: '#F5F3FF',
  surface: '#FFFFFF',
  ink: '#1E1B4B',
  muted: '#6B7280',
  violet: '#665A88',
  blue: '#536B84',
};

const examples: Example[] = [
  {
    id: 'activityIndicator',
    title: 'ACTIVITY INDICATOR',
    description: 'Veja tamanhos, cores e um exemplo de carregamento.',
    accessibilityLabel: 'Abrir exemplo Activity Indicator',
    color: colors.violet,
    component: ActivityIndicatorScreen,
  },
  {
    id: 'modal',
    title: 'ABRIR MODAL',
    description: 'Conheça uma tela com um modal de exemplo.',
    accessibilityLabel: 'Abrir exemplo de modal',
    color: colors.blue,
    component: ModalExample,
  },
  {
    id: 'input',
    title: 'EXEMPLOS DE INPUT',
    description: 'Explore campos de email, senha, texto, URL, número e data.',
    accessibilityLabel: 'Abrir exemplos de input',
    color: '#52756E',
    component: ExemploInput,
  },
  {
    id: 'icons',
    title: 'EXEMPLOS DE ÍCONES',
    description: 'Veja quatro ícones comuns em aplicativos.',
    accessibilityLabel: 'Abrir exemplos de ícones',
    color: '#76647D',
    component: ExemploIcons,
  },
  {
    id: 'expoIcons',
    title: 'ÍCONES VETORIAIS',
    description: 'Explore os ícones Ionicons do pacote Expo Vector Icons.',
    accessibilityLabel: 'Abrir exemplos de ícones vetoriais',
    color: '#665A88',
    component: ExemploExpoIcons,
  },
  {
    id: 'ExemploImageBackground',
    title: 'Imagem de fundo',
    description: 'Exemplo de imagem de fundo.',
    accessibilityLabel: 'Abrir exemplos de imagem de fundo',
    color: '#665A88',
    component: ExemploImageBackground,
  },
  
];

const App = () => {
  const [selectedExample, setSelectedExample] = useState<string | null>(null);
  const activeExample = examples.find(example => example.id === selectedExample);

  if (activeExample) {
    const ScreenComponent = activeExample.component;

    return (
      <SafeAreaProvider>
        <ScreenComponent onBack={() => setSelectedExample(null)} />
      </SafeAreaProvider>
    );
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={styles.container}>
          <View style={styles.heading}>
            <Text style={styles.title}>Exemplos</Text>
            <Text style={styles.subtitle}>
              Escolha um componente para explorar.
            </Text>
          </View>

          {examples.map(example => (
            <TouchableOpacity
              key={example.id}
              style={[styles.menuButton, {backgroundColor: example.color}]}
              onPress={() => setSelectedExample(example.id)}
              activeOpacity={0.85}
              accessibilityRole="button"
              accessibilityLabel={example.accessibilityLabel}>
              <Text style={styles.buttonTitle}>{example.title}</Text>
              <Text style={styles.buttonDescription}>{example.description}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
  },
  container: {
    flexGrow: 1,
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
