import ProgressBarCustom from './ProgressBarCustom';
import { CiCircleCheck } from 'react-icons/ci';
import { Cell, Legend, Pie, PieChart } from 'recharts';
import { Tooltip } from 'antd';
import { PiWarningCircleThin } from 'react-icons/pi';
import energy from '../../assets/energy.svg';
function UserWhy({ user }) {
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#A28EF6'];

  if (!user) {
    return (
      <div className="text-center text-gray-600">No user data available.</div>
    );
  }
  return (
  
  );
}

export default UserWhy;
