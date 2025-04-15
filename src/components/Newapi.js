import { render } from '@testing-library/react'
import React, { useRef, useState } from 'react'

const Newapi = () => {
  const [renderData, setRenderdata] = useState([
    {
      "id": 1,
      "name": "Alice",
      "role": "Developer"
    },
    {
      "id": 2,
      "name": "Bob",
      "role": "Designer"
    },
    {
      "id": 3,
      "name": "Charlie",
      "role": "Product Manager"
    }
  ])

  const people = [
    'Creola Katherine Johnson: mathematician',
    'Mario José Molina-Pasquel Henríquez: chemist',
    'Mohammad Abdus Salam: physicist',
    'Percy Lavon Julian: chemist',
    'Subrahmanyan Chandrasekhar: astrophysicist'
  ];

  const people1 = [{
    id: 0,
    name: 'Creola Katherine Johnson',
    profession: 'mathematician',
  }, {
    id: 1,
    name: 'Mario José Molina-Pasquel Henríquez',
    profession: 'chemist',
  }, {
    id: 2,
    name: 'Mohammad Abdus Salam',
    profession: 'physicist',
  }, {
    id: 3,
    name: 'Percy Lavon Julian',
    profession: 'chemist',  
  }, {
    id: 4,
    name: 'Subrahmanyan Chandrasekhar',
    profession: 'astrophysicist',
  }];

  const numbers = [5,15,25]
  let total = 0;
 
  const numberlist1 = numbers.map((numberlist) => {
       
    total = total + numberlist;
    
   return numberlist *2
  
 })
 console.log(total)
 console.log(numberlist1)
 

  const array1 = [1, 4, 9, 16];
  const map1 = array1.map((x) => x * 2);

  console.log(map1);

  const reverseData = () => {
    setRenderdata([...renderData].reverse())
  }
  
    const [advice, setAdvice] = useState(null);
    async function getAdvice() {
        const res = await fetch('https://api.restful-api.dev/objects/7')
        const data = await res.json();
    setAdvice(data)
    }
  return (
    <>
      <div>
        {advice ? (
          <ul>
            <li key={advice.id}>{advice.name}</li> {/* Directly use advice object */}
          </ul>
        ) : (
          <p>Click the button to get advice</p>
        )}
      </div>
      <button onClick={getAdvice}>advice</button>

      {renderData.map((renderlist, index) => (
        <ul>
          <li> key={renderlist.id} {renderlist.name}</li>
        </ul>
      ))}
      <button onClick={reverseData}>dats</button>
      {people.map((peoplelist) => {
        return  <li>{peoplelist}</li>
      })}

      {people1.map((peoplelist1) => {
      return  <ul>
          <li>{peoplelist1.id} {peoplelist1.name}</li>
        </ul>
        // return `Hey my name is ${peoplelist1.name} and my profession is ${peoplelist1.profession}.   ` 
      })}

    {people1.filter((peoplelist2) => {
      if(peoplelist2.profession == "chemist") {
        return <p>{peoplelist2}</p>
      }
    
        // return `Hey my name is ${peoplelist1.name} and my profession is ${peoplelist1.profession}.   ` 
      })}

     
    </>
  )
}

export default Newapi