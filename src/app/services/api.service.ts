import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Training } from '../model/Training.model';




@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) { } // Injection HttpClient 

  public getTrainings() {
    return this.http.get<Training[]>(environment.host+"/trainings"); // Requête GET pour obtenir toutes les formations 
  }

  public getTraining(id : number) {
    return this.http.get<Training>(environment.host+"/trainings"+id); // Requête GET pour obtenir une formation par son ID
  }
}
