import { makeAutoObservable } from "mobx";
import { getCountryByName, CountryInfo } from '../api/apiService';

class Autocomplete {
  hints: CountryInfo[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  getCountryByName(countryName: string): void {
    getCountryByName(countryName).then(data => {
      this.hints = [...data];
    });
  }
}

export default new Autocomplete();