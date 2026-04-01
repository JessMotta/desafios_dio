import styled, { css } from "styled-components";

export const ButtonContainer = styled.button`
	background: #565656;
	border: none;
	border-radius: 8px;
	position: relative;
	cursor: pointer;

	color: #ffffff;
	padding: 2px 12px;
	min-width: 120px;
	height: 30px;
	width: 100%;

	&:hover {
		opacity: 90%;
	}

	${({ variant }) =>
		variant !== "primary" &&
		css`
			min-width: 167px;
			height: 40px;

			background: #e4105d;
		`}
`;
