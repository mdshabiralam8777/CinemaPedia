import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';






@Injectable({
  providedIn: 'root'
})
export class TransService {

   
  constructor(private http: HttpClient) { }

 getdata(){
  return this.http.get('http://localhost:3000/actors');
 }
 getDatas(id){
   return this.http.get(`http://localhost:3000/actors/${id}`);
 }



 gettollylist(){
  return this.http.get('http://localhost:3000/tolly');
 }
 getlist(id){
  return this.http.get(`http://localhost:3000/tolly/${id}`);
}

getdirlist(){
  return this.http.get('http://localhost:3000/dirlist');
 }
 getlistdirectors(id){
  return this.http.get(`http://localhost:3000/dirlist/${id}`);
}

getmusic(){
  return this.http.get('http://localhost:3000/music-ta');
 }
 getmusiclist(id){
  return this.http.get(`http://localhost:3000/music-ta/${id}`);

}


getherota(){
  return this.http.get('http://localhost:3000/hero');
 }
 getherotalist(id){
  return this.http.get(`http://localhost:3000/hero/${id}`);

}
getherotelugu(){
  return this.http.get('http://localhost:3000/hero-tolly');
 }
 getherotelugulist(id){
  return this.http.get(`http://localhost:3000/hero-tolly/${id}`);

}


getmovietelugu(){
  return this.http.get('http://localhost:3000/tolly');
 }
 getmovietelugulist(id){
  return this.http.get(`http://localhost:3000/tolly/${id}`);

}

getmusictelugu(){
  return this.http.get('http://localhost:3000/music-tolly');
 }
 getmusictelugulist(id){
  return this.http.get(`http://localhost:3000/music-tolly/${id}`);

}

getdirtolly(){
  return this.http.get('http://localhost:3000/dir-tolly');
 }
 getdirlisttolly(id){
  return this.http.get(`http://localhost:3000/dir-tolly/${id}`);
}



getheromalayalam(){
  return this.http.get('http://localhost:3000/hero-molly');
 }
 getheromalayalamlist(id){
  return this.http.get(`http://localhost:3000/hero-molly/${id}`);

}


getmoviemalayalam(){
  return this.http.get('http://localhost:3000/movie-molly');
 }
 getmoviemalayalamlist(id){
  return this.http.get(`http://localhost:3000/movie-molly/${id}`);

}

getmusicmalayalam(){
  return this.http.get('http://localhost:3000/music-molly');
 }
 getmusicmalayalamlist(id){
  return this.http.get(`http://localhost:3000/music-molly/${id}`);

}

getdirmolly(){
  return this.http.get('http://localhost:3000/dir-molly');
 }
 getdirlistmolly(id){
  return this.http.get(`http://localhost:3000/dir-molly/${id}`);
}

getherobolly(){
  return this.http.get('http://localhost:3000/hero-bolly');
 }
 getherobollylist(id){
  return this.http.get(`http://localhost:3000/hero-bolly/${id}`);

}


getmoviebolly(){
  return this.http.get('http://localhost:3000/movie-bolly');
 }
 getmoviebollylist(id){
  return this.http.get(`http://localhost:3000/movie-bolly/${id}`);

}

getmusicbolly(){
  return this.http.get('http://localhost:3000/music-bolly');
 }
 getmusicbollylist(id){
  return this.http.get(`http://localhost:3000/music-bolly/${id}`);

}

getdirbolly(){
  return this.http.get('http://localhost:3000/dir-bolly');
 }
 getdirlistbolly(id){
  return this.http.get(`http://localhost:3000/dir-bolly/${id}`);
}

}
