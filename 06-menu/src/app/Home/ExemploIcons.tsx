import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

type ExemploIconsProps = {
  onBack: () => void;
};

const colors = {
  background: '#F5F3FF',
  surface: '#FFFFFF',
  ink: '#1E1B4B',
  muted: '#6B7280',
  violet: '#7C3AED',
  violetTint: '#EDE9FE',
  blueTint: '#E8EEF8',
  tealTint: '#E5F1EE',
  amberTint: '#F5EFE2',
};

const icons = [
  {name: 'Início', symbol: '🏠', color: colors.violetTint},
  {name: 'Busca', symbol: '🔍', color: colors.blueTint},
  {name: 'Perfil', symbol: '👤', color: colors.tealTint},
  {name: 'Configurações', symbol: '⚙️', color: colors.amberTint},
];

const ExemploIcons = ({onBack}: ExemploIconsProps) => (
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

      <Text style={styles.title}>Exemplos de Ícones</Text>
      <Text style={styles.subtitle}>
        Quatro símbolos comuns em aplicativos: início, busca, perfil e ajustes.
      </Text>

      <View style={styles.grid}>
        {icons.map(icon => (
          <View key={icon.name} style={styles.card}>
            <View style={[styles.iconCircle, {backgroundColor: icon.color}]}>
              <Text style={styles.icon} accessibilityLabel={icon.name}>
                {icon.symbol}
              </Text>
            </View>
            <Text style={styles.iconName}>{icon.name}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
  },
  container: {
    flexGrow: 1,
    padding: 20,
    paddingBottom: 40,
    gap: 16,
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
  title: {
    color: colors.ink,
    fontSize: 32,
    fontWeight: '800',
  },
  subtitle: {
    color: colors.muted,
    fontSize: 16,
    lineHeight: 23,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 14,
    marginTop: 8,
  },
  card: {
    flexGrow: 1,
    flexBasis: '45%',
    alignItems: 'center',
    backgroundColor: colors.surface,
    borderRadius: 18,
    padding: 20,
    gap: 12,
    elevation: 2,
    shadowColor: colors.ink,
    shadowOpacity: 0.08,
    shadowRadius: 10,
    shadowOffset: {width: 0, height: 4},
  },
  iconCircle: {
    width: 72,
    height: 72,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 36,
  },
  icon: {
    fontSize: 32,
  },
  iconName: {
    color: colors.ink,
    fontSize: 16,
    fontWeight: '700',
  },
});

export default ExemploIcons;
