import React, { FC } from 'react';

import { Props } from './layout-types';

import { Layout } from 'antd';
import { Nav } from '../../components';

const { Content } = Layout;
const OurLayout: FC<Props> = ({ children }) => (
	<>
		<Layout style={{ minHeight: '100vh' }}>
			<Nav />
			<Content style={{ padding: 20 }}>{children}</Content>
		</Layout>
	</>
);

export default OurLayout;
