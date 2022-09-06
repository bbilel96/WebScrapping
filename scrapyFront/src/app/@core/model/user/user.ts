import {required} from '@rxweb/reactive-form-validators';

export class User {
  @required()
  private _nom: string;
  @required()
  private _password: string;
  constructor(nom?: string, password?: string) {
    this._nom = nom;
    this._password = password;
  }
  get nom(): string {
    return this._nom;
  }
  @required()
  set nom(value: string) {
    this._nom = value;
  }

  get password(): string {
    return this._password;
  }
  @required()
  set password(value: string) {
    this._password = value;
  }
}
