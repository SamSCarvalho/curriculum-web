import React from 'react';

import {
  CotainerCenter,
  TextHidden,
} from '../styles';
import Colors from '../../../../constants/colors';
import { ReactComponent as Icon } from '../../../../res/icons/delay.svg';

const CommingSoon = () => (
  <CotainerCenter>
    <Icon  width="10em" height="10em" fill={Colors.background}/>
    <TextHidden>comming soon</TextHidden>
  </CotainerCenter>
);

export default CommingSoon;