import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingHorizontal: 16,
  },
    logoPlaceholder: {
    width: 40,
    height: 40,
    backgroundColor: '#ffffff80',
    borderRadius: 20,
    marginRight: 8,
  },
  button: {
    backgroundColor: '#E53935',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 6,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  proximaReserva: {
    backgroundColor: '#ECFDF5',
    borderColor: '#4CC978',
    borderWidth: 1,
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
  },
  proximaReservaTitle: {
    color: '#059669',
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 8,
  },
  proximaReservaText: {
    color: '#374151',
    fontSize: 14,
  },
  switchContainer: {
    flexDirection: 'row',
    backgroundColor: '#f1f5f9',
    borderRadius: 8,
    overflow: 'hidden',
    marginBottom: 16,
  },
  switchButton: {
    flex: 1,
    paddingVertical: 10,
    alignItems: 'center',
  },
  switchText: {
    fontWeight: '600',
    color: '#64748B',
  },
  activeSwitch: {
    backgroundColor: '#fff',
  },
  activeSwitchText: {
    color: '#020817',
  },
  autoDescription: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#4CC978',
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  carInfo: {
    flex: 1,
  },
  carTitle: {
    fontWeight: 'bold',
    fontSize: 15,
    marginBottom: 2,
  },
  carSubtitle: {
    fontSize: 13,
    color: '#64748B',
  },
  tag: {
    backgroundColor: '#D1FAE5',
    color: '#059669',
    fontSize: 12,
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 12,
    marginTop: 6,
    alignSelf: 'flex-start',
  },
  carAction: {
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  lastWashText: {
    fontSize: 12,
    color: '#4B5563',
    marginBottom: 4,
  },
  reserveButton: {
    backgroundColor: '#4CC978',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
  },
  reserveText: {
    color: 'white',
    fontWeight: '600',
  },
  addCarButton: {
    borderColor: '#4CC978',
    borderWidth: 1,
    padding: 12,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 12,
    marginBottom: 8,
  },
  addCarText: {
    color: '#4CC978',
    fontWeight: 'bold',
  },
  reserveNowButton: {
    backgroundColor: '#4CC978',
    padding: 14,
    borderRadius: 12,
    alignItems: 'center',
  },
  reserveNowText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
    recomendadoCard: {
    width: '100%',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#D1FADF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 4,
    elevation: 2,
  },
  recomendadoTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  serviceTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#020817',
  },
  serviceDescription: {
    fontSize: 14,
    color: '#64748B',
    marginTop: 4,
  },
  durationText: {
    fontSize: 13,
    color: '#94A3B8',
    marginTop: 6,
  },
  priceText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#16A34A',
    alignSelf: 'flex-start',
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  availableTag: {
    backgroundColor: '#D1FADF',
    color: '#065F46',
    fontWeight: '600',
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 20,
    fontSize: 13,
  },
});

export default styles;