import { doc, setDoc, getDoc } from 'firebase/firestore';
import { db } from './Firebase';

export const saveWalletData = async (userId, balance, currency, promoApplied) => {
    try {
      const walletRef = doc(db, 'wallets', userId); // Reference to the user's wallet document
  
      // Save or update the wallet data
      await setDoc(
        walletRef,
        {
          balance,
          currency,
          promoApplied,
          lastUpdated: new Date(),
          userId
        },
        { merge: true } // Merge with existing data
      );
  
      console.log(`Wallet data saved for user: ${userId}`);
    } catch (error) {
      console.error('Error saving wallet data:', error);
    }
  };


  export const fetchWalletData = async (userId) => {
    try {
      const walletRef = doc(db, 'wallets', userId); // Reference to the user's wallet document
      const walletSnapshot = await getDoc(walletRef);
  
      if (walletSnapshot.exists()) {
        const walletData = walletSnapshot.data();
        console.log('Wallet data retrieved:', walletData);
        return walletData; // Return the wallet data to use in your application
      } else {
        console.log('No wallet data found for user:', userId);
        return null;
      }
    } catch (error) {
      console.error('Error fetching wallet data:', error);
      return null;
    }
  };

//   useEffect(() => {
//     const user = auth.currentUser;
//     if (user) {
//       fetchWalletData(user.uid).then((walletData) => {
//         if (walletData) {
//           setWallet(walletData);
//         } else {
//           // Initialize wallet with default values if no data exists
//           setWallet({ balance: 0, currency: 'BTC', promoApplied: false });
//         }
//       });
//     }
//   }, []);
  
  
  