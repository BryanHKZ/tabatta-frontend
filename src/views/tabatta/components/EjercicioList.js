import React, { useState } from "react";
import styled from "@emotion/styled";
import { Button } from "antd";
import exampleData from "../../../utils/data.json";
import EjercicioItem from "./EjercicioItem";
import NuevoEjercicioModal from "./NuevoEjercicioModal";
import { PlusCircleOutlined } from "@ant-design/icons";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  width: 75%;
  background: #fafafa;
`;

const TitleDiv = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  margin: 0.5rem;
`;

const Title = styled.h1`
  font-weight: 700;
  font-size: 1.6rem;
  color: #65737e;
`;

const TabattaInfo = styled.div`
  display: flex;
  text-align: left;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  background: white;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  background-image: linear-gradient(to top, #e6e9f0 0%, #eef1f5 100%);
`;

const TabattaExercises = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  padding: 1rem 0;
  align-items: center;
`;

const TabattaInfoContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;

const InfoLabel = styled.span`
  margin-right: 3px;
  color: #65737e;
`;

const EjerciciosContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
`;

const EjercicioList = () => {
  const [exerciseList, setExerciseList] = useState(
    exampleData.ejercicio.filter((r) => r.routineId === 2)
  );
  const [showNewExercise, setShowNewExercise] = useState(false);

  const handleNewExercise = () => {
    setShowNewExercise(true);
  };

  return (
    <Container>
      <TitleDiv>
        <Title> Rutina de Patas </Title>
      </TitleDiv>
      <TabattaInfo>
        <TabattaInfoContent>
          <InfoLabel>
            <strong>Duración Total:</strong> 5:01
          </InfoLabel>
          <InfoLabel>
            <strong>Ciclos:</strong> 8
          </InfoLabel>
          <InfoLabel>
            <strong>Sets:</strong> 2{" "}
          </InfoLabel>
          <InfoLabel>
            <strong>Descanso entre sets:</strong> 10 segs
          </InfoLabel>
        </TabattaInfoContent>
        <TabattaInfoContent>
          <Button className="action-button" size="small" type="default">
            Iniciar Tabatta
          </Button>
          <Button className="action-button" size="small" type="primary">
            Editar Tabatta
          </Button>
          <Button className="action-button" size="small" type="danger">
            Eliminar Tabatta
          </Button>
        </TabattaInfoContent>
      </TabattaInfo>

      <TabattaExercises>
        <Title>Lista de Ejercicios</Title>
        <EjerciciosContainer>
          {exerciseList.map((e) => (
            <EjercicioItem datos={e} key={e.id} />
          ))}
        </EjerciciosContainer>
        <Button
          className="button-ae"
          type="primary"
          icon={<PlusCircleOutlined />}
          onClick={handleNewExercise}
        >
          Agregar Ejercicio
        </Button>
        <NuevoEjercicioModal
          visible={showNewExercise}
          setShowNewExercise={setShowNewExercise}
        />
      </TabattaExercises>
    </Container>
  );
};

export default EjercicioList;
