import style from "styled-components";

const theme = {
  COLOUR: {
    ORANGE: "#ff9e38",
    DARK_GREY: "#848484",
    LIGHT_GREY: "#f1f1f1",
    DARK_BG: "#242828"
  }
};
export const ButtonContainer = style.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
`;
export const PaginateContainer = style.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;
export const Table = style.table`
  width: 100%;
  border: solid 1px #dddddd;
  border-collapse: collapse;
  margin: 40px 0 10px 0;
	max-height: 600px;
	overflow-y: auto;
`;

export const Heading = style.tr`
  background: ${() => theme.COLOUR.LIGHT_GREY};
  margin: 10px 20px;
  height:50px;
`;

export const Row = style.tr`
  cursor: pointer
  display:flex;
`;

export const Th = style.th`
  font-size: 16px;
  text-align: left;
  border: solid 1px gainsboro;
  width: 145px;
`;

export const Title = style.td`
  padding: 10px 20px;
`;

export const Td = style.td`
  padding: 10px 20px;
  border: solid 1px gainsboro;
  font-size: 14px;
`;

export const NoDataTd = style.td`
  padding: 10px 20px;
  border: solid 1px gainsboro;
  font-size: 20px;
  text-align:center;
  height:90px;
`;

export const DropdownContainers = style.div`
  display: flex;
  margin-top: 20px;
`;

export const Search = style.input`
  border: solid 1px ${() => theme.COLOUR.LIGHT_GREY};
  font-size: 16px;
  outline: none;
  padding: 10px;
  border-radius: 5px;
`;

export const Select = style.select`
  border: solid 1px ${() => theme.COLOUR.LIGHT_GREY};
  font-size: 16px;
  outline: none;
  padding: 10px;
  border-radius: 5px;
  margin-left:10px;
  width:120px;
`;