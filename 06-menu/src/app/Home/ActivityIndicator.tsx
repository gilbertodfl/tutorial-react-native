import {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

/**
 * ActivityIndicator é o "carregando..." do React Native: um círculo girando
 * que avisa o usuário de que algo está acontecendo em segundo plano.
 *
 * Principais props:
 *  - size:      'small' | 'large' (no Android também aceita um número)
 *  - color:     cor do círculo
 *  - animating: true gira, false para (padrão: true)
 */

// Cores em um só lugar: se quiser mudar o visual, mexa aqui.
const colors = {
  background: '#F5F3FF',
  surface: '#FFFFFF',
  ink: '#1E1B4B',
  muted: '#6B7280',
  violet: '#7C3AED',
  blue: '#2563EB',
  green: '#16A34A',
  coral: '#F43F5E',
};

// Um pequeno componente reutilizável: evita repetir o mesmo código de card.
type SectionProps = {
  title: string;
  description: string;
  children: React.ReactNode;
};

const Section = ({title, description, children}: SectionProps) => (
  <View style={styles.card}>
    <Text style={styles.cardTitle}>{title}</Text>
    <Text style={styles.cardDescription}>{description}</Text>
    {children}
  </View>
);

// Cada indicador com uma legenda embaixo, para ficar claro qual prop gera qual resultado.
type DemoProps = {
  label: string;
  size?: 'small' | 'large';
  color?: string;
};

const Demo = ({label, size, color}: DemoProps) => (
  <View style={styles.demo}>
    <ActivityIndicator size={size} color={color} />
    <Text style={styles.demoLabel}>{label}</Text>
  </View>
);

type ActivityIndicatorScreenProps = {
  onBack: () => void;
};

const ActivityIndicatorScreen = ({onBack}: ActivityIndicatorScreenProps) => {
  // Estado que controla se o "carregamento" está acontecendo agora.
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!isLoading) {
      return;
    }

    const timeout = setTimeout(() => setIsLoading(false), 3000);
    return () => clearTimeout(timeout);
  }, [isLoading]);

  // Simula uma chamada de API: liga o indicador por 3 segundos.
  const simulateRequest = () => {
    setIsLoading(true);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={onBack}
          activeOpacity={0.75}
          accessibilityRole="button"
          accessibilityLabel="Voltar ao menu">
          <Text style={styles.backButtonText}>Voltar ao menu</Text>
        </TouchableOpacity>

        <Text style={styles.title}>ActivityIndicator</Text>
        <Text style={styles.subtitle}>
          O indicador de carregamento do React Native, passo a passo.
        </Text>

        {/* 1) Tamanhos */}
        <Section
          title="Tamanhos"
          description="A prop size aceita 'small' e 'large'. Sem ela, o padrão é 'small'.">
          <View style={styles.row}>
            <Demo label="padrão" />
            <Demo label="small" size="small" />
            <Demo label="large" size="large" />
          </View>
        </Section>

        {/* 2) Cores */}
        <Section
          title="Cores"
          description="A prop color aceita qualquer cor: nome, hexadecimal ou rgb.">
          <View style={styles.row}>
            <Demo label="violeta" size="large" color={colors.violet} />
            <Demo label="azul" size="large" color={colors.blue} />
            <Demo label="verde" size="large" color={colors.green} />
          </View>
        </Section>

        {/* 3) Uso real: ligar e desligar com estado */}
        <Section
          title="Uso real"
          description="Na prática, o indicador aparece enquanto uma tarefa roda e some quando ela termina. O estado isLoading controla isso.">
          <View style={styles.loadingArea}>
            {isLoading ? (
              <ActivityIndicator size="large" color={colors.coral} />
            ) : (
              <Text style={styles.idleText}>Tudo pronto por aqui ✅</Text>
            )}
          </View>

          <TouchableOpacity
            style={[styles.button, isLoading && styles.buttonDisabled]}
            onPress={simulateRequest}
            disabled={isLoading}
            activeOpacity={0.85}
            accessibilityRole="button"
            accessibilityLabel="Simular carregamento">
            <Text style={styles.buttonText}>
              {isLoading ? 'Carregando...' : 'Simular carregamento'}
            </Text>
          </TouchableOpacity>
        </Section>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  // Estrutura da tela
  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
  },
  container: {
    padding: 20,
    paddingBottom: 40,
    gap: 16,
  },

  // Cabeçalho
  title: {
    fontSize: 32,
    fontWeight: '800',
    color: colors.ink,
  },
  subtitle: {
    fontSize: 16,
    color: colors.muted,
    marginBottom: 4,
  },
  backButton: {
    alignSelf: 'flex-start',
    paddingVertical: 8,
  },
  backButtonText: {
    color: colors.violet,
    fontSize: 15,
    fontWeight: '700',
  },

  // Cards
  card: {
    backgroundColor: colors.surface,
    borderRadius: 18,
    padding: 18,
    gap: 12,
    elevation: 2, // sombra no Android
    shadowColor: colors.ink, // sombra no iOS
    shadowOpacity: 0.08,
    shadowRadius: 10,
    shadowOffset: {width: 0, height: 4},
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.ink,
  },
  cardDescription: {
    fontSize: 15,
    lineHeight: 22,
    color: colors.muted,
  },

  // Linha com os exemplos lado a lado
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 8,
  },
  demo: {
    alignItems: 'center',
    gap: 8,
  },
  demoLabel: {
    fontSize: 13,
    color: colors.muted,
  },

  // Exemplo de uso real
  loadingArea: {
    height: 64, // altura fixa para o layout não "pular" quando o indicador aparece
    alignItems: 'center',
    justifyContent: 'center',
  },
  idleText: {
    fontSize: 16,
    color: colors.muted,
  },
  button: {
    backgroundColor: colors.violet,
    borderRadius: 14,
    paddingVertical: 14,
    alignItems: 'center',
  },
  buttonDisabled: {
    opacity: 0.5,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#FFFFFF',
  },
});

export default ActivityIndicatorScreen;