import styled from "styled-components";
import {
  Form as FormikForm,
  Field as FormikField,
  ErrorMessage as FormikErrorMessage,
} from "formik";

export const Form = styled(FormikForm)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 10px;
  background-color: #f4f4f4;
  border: 1px solid #ddd;
  padding: 20px;
  border-radius: 5px;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
`;

export const Field = styled(FormikField)`
  width: 100%;
  padding: 10px;
  margin: 5px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
`;

export const FieldSelect = styled(FormikField)`
  width: 100%;
  padding: 10px;
  margin: 5px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
`;

export const WrapperDay = styled.div`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #e9e9e9;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 15px;
`;

export const AddButton = styled.button`
  background-color: #2196f3;
  color: #fff;
  padding: 10px 15px;
  margin-top: 20px;
  width: 150px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #1565c0;
  }
`;

export const RemoveButton = styled.button`
display: block;
  background-color: #e82c4d;
  color: #fff;
  padding: 5px 10px;
  margin: 10px 0;
  width: 150px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #b3243d;
  }
`;

export const AddLessonButton = styled.button`
  display: block;
  background-color: #2196f3;
  color: #fff;
  padding: 5px 10px;
  margin: 10px 0;
  width: 150px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #1565c0;
  }
`;

export const ErrorMessage = styled(FormikErrorMessage)`
  color: red;
  font-weight: 600;
  margin-bottom: 5px;
  font-size: 0.9rem;
`;
