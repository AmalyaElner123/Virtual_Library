import axios from 'axios'

export class CountryService {

    getCountries () {
        return fetch('data/countries.json').then(res => res.json())
            .then(d => d.data);
    }
}
    
    
 
// (async () => {
//     let data_local;
  
//     const getData = async () => {
//       const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
//       const data = await response.json();
//       dataGlobal = data;
//       return data;
//     };
  
//     await getData();
//     console.log(data_local);
  
//     // your code goes here...
//   })();