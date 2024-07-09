
import TopLay from "../../../components/User/Layouts/TopLay"
import Jumbotron from "../../../components/User/Dashboard/Jumbotron"
import List from "../../../components/User/Dashboard/List"
import Teacher from "../../../components/User/Dashboard/Teacher"
import { Footer } from "../../../components/User/Dashboard/Footer"
import Comment from "../../../components/User/Dashboard/comment"
import JumbotronAgain from "../../../components/User/Gallery/Jumbotron"

const Dashboard = () => {
  return (
    <>
    <div className="relative w-full h-auto bg-[#ECF4FF]">
      <TopLay/>
      <Jumbotron/>
      <List/>
      <Teacher/>
      <JumbotronAgain/>
      <Comment/>
      <Footer/>
    </div>
    </>
  )
}

export default Dashboard
