import { Layout, Menu } from "antd";
import adminPaths from "../../routes/admin.routes";
import { facultyPaths } from "../../routes/faculty.routes";
import { sidebarItemsGenerators } from "../../utils/sidebarItemsGenerator";
import { useAppSelector } from "../../redux/features/hooks";
import { selectCurrentUser } from "../../redux/features/auth/authSlice";

const { Sider } = Layout;

const userRole = {
  ADMIN: "admin",
  FACULTY: "faculty",
  STUDENT: "student",
};
export default function Sidebar() {
  const user = useAppSelector(selectCurrentUser)
  let sidebarItems;

  switch (user!.role) {
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
       style={{height:'100%'}}
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
            style={{height:'100vh'}}
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["4"]}
            items={sidebarItems}
          />
        
      </Sider>
    </div>
  );
}
