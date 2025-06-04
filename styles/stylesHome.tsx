import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 16,
    paddingHorizontal: 16,
    paddingBottom: 10
  },
    logoPlaceholder: {
    width: 40,
    height: 40,
    backgroundColor: '#ffffff80',
    borderRadius: 20,
    marginRight: 8,
  },
  buttonLogOut: {
    backgroundColor: '#E53935',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 6,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
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
  reserveButton: {
    backgroundColor: '#395B94',
    marginBottom: 4,
    marginRight: 8,
    borderRadius: 8,
    width: 80,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center'
  },
  reserveText: {
    color: 'white',
    fontWeight: '600',
  },
  addCarButton: {
    borderColor: '#395B94',
    borderWidth: 1,
    padding: 12,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 12,
    marginBottom: 8,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  addCarText: {
    color: '#395B94',
    fontWeight: 'bold',
  },
  reserveNowButton: {
    backgroundColor: '#395B94',
    padding: 14,
    borderRadius: 12,
    alignItems: 'center',
  },
  reserveNowText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default styles;