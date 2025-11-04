import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom"


const PrivateRouter = () => {

  const {email,password}=useSelector((state)=>state.yetkiSlice)
  console.log(email)
  return email === "imren" && password === "12345" ? (<Outlet/>) : <Navigate to="/login"/>
}

export default PrivateRouter