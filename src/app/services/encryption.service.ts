import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root',
})
export class EncryptionService {
  private secretKey = 'azerty'; // Clé secrète

  constructor() {}

  // Chiffre les données
  encryptData(data: any): string {
    // Convertit l'objet en JSON, puis chiffre en utilisant la clé secrète
    return CryptoJS.AES.encrypt(JSON.stringify(data), this.secretKey).toString();
  }

  // Déchiffre les données
  decryptData(encryptedData: string): any {
    try {
      // Déchiffre les données en utilisant la clé secrète
      const bytes = CryptoJS.AES.decrypt(encryptedData, this.secretKey);
       // Convertit en objet JSON
      return JSON.parse(bytes.toString(CryptoJS.enc.Utf8)) || null;
    } catch {
      console.error('Erreur lors du décryptage des données');
      return null;
    }
  }
}
