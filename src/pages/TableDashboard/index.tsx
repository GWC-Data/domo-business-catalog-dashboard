import DashBoard from "../TableDashboard/component/Dashboard";
import Card from "../TableDashboard/component/Card";

const TableDashboard = () => {
  return (
    <div className="bg-[#f2f2f2]">
      <div className="max-w-screen-lg mx-auto px-5  my-0">
        <Card />
        <DashBoard />
      </div>
    </div>
  );
};
export default TableDashboard;
