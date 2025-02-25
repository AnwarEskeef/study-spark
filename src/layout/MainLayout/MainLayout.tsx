//library
import { Outlet } from "react-router-dom"
//components
import { Header } from "../../components/common"
//style

const MainLayout = () => {
    return (
        <div className=" flex flex-col h-[100vh] bg-[#ececec]" >
            <Header />
            <div>
                <Outlet />
            </div>
        </div>
    )
}
export default MainLayout;