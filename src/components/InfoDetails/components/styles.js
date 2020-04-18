import styled from 'styled-components';

import Sizes from '../../../constants/sizes';
import Colors from '../../../constants/colors';

export const Container = styled.div`
  width: 100%;
  text-align: left;
`;

export const CotainerCenter = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 10px;
`;

export const TextHidden = styled.p`
  font-size: 1em;
  color: ${Colors.background};
  font-weight: bold;
`;

export const Text = styled.p`
  margin: 6px 0px 6px 0px;
  font-size: ${Sizes.normal};
`;

export const TextInline = styled.span`
  font-size: ${Sizes.normal};
  font-weight: 100;
  color: ${Colors.second};
`;

export const Title = styled.h4`
  font-size: ${Sizes.big};
  margin: 10px 0px 15px 0px;
`;

export const TextColor = styled(Text)`
  color: ${props => props.color};
  font-weight: ${props => props.weight};
`;

export const TextBold = styled(Text)`
  font-weight: bold;
`;

export const DivBorderLeft = styled.div`
  margin: 10px 0px 40px 0px;
  border-left: 1px solid ${Colors.text};
  padding: 15px;
`;

export const TextWithIcon = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0px 20px 0px;
  & div {
    border: 2px solid ${Colors.third};
    margin-right: 10px;
    padding: 10px;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 15px;
    & svg {
      width: 20px;
      height: 20px;
      fill: ${props => props.color};
    }
  }
  & p {
    margin: 6px 0px 6px 0px;
    font-size: ${Sizes.normal};
  }
  & a {
    margin: 6px 0px 6px 0px;
    font-size: ${Sizes.normal};
    color: ${Colors.text};
  }
`;

export const MarginLeftDiv = styled.div`
  margin-left: ${props => props.margin}em;
`;