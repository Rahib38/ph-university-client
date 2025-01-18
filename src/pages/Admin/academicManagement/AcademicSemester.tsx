
import React, { useState } from 'react'
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
  const [params,setParams]=useState([])
  const {data:semesterData}=useGetAllSemestersQuery(params)
  const tableData=semesterData?.data?.map(({_id,name,startMonth,endMonth,year})=>({
    key:_id,name,startMonth,endMonth,year
  }))
  const columns: TableColumnsType<TTableData> = [
    {
      title: 'Name',
      key:'name',
      dataIndex: 'name',
      showSorterTooltip: { target: 'full-header' },
      filters: [
        {
          text: 'Autumn',
          value: 'Autumn',
        },
        {
          text: 'Summer',
          value: 'Summer',
        },
        {
          text: 'Fall',
          value: 'Fall',
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
      key:"year",
      dataIndex: 'year',
      filters: [
        {
          text: '2025',
          value: '2025',
        },
        {
          text: '2026',
          value: '2026',
        },
        {
          text: '2027',
          value: '2027',
        },
        {
          text: '2028',
          value: '2028',
        },
        {
          text: '2029',
          value: '2029',
        },
        
      ],

    },
    {
      title: 'Start Month',
      key:"startMonth",
      dataIndex: 'startMonth',
      
    },
    {
      title: 'End Month',
      key:"endMonth",
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
    if(extra.action==="filter"
    ){
      const queryParams=[]
      filters.name?.forEach(item=>
        queryParams.push({name:"name",value:item})
      )
      filters.year?.forEach(item=>
        queryParams.push({name:"year",value:item})
      )
      setParams(queryParams)
    }
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

