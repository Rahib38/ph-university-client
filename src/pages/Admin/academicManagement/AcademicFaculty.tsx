import { Table, TableColumnsType } from "antd";
import { useGetAllAcademicFacultyQuery } from "../../../redux/features/admin/academicManagement.api";
export type TTableDatas = {
  name: string;
};
const AcademicFaculty = () => {
  const {
    data: semestersData,
    isLoading,
    isFetching,
  } = useGetAllAcademicFacultyQuery(undefined);
  const tableData = semestersData?.data?.map((item, id) => ({
    key: id,
    name: item?.name,
  }));
  const columns: TableColumnsType<TTableDatas> = [
    {
      title: "Faculty Name",
      key: "facultyName",
      dataIndex: "name",
      // showSorterTooltip: { target: "full-header" },

      // specify the condition of filtering result
      // here is that finding the name started with `value`
      // onFilter: (value, record) => record.name.indexOf(value as string) === 0,
      // sorter: (a, b) => a.name.length - b.name.length,
      // sortDirections: ["descend"],
    },
  ];
  // const onChange: TableProps<TTableData>["onChange"] = (
  //   pagination,
  //   filters,
  //   sorter,
  //   extra
  // ) => {
  //   console.log("params", pagination, filters, sorter, extra);
  // };

  if (isLoading) {
    return <p>Loading</p>;
  }
  return (
    <Table
      loading={isFetching}
      columns={columns}
      dataSource={tableData}
      // onChange={onChange}
      showSorterTooltip={{ target: "sorter-icon" }}
    />
  );
};

export default AcademicFaculty;
