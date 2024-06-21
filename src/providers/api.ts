import { authProvider } from './auth-provider';
import { ActivityApi, DepartmentApi, FileApi, SecurityApi, UserApi } from './gen';

export const securityApi = () => new SecurityApi(authProvider.getConfig());
export const userApi = () => new UserApi(authProvider.getConfig());
export const fileApi = () => new FileApi(authProvider.getConfig());
export const activityApi = () => new ActivityApi(authProvider.getConfig());
export const departmentApi = () => new DepartmentApi(authProvider.getConfig());
