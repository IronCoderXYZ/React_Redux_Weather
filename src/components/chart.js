// NPM Imports
import _ from 'lodash';
import React from 'react';
import {
  Sparklines,
  SparklinesLine,
  SparklinesReferenceLine
} from 'react-sparklines';

const styles = {
  width: 280,
  height: 150
};

const average = data => _.round(_.sum(data) / data.length);

export default props => {
  return (
    <div style={styles}>
      <Sparklines data={props.data}>
        <SparklinesLine color={props.color} />
        <SparklinesReferenceLine type="avg" />
      </Sparklines>
      <div>{`${average(props.data)} ${props.units}`}</div>
    </div>
  );
};
