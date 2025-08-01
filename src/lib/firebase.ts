import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore, getDoc, doc } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Configuration Firebase
const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  };
  

// Initialisation Firebase
const app = initializeApp(firebaseConfig);

// Export des services Firebase
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

// Debug pour vérifier l'état de l'authentification
if (typeof window !== 'undefined') {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log('Utilisateur connecté:', user.email);
    } else {
      console.log('Utilisateur non connecté');
    }
  });
}

// Fonction pour vérifier si l'utilisateur est admin
export const checkIsAdmin = async (user: any) => {
  if (!user) {
    console.log('Pas d\'utilisateur fourni pour la vérification admin');
    return false;
  }
  
  try {
    // Vérifier si l'utilisateur est toujours authentifié
    const currentUser = auth.currentUser;
    if (!currentUser) {
      console.log('Utilisateur non authentifié');
      return false;
    }

    console.log('Vérification admin pour:', {
      email: user.email,
      uid: user.uid,
      isCurrentUser: currentUser.uid === user.uid
    });

    // Récupérer le document admin
    const adminRef = doc(db, 'admins', user.uid);
    console.log('Chemin du document:', `admins/${user.uid}`);

    const adminDoc = await getDoc(adminRef);
    const isAdmin = adminDoc.exists();
    console.log('Statut admin:', isAdmin);
    
    if (!isAdmin) {
      console.log('Document admin non trouvé pour cet utilisateur');
    }

    return isAdmin;
  } catch (error: any) {
    // Log détaillé de l'erreur
    console.error('Erreur complète:', {
      name: error.name,
      code: error.code,
      message: error.message,
      details: error.details || 'Pas de détails supplémentaires'
    });
    
    return false;
  }
};
