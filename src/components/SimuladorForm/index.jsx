/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { useMutation } from "@tanstack/react-query";
import {
  AddButton,
  ButtonSimular,
  ErrorText,
  Form,
  FormGroup,
  FormGroupContainer,
  FormInput,
  RemoveButton,
} from "./style";
import Label from "../../shared/Label";
import simuladorSchema from "../../data/schemas";
import Spinner from "../Spinner";
import { addSimulacion } from "../../app/api/simulacion";

const SimuladorForm = ({ graphRef, onCreateNode, onDeleteNode }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    getValues,
  } = useForm({
    resolver: yupResolver(simuladorSchema),
  });

  const { mutate } = useMutation(addSimulacion);

  const onSubmit = (data) => {
    const { edges } = graphRef.current.props;

    const tempObject = {};

    edges.map((edge) => {
      const edgeIdSource = Number(edge.source.replace("P", ""));
      const edgeIdTarget = Number(edge.target.replace("SP", ""));

      if (!tempObject[edgeIdSource]) {
        tempObject[edgeIdSource] = [];
      }

      tempObject[edgeIdSource].push(edgeIdTarget);

      return null;
    });

    const finalArray = Object.entries(tempObject).map(([_, value]) => {
      return value;
    });

    mutate({
      values: {
        ...data,
        palaToStock: finalArray,
        simTime: Number(data.simTime) * 60,
      },
    });
    toast.success(
      "Simulación creada con éxito. Dentro de unos minutos se verá reflejada en los registros.",
    );
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormGroupContainer>
        <FormGroup>
          <Label htmlFor="camiones">Camiones</Label>
          <FormGroup display="flex" justifyContent="center">
            <RemoveButton
              type="button"
              disabled={
                !getValues("camiones") || Number(getValues("camiones")) === 0
              }
              onClick={() => {
                setValue("camiones", Number(getValues("camiones")) - 1);
              }}
            >
              -
            </RemoveButton>
            <FormInput
              hasError={errors.camiones}
              {...register("camiones")}
              defaultValue={1}
              type="number"
              id="camiones"
              width="100%"
            />
            <AddButton
              type="button"
              onClick={() => {
                setValue("camiones", Number(getValues("camiones")) + 1);
              }}
            >
              +
            </AddButton>
          </FormGroup>
          {errors.camiones && <ErrorText>{errors.camiones?.message}</ErrorText>}
        </FormGroup>
        <FormGroup>
          <Label htmlFor="palas">Palas</Label>
          <FormGroup display="flex" justifyContent="center">
            <RemoveButton
              type="button"
              disabled={!getValues("palas") || Number(getValues("palas")) === 0}
              onClick={() => {
                onDeleteNode(`P${Number(getValues("palas")) - 1}`);
                setValue("palas", Number(getValues("palas")) - 1);
              }}
            >
              -
            </RemoveButton>
            <FormInput
              hasError={errors.palas}
              {...register("palas")}
              defaultValue={0}
              type="number"
              id="palas"
              readOnly
              width="30%"
            />
            <AddButton
              type="button"
              onClick={() => {
                onCreateNode("Pala", getValues("palas"));
                setValue("palas", Number(getValues("palas")) + 1);
              }}
            >
              +
            </AddButton>
          </FormGroup>
          {errors.palas && <ErrorText>{errors.palas?.message}</ErrorText>}
        </FormGroup>
        <FormGroup>
          <Label htmlFor="stock_piles">Stock Piles</Label>
          <FormGroup display="flex" justifyContent="center">
            <RemoveButton
              type="button"
              disabled={
                !getValues("stock_piles") ||
                Number(getValues("stock_piles")) === 0
              }
              onClick={() => {
                onDeleteNode(`SP${getValues("stock_piles")}`);
                setValue("stock_piles", Number(getValues("stock_piles")) - 1);
              }}
            >
              -
            </RemoveButton>
            <FormInput
              hasError={errors.stock_piles}
              {...register("stock_piles")}
              defaultValue={0}
              type="number"
              id="stock_piles"
              readOnly
              width="30%"
            />
            <AddButton
              type="button"
              onClick={() => {
                onCreateNode(
                  "Stock Pile",
                  Number(getValues("stock_piles")) + 1,
                );
                setValue("stock_piles", Number(getValues("stock_piles")) + 1);
              }}
            >
              +
            </AddButton>
          </FormGroup>
          {errors.stock_piles && (
            <ErrorText>{errors.stock_piles?.message}</ErrorText>
          )}
        </FormGroup>
        <FormGroup>
          <Label htmlFor="simTime">Tiempo (min)</Label>
          <FormGroup display="flex" justifyContent="center">
            <RemoveButton
              type="button"
              disabled={
                !getValues("simTime") || Number(getValues("simTime")) === 0
              }
              onClick={() => {
                setValue("simTime", Number(getValues("simTime")) - 1);
              }}
            >
              -
            </RemoveButton>
            <FormInput
              hasError={errors.simTime}
              {...register("simTime")}
              defaultValue={30}
              type="number"
              id="simTime"
              width="100%"
            />
            <AddButton
              type="button"
              onClick={() => {
                setValue("simTime", Number(getValues("simTime")) + 1);
              }}
            >
              +
            </AddButton>
          </FormGroup>
          {errors.simTime && <ErrorText>{errors.simTime?.message}</ErrorText>}
        </FormGroup>
      </FormGroupContainer>
      <ButtonSimular type="submit">Simular</ButtonSimular>
    </Form>
  );
};

export default SimuladorForm;
