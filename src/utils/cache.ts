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
  'eyJhbGciOiJSUzI1NiIsImtpZCI6ImYwOGU2ZTNmNzg4ZDYwMTk0MDA1ZGJiYzE5NDc0YmY5Mjg5ZDM5ZWEiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vYXV0aC0yZGZmNiIsImF1ZCI6ImF1dGgtMmRmZjYiLCJhdXRoX3RpbWUiOjE3MTkwMzIzMTksInVzZXJfaWQiOiJXZHh5ODBXOUwxVmFuTXVjRE16UGJQQXROY24yIiwic3ViIjoiV2R4eTgwVzlMMVZhbk11Y0RNelBiUEF0TmNuMiIsImlhdCI6MTcxOTAzMjMxOSwiZXhwIjoxNzE5MDM1OTE5LCJlbWFpbCI6ImRvY3RvcjJAZW1haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbImRvY3RvcjJAZW1haWwuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.AnISU6Us1dCl1BYnylm3HGudhLs7X-LjniuwcgCBGpZmqqp7SfCeO_5VYGmWqoAkfhhi-z1VmglZy-GxjxaPscr7TqmH1fdryXvVmF11Va8j-LFnF_r4van65-aXgGBnKAulQDxLRNDEOkgHlcOXjTdbl1kr6Cr5Ncpw--mXQmX8fk_oFsbiBbIquEW5dPi1BAiqjZOp4jtr_sGfJEurH83F1lNHFfLCJQncvORBb9kBvDwJZsoVWTvWGpEhrrK8kB1gJtTS6ZZLUSv_0_GFaLXtHna2iD0xD6kszfkWyJe-vAh6a2tSLuKZWNu8ShHs86Axf7no50KFALCG_Ucb1g';
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
