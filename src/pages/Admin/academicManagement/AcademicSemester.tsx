
import React from 'react'
import { useGetAllSemestersQuery } from '../../../redux/features/admin/academicManagement.api'
import { Table, TableColumnsType, TableProps } from 'antd';
import { TAcademicSemester } from '../../../types/academicManagementType';
// interface DataType {
//   key: React.Key;
//   name: string;
//   age: number;
//   address: string;
// }
export type TTableData=Pick<TAcademicSemester,"_id"|"name"|"year"|"startMonth"|"endMonth" >
const AcademicSemester = () => {
  const {data:semesterData}=useGetAllSemestersQuery([{name:"year",value:'2025'}])
  const tableData=semesterData?.data?.map(({_id,name,startMonth,endMonth,year})=>({
    _id,name,startMonth,endMonth,year
  }))
  const columns: TableColumnsType<TTableData> = [
    {
      title: 'Name',
      dataIndex: 'name',
      showSorterTooltip: { target: 'full-header' },
      filters: [
        {
          text: 'Joe',
          value: 'Joe',
        },
        {
          text: 'Jim',
          value: 'Jim',
        },
        {
          text: 'Submenu',
          value: 'Submenu',
          children: [
            {
              text: 'Green',
              value: 'Green',
            },
            {
              text: 'Black',
              value: 'Black',
            },
          ],
        },
      ],
      // specify the condition of filtering result
      // here is that finding the name started with `value`
      onFilter: (value, record) => record.name.indexOf(value as string) === 0,
      sorter: (a, b) => a.name.length - b.name.length,
      sortDirections: ['descend'],
    },
    {
      title: 'Year',
      dataIndex: 'year',

    },
    {
      title: 'Start Month',
      dataIndex: 'startMonth',
      
    },
    {
      title: 'End Month',
      dataIndex: 'endMonth',
      
    },
  ];
  
  // const data = [
  //   {
  //     key: '1',
  //     name: 'John Brown',
  //     age: 32,
  //     address: 'New York No. 1 Lake Park',
  //   },
  //   {
  //     key: '2',
  //     name: 'Jim Green',
  //     age: 42,
  //     address: 'London No. 1 Lake Park',
  //   },
  //   {
  //     key: '3',
  //     name: 'Joe Black',
  //     age: 32,
  //     address: 'Sydney No. 1 Lake Park',
  //   },
  //   {
  //     key: '4',
  //     name: 'Jim Red',
  //     age: 32,
  //     address: 'London No. 2 Lake Park',
  //   },
  // ];
  
  const onChange: TableProps<TTableData>['onChange'] = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
  };
  
  

  return (
    <Table
    columns={columns}
    dataSource={tableData}
    onChange={onChange}
    showSorterTooltip={{ target: 'sorter-icon' }}
  />
  )
}

export default AcademicSemester

