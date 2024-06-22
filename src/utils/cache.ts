import { Coordinate } from '../interfaces';
import { User } from '../providers/gen';

const TOKEN = 'access-token';
const USER = 'user';
const COORDINATES = 'coordinates';

const getItemName = (partName: string) => `green-app-${partName}`;

const setItem = (key: string, value: string) => {
  localStorage.setItem(getItemName(key), value);
};

const getItem = (key: string) => localStorage.getItem(getItemName(key));

const removeItem = (key: string) => {
  localStorage.removeItem(getItemName(key));
};

const setJsonItem = (key: string, object: unknown) => {
  try {
    setItem(key, JSON.stringify(object));
  } catch {
    setItem(key, 'null');
  }
};

const getJsonItem = (key: string) => {
  try {
    return JSON.parse(getItem(key) || 'null');
  } catch {
    return null;
  }
};
const token =
  'eyJhbGciOiJSUzI1NiIsImtpZCI6ImYwOGU2ZTNmNzg4ZDYwMTk0MDA1ZGJiYzE5NDc0YmY5Mjg5ZDM5ZWEiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vYXV0aC0yZGZmNiIsImF1ZCI6ImF1dGgtMmRmZjYiLCJhdXRoX3RpbWUiOjE3MTkwMDA1MDcsInVzZXJfaWQiOiJiVlVOWU1xQjRIWW45d1lFVmI2TjNsYU41WksyIiwic3ViIjoiYlZVTllNcUI0SFluOXdZRVZiNk4zbGFONVpLMiIsImlhdCI6MTcxOTAwMDUwNywiZXhwIjoxNzE5MDA0MTA3LCJlbWFpbCI6InRlc3RAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsidGVzdEBleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.MEjO4BqQO2pYm5O9Z8FV-1WtJ_7rXH1bMaaxTLpbUMkmXJ-iZPfy1PdqVLAw2_d1rxIAMW_Fk3c_01Jnl_e990Awsm5hwziR4qA87VR-TmL4ZVbpAH-3ktfsfnFNuoUvvFi4ozq_k0cEVat5z6VRq8kWNAjznBjvzLx6i237ny78CQs63d12Zelfih352yXkBP4yc5ILWON1OiUW_5Z_LI9ljkNngF5C0_3U9-rTKW7WpDnpdNkbINXQ6K9uV20Ed67YNqQQHR-N7AFDYpPQK53jXvs7Vfz5UJWoo4L6rXD174sNmB3Wi2qYSh2ciCAdeVxxncQHNkvx4EwIKAZuYA';
export const getCached = {
  token: () => token,
  user: () => ({
    id: 'user3_id_here',
  }),
  coordinates: () => getJsonItem(COORDINATES),
};

export const cache = {
  token: (token: string) => setItem(TOKEN, token),
  user: (user: User) => setJsonItem(USER, user),
  coordinates: (coordinate: Coordinate) => setJsonItem(COORDINATES, coordinate),
};

export const clearCached = {
  token: () => removeItem(TOKEN),
  user: () => removeItem(USER),
  coordinates: () => removeItem(COORDINATES),
};
