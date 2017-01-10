
import { toArray, getFileExtension } from './helpers';

export const getId = files => {
  const sorted = toArray(files).sort((a, b) => 
    getFileExtension(a).localeCompare(getFileExtension(b))
  );
  return sorted.map(file => file.name).join('__');
};

export const save = (id, data) => {
  localStorage.setItem(id, JSON.stringify(data));
};

export const load = id => {
  const value = localStorage.getItem(id);
  if (value) {
    try {
      return JSON.parse(value);
    } catch (e) {
      console.error(e);
      return null;
    }
  }
  return value;
};
