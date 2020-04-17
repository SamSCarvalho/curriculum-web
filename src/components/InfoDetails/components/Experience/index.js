import React from 'react';

import { Experience as ExperienceJson } from '../../../../data/dataCurriculum.json';

const Experience = () => (
  <div>
    <p>{ExperienceJson.title}</p>
  </div>
);

export default Experience;