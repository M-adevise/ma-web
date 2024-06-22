import { AuthProvider } from '@refinedev/core';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { cache, clearCached, getCached } from '../utils';
import { securityApi } from './api';
import { auth } from './firebase-conf';

export const authProvider: AuthProvider & {
  loginGoogle: () => void;
} = {
  async check() {
    const token = getCached.token();
    if (!token) {
      return {
        authenticated: false,
        redirectTo: '/login',
      };
    }
    try {
      this.getIdentity && (await this.getIdentity({}));
      return {
        authenticated: true,
      };
    } catch {
      return {
        authenticated: false,
        redirectTo: '/login',
      };
    }
  },
  async register({ email, password }) {
    try {
      return {
        success: true,
        redirectTo: '/',
      };
    } catch (err) {
      return {
        success: false,
        error: {
          name: 'Sign up error',
          message: (err as Error).message || 'Error',
        },
      };
    }
  },
  async login({ email, password }) {
    try {
      const { user: firebaseUser } = await signInWithEmailAndPassword(auth, email, password);
      const firebaseToken = await firebaseUser.getIdToken();
      cache.token(firebaseToken);
      const { data: user } = await securityApi().signIn();
      cache.user(user);
      return {
        success: true,
        redirectTo: '/',
      };
    } catch (err) {
      console.log(err);

      return {
        success: false,
        error: {
          name: 'Erreur',
          message: "Une erreur s'est produite.",
        },
      };
    }
  },
  async logout() {
    clearCached.token();
    clearCached.user();
    return {
      success: true,
      redirectTo: '/login',
    };
  },
  async onError(error) {
    return { error };
  },
  async loginGoogle() {
    try {
      const { data } = await securityApi().signIn();
      cache.user(data);
      return {
        success: true,
        redirectTo: '/',
      };
    } catch (err) {
      return {
        success: true,
        redirectTo: '/',
      };
    }
  },
  async getIdentity(params) {
    try {
      const user = getCached.user();
      return user;
    } catch {
      localStorage.clear();
      return {
        success: false,
        redirect: '/login',
      };
    }
  },
  async getPermissions(params) {
    return null;
  },
  async forgotPassword() {
    return {
      success: true,
    };
  },
  updatePassword: async params => {
    return {
      success: true,
    };
  },
};
