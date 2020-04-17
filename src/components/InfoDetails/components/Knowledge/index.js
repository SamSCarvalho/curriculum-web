import React from 'react';

import { Knowledge as KnowledgeJson } from '../../../../data/dataCurriculum.json';

const Knowledge = () => (
  <div>
    <p>{KnowledgeJson.title}</p>
  </div>
);

export default Knowledge;