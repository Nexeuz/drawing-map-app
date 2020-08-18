import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';

export interface UserState {
  id: string;
  name: string;
  email: string;
  latitude?: number | null;
  longitude?: number | null;
}
export function createInitialState(): UserState {
  return {
    id: '',
    name: '',
    email: '',
    latitude: null,
    longitude: null
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'user' })
export class UserStore extends Store<UserState> {

  constructor() {
    super(createInitialState());
  }

}

