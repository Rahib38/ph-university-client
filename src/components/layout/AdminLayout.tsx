import { Outlet } from "react-router-dom";

export default function AdminLayout() {
  return (
    <div>
      <h1>This is nav</h1>
      <h1>This is admin layout</h1>
      <Outlet/>
    </div>
  )
}
