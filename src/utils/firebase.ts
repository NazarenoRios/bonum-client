import { initializeApp } from 'firebase/app'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyB0zEafL4DdbQEBa17jrferdxfQ2kE1b94',
  authDomain: 'butterflix-c1a3d.firebaseapp.com',
  projectId: 'butterflix-c1a3d',
  storageBucket: 'butterflix-c1a3d.appspot.com',
  messagingSenderId: '907424904481',
  appId: '1:907424904481:web:2c8a7f0cf3b47d649c7a60',
  measurementId: 'G-050GFNDBZF',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const storage = getStorage(app)
