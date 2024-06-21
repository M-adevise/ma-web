import { AuthProvider } from '@refinedev/core';
import { cache, clearCached, getCached } from '../utils';
import { securityApi, userApi } from './api';
import { Configuration } from './gen';

export const authProvider: AuthProvider & {
  getConfig: () => Configuration;
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
      const { data: user } = await securityApi().signIn();
      cache.user(user);
      return {
        success: true,
        redirectTo: '/',
      };
    } catch (err) {
      return {
        success: false,
        error: {
          name: 'LoginError',
          message: (err as Error).message || 'Invalid username or password',
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
  getConfig() {
    const accessToken = getCached.token() || '';
    const conf = new Configuration({ accessToken });
    conf.baseOptions = { headers: { Authorization: `Bearer ${accessToken}` } };
    return conf;
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
      const { id } = getCached.user();
      const { data: user } = await userApi().getUserById({ id });
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
