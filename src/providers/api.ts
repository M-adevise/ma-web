import { getCached } from '../utils';
import { ActivityApi, CommunicationApi, Configuration, DepartmentApi, FileApi, SecurityApi, UserApi } from './gen';

const getConfig = () => {
  const accessToken = getCached.token() || '';
  console.log(accessToken);
  const conf = new Configuration({ accessToken });
  conf.baseOptions = { headers: { Authorization: `Bearer ${accessToken}` } };
  return conf;
};

export const securityApi = () => new SecurityApi(getConfig());
export const userApi = () => new UserApi(getConfig());
export const fileApi = () => new FileApi(getConfig());
export const activityApi = () => new ActivityApi(getConfig());
export const departmentApi = () => new DepartmentApi(getConfig());
export const communicationApi = () => new CommunicationApi(getConfig());
