import React from "react";
import Loading from "../../components/Loading/Loading";
import axios from 'axios';
import { useEffect, useState } from "react";
import PhoneCard from "../../components/PhoneCard/PhoneCard";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";

function HomePage() {
  const [isLoading, setIsLoading] = useState(false);
  const [phones, setPhones] = useState([]);


  const fetchPhonesData = () => {
    setIsLoading(true)

    axios.get(`${process.env.REACT_APP_SERVER_URL}/phones/`)
    .then((response) => {
      setPhones(response.data);
    })
    .catch((error) => {
      console.log(error);
    })
    setIsLoading(false);
  }

  useEffect(() => {
    fetchPhonesData();
  }, []);

  if (phones.length === 0){
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
    <section>
      <h1>Welcome to the Phone Cave</h1>

      {isLoading ? (<Loading></Loading>) : (
         <MDBContainer fluid className="my-5 text-center">
          <MDBRow>
        {phones.map((phone, index) => {
          return (
            <PhoneCard key={index} phone={phone}/>
          )
        })}
        </MDBRow>
        </MDBContainer>
      )}
      

    </section>
  );
}

export default HomePage;