import React from 'react';

import { Portfolio as PortfolioJson } from '../../../../data/dataCurriculum.json';

const Portfolio = () => (
  <div>
    <p>{PortfolioJson.title}</p>
  </div>
);

export default Portfolio;