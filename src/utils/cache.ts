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
  'eyJhbGciOiJSUzI1NiIsImtpZCI6ImYwOGU2ZTNmNzg4ZDYwMTk0MDA1ZGJiYzE5NDc0YmY5Mjg5ZDM5ZWEiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vYXV0aC0yZGZmNiIsImF1ZCI6ImF1dGgtMmRmZjYiLCJhdXRoX3RpbWUiOjE3MTkwMjc4NzgsInVzZXJfaWQiOiJXZHh5ODBXOUwxVmFuTXVjRE16UGJQQXROY24yIiwic3ViIjoiV2R4eTgwVzlMMVZhbk11Y0RNelBiUEF0TmNuMiIsImlhdCI6MTcxOTAyNzg3OCwiZXhwIjoxNzE5MDMxNDc4LCJlbWFpbCI6ImRvY3RvcjJAZW1haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbImRvY3RvcjJAZW1haWwuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.aY_Oqb5kFvmzG014-JYRyiw33yEs4CIg7bjKVHPkZDsXB5_20wAkQEE2uVnJ5r05WevpCRvdUlrFVzPRHt3YV60MwswkxCb8-2N_F52x1IaPOInZcBgimuoo-IfVD6z-KSG3ok_qX-5188OyMN2Vtk_JR-SxHnjKy3CYge7RJ0REiqCAKMMRHZgUHXX6RvmK6DI11jO6Do4dyUeyQsajsz9Lm54LZzjzQd_tQXgyt2hnadL-kiFDBw5c4GMi4XJ_UeHc6NGAaYqEj6l0uoLoZk0ra7dBbFT81WGvEh4L5B30h_1ymKUzW8Pdf54xQrW_mHdfISMubPTEtg35lifQNQ';
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
