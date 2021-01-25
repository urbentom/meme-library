import { Row, Layout } from 'antd';

import React, { FC } from 'react';
import NavItem from './nav-styles';

const { Header } = Layout;
const Nav: FC = () => (
	<Header>
		<Row justify="end" style={{ width: '100%' }}>
			<Row justify="end" gutter={[24, 24]}>
				<NavItem span={8}>Home</NavItem>
				<NavItem span={8}>Hello</NavItem>
				<NavItem span={8}>World</NavItem>
			</Row>
		</Row>
	</Header>
);

export default Nav;
