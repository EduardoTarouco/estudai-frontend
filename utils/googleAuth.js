import { auth } from '@/config/firebase';
import * as AuthSession from 'expo-auth-session';
import * as Google from 'expo-auth-session/providers/google';
import * as WebBrowser from 'expo-web-browser';
import { GoogleAuthProvider, signInWithCredential } from 'firebase/auth';

WebBrowser.maybeCompleteAuthSession();

export function useGoogleAuth() {
  const clientId = process.env.EXPO_PUBLIC_GOOGLE_CLIENT_ID;
  const redirectUri = AuthSession.makeRedirectUri({
    useProxy: true,
  });
  
  const [request, response, promptAsync] = Google.useAuthRequest({
    clientId: clientId,
    scopes: ['openid', 'profile', 'email'],
    redirectUri: redirectUri,
  });

  const signInWithGoogle = async () => {
    try {
      if (!clientId) {
        throw new Error('Google Client Id não configurado');
      }

      if (request === null) {
        throw new Error('Aguardando configuração de autenticação');
      }

      const result = await promptAsync();
      
      if (result.type === 'success') {
        const { id_token, access_token } = result.params;
        
        if (!id_token) {
          throw new Error('Token de autenticação não recebido');
        }
        
        const credential = GoogleAuthProvider.credential(id_token, access_token);
        const userCredential = await signInWithCredential(auth, credential);
        const user = userCredential.user;
        
        return {
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
          idToken: await user.getIdToken(),
        };
      } else if (result.type === 'cancel') {
        throw new Error('Autenticação cancelada pelo usuário');
      } else if (result.type === 'error') {
        const errorMessage = result.error?.message || 'Erro desconhecido';
        throw new Error(`Erro ao autenticar: ${errorMessage}`);
      } else {
        throw new Error('Erro ao autenticar com Google');
      }
    } catch (error) {
      throw error;
    }
  };

  return { signInWithGoogle, isLoading: request === null };
}

