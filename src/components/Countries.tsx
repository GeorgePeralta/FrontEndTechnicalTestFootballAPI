import { useState, useEffect } from 'react'
import axios from 'axios'


export default  function Countries()  {
  const [data, setData] = useState([]); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const options = {
          method: 'GET',
          url: 'https://api-football-v1.p.rapidapi.com/v3/countries',
          headers: {
            'X-RapidAPI-Key': 'b76b3ed92amshd30bc037766d5d9p1d4db6jsn917a30b8c0b7',
            'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com',
          },
        };
        const response = await axios.request(options)
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);  

  return (
    <div className='paises-container'>       
      {data ? (
      <div>
        {data.response.map((country) => (
          <div key={country.name} className='paises-row'>
            <h3 className='paises-name'>{country.name}</h3>
            <img style={{ width: '42px', borderRadius: '50%' }} src={country.flag} alt={country.name} />
          </div>
        ))}
      </div>
    ) : (
      <p>Carregando...</p>
    )}
    </div>
  )
}
