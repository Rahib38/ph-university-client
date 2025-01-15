import { Layout, Menu } from "antd";
import adminPaths from "../../routes/admin.routes";
import { facultyPaths } from "../../routes/faculty.routes";
import { sidebarItemsGenerators } from "../../utils/sidebarItemsGenerator";

const { Sider } = Layout;

const userRole = {
  ADMIN: "admin",
  FACULTY: "faculty",
  STUDENT: "student",
};
export default function Sidebar() {
  const role = "faculty";
  let sidebarItems;

  switch (role) {
    case userRole.ADMIN:
      sidebarItems = sidebarItemsGenerators(adminPaths, userRole.ADMIN);
      break;
    case userRole.FACULTY:
      sidebarItems = sidebarItemsGenerators(facultyPaths, userRole.FACULTY);
      break;
    case userRole.STUDENT:
      sidebarItems = sidebarItemsGenerators(studentPaths, userRole.STUDENT);
      break;
    default:
      break;
  }

  return (
    <div>
      <Sider
       style={{height:'100vh'}}
        breakpoint="lg"
        collapsedWidth="0"
        //   onBreakpoint={(broken) => {
        //     console.log(broken);
        //   }}
        //   onCollapse={(collapsed, type) => {
        //     console.log(collapsed, type);
        //   }}
      >
        <div
          style={{
            color: "white",
            height: "4rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1> PH University</h1>
        </div>
 
          <Menu
            
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["4"]}
            items={sidebarItems}
          />
        
      </Sider>
    </div>
  );
}
