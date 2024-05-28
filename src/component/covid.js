import React, { useEffect, useState } from 'react'
import './covid.css'


const Covid = () => {

  const [data, SetData] = useState([])

  const getCovidData = async () => {
    try {
      const response = await fetch("https://data.covid19india.org/data.json")
      const actualData = await response.json()
      console.log(actualData.statewise[0])
      // console.log(actualData)
      SetData(actualData.statewise[0])

      // console.log(response)
    }
    catch (error) {
      console.log(error)
    }

  }

  useEffect(() => {
    getCovidData()
  }, []);

  return (
    <>
      <section>
        <h1>🔴 LIVE</h1>
        <h2>COVID-19 CORONAVIRUS TRACKER</h2>

        <ul>
          <li className='card'>
            <div className="card__main">
              <div className='card__inner card__inner1 '>
                <p className='card_name'><span> OUR</span> COUNTRY</p>
                <p className='card_total card_small'>INDIA</p>
              </div>
              <div className='card__inner card__inner2'>
                <p className='card_name'><span> TOTAL</span> RECOVERED</p>
                <p className='card_total card_small'>{data.recovered}</p>
              </div>
              <div className='card__inner card__inner3'>
                <p className='card_name'><span> TOTAL</span> CONFIRMED</p>
                <p className='card_total card_small'>{data.confirmed}</p>
              </div>
              <div className='card__inner card__inner4'>
                <p className='card_name'><span> TOTAL</span> DEATH</p>
                <p className='card_total card_small'>{data.deaths}</p>
              </div>
              <div className='card__inner card__inner5'>
                <p className='card_name'><span> TOTAL</span> ACTIVE</p>
                <p className='card_total card_small'>{data.active}</p>
              </div>
              <div className='card__inner card__inner6'>
                <p className='card_name'><span> LAST</span> UPDATED</p>
                <p className='card_total card_small'>{data.lastupdatedtime}</p>
              </div>
            </div>

          </li>
        </ul>
      </section>
    </>
  )
}

export default Covid
