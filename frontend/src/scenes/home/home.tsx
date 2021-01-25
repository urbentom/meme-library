import React, { FC } from 'react';
import { Button, Card, Col, Row, Typography } from 'antd';
const { Title } = Typography;
const Home: FC = () => (
	<>
		<Title>Home Screen</Title>
		<Row gutter={[24, 24]}>
			<Col span={8}>
				<Card title="Scene" extra={[<Button>Lets go</Button>]}></Card>
			</Col>
			<Col span={8}>
				<Card title="Scene"></Card>
			</Col>
			<Col span={8}>
				<Card title="Scene"></Card>
			</Col>
		</Row>
	</>
);

export default Home;
