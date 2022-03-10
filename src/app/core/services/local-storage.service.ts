import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  setInfo(key: string, data: any) {
    const jsonData = JSON.stringify(data)
    localStorage.setItem(key, jsonData);
  }

  loadInfo_2(key: string) {
    const data = JSON.parse(localStorage.getItem(key) || '{}');
    return data;
  }

  loadInfo() {
    const data = JSON.parse(localStorage.getItem('username') || '{}');
    return data;
  }

  clearInfo() {
    localStorage.removeItem('username');
  }

  clearAllLocalStorage() {
    localStorage.clear();
  }
}
