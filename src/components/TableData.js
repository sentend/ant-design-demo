import { Table, Typography, Tag, Image } from 'antd'

const columns = [
	{
		title: 'Name',
		dataIndex: 'name',
		key: 'name',
		render: (text) => <Typography.Text copyable>{text}</Typography.Text>,
	},
	{
		title: 'Age',
		dataIndex: 'age',
		key: 'age',
		sorter: (a, b) => a.age - b.age,
		render: (text) => {
			let color = +text > 20 ? 'green' : 'orange'
			return (
				<Tag color={color} key={text}>
					{text}
				</Tag>
			)
		},
	},
	{
		title: 'Address',
		dataIndex: 'address',
		key: 'address',
	},
	{
		title: 'classification',
		dataIndex: 'classification',
		key: 'classification',
	},
	{
		title: 'Picture',
		dataIndex: 'img',
		key: 'img',
		render: (img) => <Image src={img} alt='pokemon' width={150} />,
	},
]
const data = []

for (let i = 0; i < 20; i++) {
	data[i] = {
		key: `${i}`,
		name: `Aqwq${i + 143}`,
		age: i + 13,
		address: `broora${i + 13}`,
		classification: 'coca',
		img: 'https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
	}
}

const TableData = () => (
	<Table columns={columns} dataSource={data} size='middle' />
)

export default TableData
