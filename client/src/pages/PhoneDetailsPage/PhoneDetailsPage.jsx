import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import PhoneDetailsCard from '../../PhoneDetailsCard/PhoneDetailsCard';

function PhoneDetailsPage() {
    const [isLoading, setIsLoading] = useState(false);
    const [phone, setPhone] = useState({});

    const phoneId = useParams()
  
    const fetchPhoneData = () => {
      setIsLoading(true)
  
      axios.get(`${process.env.REACT_APP_SERVER_URL}/phones/${phoneId.phoneId}`)
      .then((response) => {
        setPhone(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
      setIsLoading(false);
    }
  
    useEffect(() => {
      fetchPhoneData();
    }, []);
  
    if (!phone){
      return (
        <section>
          <h1>Welcome to the Phone Cave</h1>
          <article>
            <h2>Sorry, we don't have any phones in stock... Come back later!</h2>
          </article>
        </section>
      )
    }

  return (
    <PhoneDetailsCard phone={phone}/>
  )
}

export default PhoneDetailsPage