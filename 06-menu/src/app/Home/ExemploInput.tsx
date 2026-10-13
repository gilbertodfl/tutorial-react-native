import {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

type ExemploInputProps = {
  onBack: () => void;
};

const colors = {
  background: '#F5F3FF',
  surface: '#FFFFFF',
  ink: '#1E1B4B',
  muted: '#6B7280',
  violet: '#7C3AED',
  border: '#DDD6FE',
};

const ExemploInput = ({onBack}: ExemploInputProps) => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [password, setPassword] = useState('');
  const [url, setUrl] = useState('');
  const [number, setNumber] = useState('');
  const [date, setDate] = useState('');

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        contentContainerStyle={styles.container}
        keyboardShouldPersistTaps="handled">
        <TouchableOpacity
          style={styles.backButton}
          onPress={onBack}
          activeOpacity={0.75}
          accessibilityRole="button"
          accessibilityLabel="Voltar ao menu">
          <Text style={styles.backButtonText}>Voltar ao menu</Text>
        </TouchableOpacity>

        <Text style={styles.title}>Exemplos de Input</Text>
        <Text style={styles.subtitle}>
          Veja como configurar o TextInput para diferentes tipos de conteúdo.
        </Text>

        <View style={styles.card}>
          <Text style={styles.label}>Email</Text>
          <Text style={styles.hint}>keyboardType="email-address"</Text>
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            placeholder="voce@exemplo.com"
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            autoComplete="email"
            accessibilityLabel="Email"
          />
        </View>

        <View style={styles.card}>
          <Text style={styles.label}>Texto com várias linhas</Text>
          <Text style={styles.hint}>multiline e textAlignVertical="top"</Text>
          <TextInput
            style={[styles.input, styles.multilineInput]}
            value={message}
            onChangeText={setMessage}
            placeholder="Escreva uma mensagem..."
            multiline
            numberOfLines={4}
            textAlignVertical="top"
            accessibilityLabel="Mensagem com várias linhas"
          />
        </View>

        <View style={styles.card}>
          <Text style={styles.label}>Senha</Text>
          <Text style={styles.hint}>secureTextEntry oculta o conteúdo</Text>
          <TextInput
            style={styles.input}
            value={password}
            onChangeText={setPassword}
            placeholder="Digite sua senha"
            secureTextEntry
            autoCapitalize="none"
            autoComplete="new-password"
            accessibilityLabel="Senha"
          />
        </View>

        <View style={styles.card}>
          <Text style={styles.label}>URL</Text>
          <Text style={styles.hint}>keyboardType="url"</Text>
          <TextInput
            style={styles.input}
            value={url}
            onChangeText={setUrl}
            placeholder="https://exemplo.com"
            keyboardType="url"
            autoCapitalize="none"
            autoCorrect={false}
            accessibilityLabel="URL"
          />
        </View>

        <View style={styles.card}>
          <Text style={styles.label}>Somente números</Text>
          <Text style={styles.hint}>keyboardType="number-pad"</Text>
          <TextInput
            style={styles.input}
            value={number}
            onChangeText={setNumber}
            placeholder="12345"
            keyboardType="number-pad"
            accessibilityLabel="Somente números"
          />
        </View>

        <View style={styles.card}>
          <Text style={styles.label}>Data</Text>
          <Text style={styles.hint}>
            number-pad para digitar a data no formato DD/MM/AAAA
          </Text>
          <TextInput
            style={styles.input}
            value={date}
            onChangeText={setDate}
            placeholder="DD/MM/AAAA"
            keyboardType="number-pad"
            accessibilityLabel="Data no formato dia, mês e ano"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
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
    marginBottom: 4,
  },
  card: {
    backgroundColor: colors.surface,
    borderRadius: 18,
    padding: 18,
    gap: 8,
    elevation: 2,
    shadowColor: colors.ink,
    shadowOpacity: 0.08,
    shadowRadius: 10,
    shadowOffset: {width: 0, height: 4},
  },
  label: {
    color: colors.ink,
    fontSize: 17,
    fontWeight: '700',
  },
  hint: {
    color: colors.muted,
    fontSize: 13,
    lineHeight: 18,
  },
  input: {
    minHeight: 48,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 12,
    color: colors.ink,
    fontSize: 16,
  },
  multilineInput: {
    minHeight: 112,
  },
});

export default ExemploInput;
