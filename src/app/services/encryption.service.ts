import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';
import { environment } from 'src/environments/environment'; // Import du fichier d'environnement

@Injectable({
  providedIn: 'root',
})
export class EncryptionService {
  private secretKey = environment.secretKey; // Utilisation de la clé depuis l'environnement

  constructor() {}

  // Chiffre les données
  encryptData(data: any): string {
    return CryptoJS.AES.encrypt(JSON.stringify(data), this.secretKey).toString();
  }

  // Déchiffre les données
  decryptData(encryptedData: string): any {
    try {
      const bytes = CryptoJS.AES.decrypt(encryptedData, this.secretKey);
      return JSON.parse(bytes.toString(CryptoJS.enc.Utf8)) || null;
    } catch {
      console.error('Erreur lors du décryptage des données');
      return null;
    }
  }
}
