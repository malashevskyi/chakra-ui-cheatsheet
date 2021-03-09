import { colors } from '../data';
import Color from './Color';
import Row from './Row';

const Colors = () => (
  colors.map((row) => (
    <Row key={row[0][0] + row[0][1]}>
      {row.map(([colorName, colorHash]) => (
        <Color
          key={colorHash}
          colorName={colorName}
          colorHash={colorHash} />
      ))}
    </Row>
  ))
);

export default Colors;
