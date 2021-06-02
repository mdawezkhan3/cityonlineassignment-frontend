import * as React from "react";
import { Route } from 'react-router-dom';
import Homescreen from '../homescreen/homescreen';

export default [
  <Route exact path="/homescreen" component={Homescreen} />
];