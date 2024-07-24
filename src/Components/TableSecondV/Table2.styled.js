import styled from "styled-components";

// Стиль для контейнера таблицы
export const TableContainer = styled.div`
  /* overflow-x: auto; */
`;

// Стиль для таблицы
export const TableElement = styled.table`
  border: 1px solid rgba(34, 36, 38, 0.15);
  width: 100%;
  -webkit-box-shadow: none;
  box-shadow: none;
  border-radius: 4.00000006px;
  text-align: left;
  border-collapse: separate;
  border-spacing: 0;

  @media (min-width: 768px) {
    /* display: table; */
  }
`;

// Стиль для заголовка таблицы
export const TableHeader = styled.thead`
  @media (min-width: 768px) {
    /* display: table-header-group; */
  }
`;

// Стиль для тела таблицы
export const TableBody = styled.tbody`
  @media (min-width: 768px) {
    /* display: table-row-group; */
  }
`;

// Стиль для ячеек заголовков таблицы
export const TableHeaderCell = styled.th`
  padding: 1em 0.75em;
  font-weight: 700;
  border-bottom: 1px solid rgba(34, 36, 38, 0.15);
  
  @media (min-width: 768px) {
    padding: 0.25em 0.75em;
  }
`;


export const TableCellDay = styled.td`
  display: block;
  padding: 0.25em 0.75em;

  &:last-child {
    border-bottom: 1px solid rgba(34, 36, 38, 0.15);
  }

  @media (min-width: 768px) {
    display: table-cell;
    border-bottom: 1px solid rgba(34, 36, 38, 0.15);
    border-right: 1px solid rgba(34, 36, 38, 0.15);
    width: 100px;
    /* border-bottom: none; */
  }
`;

// Стиль для ячеек таблицы
export const TableCell = styled.td`
  display: block;
  padding: 0.25em 0.75em;

  &:last-child {
    border-bottom: 1px solid rgba(34, 36, 38, 0.15);
  }

  @media (min-width: 768px) {
    display: table-cell;
    border-bottom: 1px solid rgba(34, 36, 38, 0.15);
    border-right: 1px solid rgba(34, 36, 38, 0.15);
    width: 25%;
    /* border-bottom: none; */
  }
`;

// Стиль для строк тела таблицы
export const TableRow = styled.tr`
  &:hover {
    background: rgba(0, 0, 0, 0.05);
    color: rgba(0, 0, 0, 0.95);
  }

  @media (min-width: 768px) {
    /* display: table-row; */
  }
`;

// Стиль для заголовка профессора
export const ProfessorHeader = styled.tr`
  background-color: #ddd;

  @media (min-width: 768px) {
    display: table-row;
  }
`;
