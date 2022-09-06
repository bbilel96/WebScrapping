import {Site} from '../site/site';

export class Product {
  name: string;
  checked: boolean;
  site: Site[];

  constructor(name?: string, site?: Site[]) {
    this.name = name;
    this.site = site;
  }

  }



