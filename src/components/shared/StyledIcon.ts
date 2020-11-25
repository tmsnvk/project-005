import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type TIcon = {
  dimensions: string;
}

const StyledIcon = styled(FontAwesomeIcon)<TIcon>`
  display: inline-block;
  color: ${({ theme }) => theme.color.primaryDark};
  font-size: ${({ dimensions }) => dimensions === "large" ? ({ theme }) => theme.fontSize.xLarge : ({ theme }) => theme.fontSize.medium};
  margin: 0 0.5rem 0 0.5rem;
`;

export default StyledIcon;