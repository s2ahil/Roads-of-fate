import { Grass } from "./Grass";

// import { rows } from "../metadata";
import useStore from "../stores/map";
import { Row } from "./Row";

export function Map() {
  const rows = useStore((state) => state.rows);

  return (
    <>
      <Grass rowIndex={0}> </Grass>
      <Grass rowIndex={-1}> </Grass>
      <Grass rowIndex={-2}> </Grass>
      <Grass rowIndex={-3}> </Grass>
      <Grass rowIndex={-4}> </Grass>
      <Grass rowIndex={-5}> </Grass>
      <Grass rowIndex={-6}> </Grass>
      <Grass rowIndex={-7}> </Grass>
      <Grass rowIndex={-8}> </Grass>
      <Grass rowIndex={-9}> </Grass>
      <Grass rowIndex={-10}> </Grass>

      {rows.map((rowData, index) => (
        <Row key={index} rowIndex={index + 1} rowData={rowData}></Row>
      ))}
    </>
  );
}
