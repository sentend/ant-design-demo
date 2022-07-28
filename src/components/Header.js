import { PageHeader, Divider, Row, Col } from 'antd'

import TableData from './TableData'

const Header = () => {
	return (
		<>
			<PageHeader title='AntDesign Demo' />
			<Divider />
			<Row>
				<Col xs={24} md={{ span: 12, offset: 6 }}>
					<TableData />
				</Col>
			</Row>
		</>
	)
}

export default Header
