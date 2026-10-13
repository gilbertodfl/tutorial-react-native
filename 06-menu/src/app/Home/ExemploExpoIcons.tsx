import type {ComponentProps} from 'react';
import {ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Ionicons} from '@react-native-vector-icons/ionicons';

type ExemploExpoIconsProps = {
  onBack: () => void;
};

type IoniconName = ComponentProps<typeof Ionicons>['name'];

const colors = {
  background: '#F5F3FF',
  surface: '#FFFFFF',
  ink: '#1E1B4B',
  muted: '#6B7280',
  violet: '#665A88',
  violetTint: '#EDE9FE',
  blueTint: '#E8EEF8',
  tealTint: '#E5F1EE',
  amberTint: '#F5EFE2',
};

const icons: {name: string; icon: IoniconName; tint: string}[] = [
  {name: 'Início', icon: 'home-outline', tint: colors.violetTint},
  {name: 'Busca', icon: 'search-outline', tint: colors.blueTint},
  {name: 'Perfil', icon: 'person-outline', tint: colors.tealTint},
  {name: 'Configurações', icon: 'settings-outline', tint: colors.amberTint},
];

const ExemploExpoIcons = ({onBack}: ExemploExpoIconsProps) => (
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

      <Text style={styles.title}>Ícones com Expo</Text>
      <Text style={styles.subtitle}>
        Ícones vetoriais Ionicons: nítidos em diferentes tamanhos e cores.
      </Text>

      <View style={styles.grid}>
        {icons.map(item => (
          <View key={item.name} style={styles.card}>
            <View style={[styles.iconCircle, {backgroundColor: item.tint}]}>
              <Ionicons
                name={item.icon}
                size={34}
                color={colors.violet}
                accessibilityLabel={item.name}
              />
            </View>
            <Text style={styles.iconName}>{item.name}</Text>
            <Text style={styles.iconCode}>{item.icon}</Text>
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
    gap: 10,
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
  iconName: {
    color: colors.ink,
    fontSize: 16,
    fontWeight: '700',
  },
  iconCode: {
    color: colors.muted,
    fontSize: 12,
  },
});

export default ExemploExpoIcons;
