import axios from "axios";

var options = {
    method: 'GET',
    url: 'https://quran_asr1.p.rapidapi.com/',
    headers: {
      'x-rapidapi-host': 'quran_asr1.p.rapidapi.com',
      'x-rapidapi-key': 'e95607ac52msh7aa7054c5b558dap19d4d0jsn779984fc134a'
    }
  };
  
  axios.request(options).then(function (response) {
      console.log(response.data);
  }).catch(function (error) {
      console.error(error);
  });