import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { MoviesModel } from '../movies.model';
import { Message } from './message/message.model';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {

  name: string = 'Name';
  type: string = 'Type';
  rating: number = 0;
  year: any = 0;

  listOfMessage: Message[] = [
    new Message(
    "mezrioui Hakim", 
    "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page"
    ),
    new Message(
    "mezrioui Hakim", 
    "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page"
    ),
    new Message(
    "mezrioui Hakim", 
    "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page"
    ),
    new Message(
    "mezrioui Hakim", 
    "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page"
    ),
    new Message(
    "mezrioui Hakim", 
    "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page"
    ),
    new Message(
    "mezrioui Hakim", 
    "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page"
    ),
  ]

  constructor() { }

  sideBarVisible= new EventEmitter<boolean>();
  messgaePage = new BehaviorSubject<boolean>(false);
  messageSubmited = new BehaviorSubject<Message>(new Message('', ''));
  emitDataCard = new Subject<any>();
}
