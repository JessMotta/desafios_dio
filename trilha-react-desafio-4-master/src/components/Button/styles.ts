import styled from "styled-components";

export const ButtonContainer = styled.button<{
	children?: React.ReactNode;
	disabled?: boolean;
	onClick?: React.MouseEventHandler<HTMLButtonElement>;
}>`
	width: 100%;
	height: 42px;
	background-color: #81259d;
	color: #fff;

	border: 1px solid #81259d;
	border-radius: 21px;

	&:hover {
		opacity: 0.6;
		cursor: pointer;
	}

	&:not(:disabled) {
		cursor: not-allowed;
		opacity: 0.3;
	}
`;
