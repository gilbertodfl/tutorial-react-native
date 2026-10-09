import {
  Platform,
  ScrollView,
  Share,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import Constants from 'expo-constants';
import expoPackage from 'expo/package.json';

const expoVersion: string = expoPackage.version;
const sdkVersion: string | undefined = Constants.expoConfig?.sdkVersion;

const colors = {
  pink: '#EC4899',
  background: '#F5F3FF',
  surface: '#FFFFFF',
  ink: '#1E1B4B',
  muted: '#6B7280',
  violet: '#7C3AED',
  coral: '#F43F5E',
  teal: '#0D9488',
  amber: '#F59E0B',
  sky: '#0EA5E9',
  success: '#16A34A',
  successSoft: '#DCFCE7',
  neutralSoft: '#E5E7EB',
  codeBg: '#1E1B4B',
};

const mono = Platform.select({ios: 'Menlo', default: 'monospace'});
const rounded = Platform.select({
  ios: 'Avenir Next',
  default: 'sans-serif-medium',
});

const osLabel: Record<string, string> = {
  ios: 'iOS',
  android: 'Android',
  web: 'Web',
  windows: 'Windows',
  macos: 'macOS',
};

type InfoCardProps = {
  icon: string;
  label: string;
  accent: string;
  children: React.ReactNode;
};

const InfoCard = ({icon, label, accent, children}: InfoCardProps) => (
  <View style={[styles.card, {borderLeftColor: accent}]}>
    <View style={styles.cardHeader}>
      <View style={[styles.iconBadge, {backgroundColor: accent + '22'}]}>
        <Text style={styles.icon}>{icon}</Text>
      </View>
      <Text style={styles.label}>{label}</Text>
    </View>
    {children}
  </View>
);

const BooleanPill = ({value}: {value: boolean}) => (
  <View
    style={[
      styles.pill,
      {backgroundColor: value ? colors.successSoft : colors.neutralSoft},
    ]}>
    <Text
      style={[
        styles.pillText,
        {color: value ? colors.success : colors.muted},
      ]}>
      {value ? 'Sim' : 'Não'}
    </Text>
  </View>
);

const formatValue = (value: unknown): string =>
  typeof value === 'object' && value !== null
    ? JSON.stringify(value)
    : String(value);

const App = () => {
  const constants = (Platform.constants ?? {}) as Record<string, unknown>;
  const entries = Object.entries(constants);
  const isIOS = Platform.OS === 'ios';

  const shareInfo = () =>
    Share.share({
      message: JSON.stringify(
        {
          os: Platform.OS,
          version: Platform.Version,
          isTV: Platform.isTV,
          constants: Platform.constants,
        },
        null,
        2,
      ),
    });

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeArea}>
        <ScrollView
          contentContainerStyle={styles.container}
          showsVerticalScrollIndicator={false}>
          <View style={styles.hero}>
            <Text style={styles.heroHint}>Seu dispositivo roda</Text>
            <Text style={styles.heroTitle}>
              {osLabel[Platform.OS] ?? Platform.OS}
            </Text>
            <Text style={styles.heroVersion}>
              versão {String(Platform.Version)}
            </Text>
          </View>

          <InfoCard icon="📱" label="Sistema operacional" accent={colors.violet}>
            <Text style={styles.value}>{Platform.OS}</Text>
          </InfoCard>

          <InfoCard icon="🔢" label="Versão do sistema" accent={colors.coral}>
            <Text style={styles.value}>{String(Platform.Version)}</Text>
          </InfoCard>

          <InfoCard icon="🚀" label="Versão do Expo" accent={colors.pink}>
            <Text style={styles.value}>{expoVersion}</Text>
            {sdkVersion && (
              <Text style={styles.valueHint}>SDK {sdkVersion}</Text>
            )}
          </InfoCard>

          <InfoCard icon="📺" label="É uma TV?" accent={colors.teal}>
            <BooleanPill value={Platform.isTV} />
          </InfoCard>

          {isIOS && (
            <InfoCard icon="🖥️" label="É um iPad?" accent={colors.amber}>
              <BooleanPill value={Platform.isPad} />
            </InfoCard>
          )}

          <InfoCard icon="⚙️" label="Constantes da plataforma" accent={colors.sky}>
            <View style={styles.codeBlock}>
              {entries.length === 0 ? (
                <Text style={styles.codeEmpty}>
                  Nenhuma constante disponível nesta plataforma.
                </Text>
              ) : (
                entries.map(([key, val]) => (
                  <Text key={key} style={styles.codeLine} selectable>
                    <Text style={styles.codeKey}>{key}</Text>
                    <Text style={styles.codeSeparator}>: </Text>
                    <Text style={styles.codeValue}>{formatValue(val)}</Text>
                  </Text>
                ))
              )}
            </View>
          </InfoCard>

          <TouchableOpacity
            style={styles.button}
            onPress={shareInfo}
            activeOpacity={0.85}
            accessibilityRole="button"
            accessibilityLabel="Compartilhar informações do dispositivo">
            <Text style={styles.buttonText}>Compartilhar informações</Text>
          </TouchableOpacity>
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
    padding: 20,
    paddingBottom: 40,
    gap: 14,
  },

  hero: {
    backgroundColor: colors.violet,
    borderRadius: 28,
    paddingVertical: 28,
    paddingHorizontal: 24,
    marginBottom: 6,
  },
  heroHint: {
    fontFamily: rounded,
    fontSize: 15,
    color: '#EDE9FE',
    marginBottom: 4,
  },
  heroTitle: {
    fontFamily: rounded,
    fontSize: 44,
    fontWeight: '800',
    color: '#FFFFFF',
    letterSpacing: -1,
  },
  heroVersion: {
    fontFamily: rounded,
    fontSize: 17,
    fontWeight: '600',
    color: '#FDE68A',
    marginTop: 4,
  },

  card: {
    backgroundColor: colors.surface,
    borderRadius: 18,
    borderLeftWidth: 6,
    padding: 16,
    gap: 12,
    elevation: 2,
    shadowColor: colors.ink,
    shadowOpacity: 0.08,
    shadowRadius: 10,
    shadowOffset: {width: 0, height: 4},
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  iconBadge: {
    width: 36,
    height: 36,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    fontSize: 18,
  },
  label: {
    fontFamily: rounded,
    fontSize: 15,
    fontWeight: '600',
    color: colors.muted,
  },
  value: {
    fontFamily: rounded,
    fontSize: 24,
    fontWeight: '700',
    color: colors.ink,
  },

  valueHint: {
    fontFamily: rounded,
    fontSize: 14,
    fontWeight: '600',
    color: colors.muted,
    marginTop: -6,
  },

  pill: {
    alignSelf: 'flex-start',
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 999,
  },
  pillText: {
    fontFamily: rounded,
    fontSize: 16,
    fontWeight: '700',
  },

  codeBlock: {
    backgroundColor: colors.codeBg,
    borderRadius: 14,
    padding: 14,
    gap: 6,
  },
  codeLine: {
    fontFamily: mono,
    fontSize: 13,
    lineHeight: 20,
  },
  codeKey: {
    color: '#C4B5FD',
    fontWeight: '700',
  },
  codeSeparator: {
    color: '#9CA3AF',
  },
  codeValue: {
    color: '#5EEAD4',
  },
  codeEmpty: {
    fontFamily: rounded,
    fontSize: 14,
    color: '#C4B5FD',
  },

  button: {
    backgroundColor: colors.coral,
    borderRadius: 16,
    paddingVertical: 16,
    alignItems: 'center',
    marginTop: 6,
  },
  buttonText: {
    fontFamily: rounded,
    fontSize: 17,
    fontWeight: '700',
    color: '#FFFFFF',
  },
});

export default App;