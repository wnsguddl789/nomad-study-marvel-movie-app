import styled from "@emotion/styled";

type Props = {
	children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
	return <Main>{children}</Main>;
};

const Main = styled.main`
	display: flex;
	flex-direction: column-reverse;

	min-height: calc(100vh - 20px);
	padding: 10px 20px;
`;

export default Layout;
