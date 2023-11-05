
export const exerciseOptions={
  method: 'GET',

  headers: {
    'X-RapidAPI-Key': 'de04421f64msh09fed6dbcda22a5p17558djsnda2c5a72ba2c',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
  };
    

  export const youtubeOptions = {
    method: 'GET',
   
    headers: {
      'X-RapidAPI-Key': 'de04421f64msh09fed6dbcda22a5p17558djsnda2c5a72ba2c',
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
  };
export const fetchData=async(url,options)=>{
  const response= await fetch (url,options)
  const data =await response.json();


  return data
}