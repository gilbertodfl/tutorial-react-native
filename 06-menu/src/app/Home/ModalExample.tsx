import {useState} from 'react';
import {
  Modal,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

type ModalExampleProps = {
  onBack: () => void;
};

const colors = {
  background: '#F5F3FF',
  surface: '#FFFFFF',
  ink: '#1E1B4B',
  muted: '#6B7280',
  violet: '#7C3AED',
};

const ModalExample = ({onBack}: ModalExampleProps) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={onBack}
          activeOpacity={0.75}
          accessibilityRole="button"
          accessibilityLabel="Voltar ao menu">
          <Text style={styles.backButtonText}>Voltar ao menu</Text>
        </TouchableOpacity>

        <View style={styles.content}>
          <Text style={styles.title}>Exemplo de Modal</Text>
          <Text style={styles.description}>
            Toque no botão para abrir uma janela sobre esta tela.
          </Text>
          <TouchableOpacity
            style={styles.openButton}
            onPress={() => setIsModalVisible(true)}
            activeOpacity={0.85}
            accessibilityRole="button"
            accessibilityLabel="Abrir modal">
            <Text style={styles.openButtonText}>Abrir modal</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Modal
        visible={isModalVisible}
        transparent
        animationType="fade"
        onRequestClose={() => setIsModalVisible(false)}>
        <View style={styles.modalOverlay}>
          <View
            style={styles.modalCard}
            accessibilityViewIsModal
            accessibilityRole="alert">
            <Text style={styles.modalTitle}>Olá!</Text>
            <Text style={styles.modalDescription}>
              Este é um modal simples feito com o componente Modal do React
              Native.
            </Text>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setIsModalVisible(false)}
              activeOpacity={0.85}
              accessibilityRole="button"
              accessibilityLabel="Fechar modal">
              <Text style={styles.closeButtonText}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

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
    color: colors.violet,
    fontSize: 15,
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
  },
  modalCard: {
    width: '100%',
    maxWidth: 420,
    backgroundColor: colors.surface,
    borderRadius: 20,
    padding: 24,
    gap: 14,
  },
  modalTitle: {
    color: colors.ink,
    fontSize: 24,
    fontWeight: '800',
  },
  modalDescription: {
    color: colors.muted,
    fontSize: 16,
    lineHeight: 23,
  },
  closeButton: {
    alignItems: 'center',
    backgroundColor: colors.violet,
    borderRadius: 12,
    marginTop: 4,
    paddingVertical: 13,
  },
  closeButtonText: {
    color: colors.surface,
    fontSize: 15,
    fontWeight: '700',
  },
});

export default ModalExample;
