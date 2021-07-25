import React from 'react';
import styled from "@emotion/styled";
import fitness_1 from "../../../assets/images/fitness_1.svg"

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0.5rem;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  width: 23%;
  height: 300px;
`;
const CardImage = styled.img`
  width: 130px;
`;
const CardTitle = styled.p`
  font-size: 1.5rem;
  color: black;
`;
const CardDesc = styled.p`
  font-size: 0.8rem;
  color: #ccc;
  text-align: center;
`;
const InfoCard = ({datos}) => {
  return (
    <Card>
      <CardImage src={fitness_1}/>
      <CardTitle>{datos.nombre}</CardTitle>
      <CardDesc>{datos.descripcion}</CardDesc>
    </Card>
  );
};

export default InfoCard;