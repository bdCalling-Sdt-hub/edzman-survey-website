// 'use client';
// import { Avatar, AvatarImage } from '@radix-ui/react-avatar';
// import { motion } from 'framer-motion';
// import Link from 'next/link';
// import { usePathname, useRouter } from 'next/navigation';
// import { useState, useEffect } from 'react';
// import { FaBars, FaTimes } from 'react-icons/fa';
// import { GiSettingsKnobs } from 'react-icons/gi';
// import {
//   Popover,
//   PopoverContent,
//   PopoverTrigger,
// } from '@/components/ui/popover';
// import { MdOutlineQuestionMark } from 'react-icons/md';
// import { VscSignOut } from 'react-icons/vsc';
// import { useProfileGetQuery } from '@/app/provider/redux/services/userApis';
// import { imageUrl } from '@/lib/utils';
// import Cookies from 'js-cookie';

// function Navbar() {
//   const path = usePathname();
//   const router = useRouter();
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [token, setToken] = useState('');

//   const { data: userData, isLoading } = useProfileGetQuery();
//   const navlinks = [
//     { title: 'Home', path: '/' },
//     { title: 'Example Whys', path: '/example' },
//     { title: 'How to FTW', path: '/ftw' },
//     { title: 'Client Why', path: '/client-why' },
//     { title: 'Blog', path: '/blog' },
//     { title: 'Donate', path: '/donate-page' },
//     { title: 'About Us', path: '/about' },
//   ];

//   useEffect(() => {
//     setToken(localStorage.getItem('accessToken'));
//   }, []);

//   const user = {
//     login: !token,
//     photoURL: imageUrl(userData?.data?.profile_image),
//     displayName: userData?.data?.name,
//     email: userData?.data?.email,
//   };

//   const buttonVariants = {
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//       },
//     },
//     hidden: {
//       opacity: 0,
//     },
//   };

//   const handleSignOut = () => {
//     try {
//       localStorage.removeItem('accessToken');
//       localStorage.removeItem('email');
//       localStorage.removeItem('refreshToken');
//       localStorage.removeItem('register-email');
//       Cookies.remove('token');
//       router.push('/');
//     } catch (error) {
//       console.error('Error during sign-out:', error);
//       alert('An error occurred during sign-out. Please try again.');
//     }
//   };

//   const menuVariants = {
//     hidden: { opacity: 0, x: '100%' },
//     visible: {
//       opacity: 1,
//       x: 0,
//       transition: { type: 'spring', stiffness: 300, damping: 30 },
//     },
//     exit: {
//       opacity: 0,
//       x: '100%',
//       transition: { type: 'spring', stiffness: 300, damping: 30 },
//     },
//   };

//   return (
//     <div className="container mx-auto flex items-center justify-between p-4">
//       <div>
//         <Link href={'/'}>
//           <img src="/brandLogo.svg" alt="brandLogo" className="h-10" />
//         </Link>
//       </div>

//       {/* Desktop Menu */}
//       <div className="hidden lg:flex lg:text-sm items-center gap-4">
//         <ul className="flex items-center gap-4">
//           {navlinks.map((link, idx) => {
//             const isActive = path === link?.path;
//             return (
//               <motion.li
//                 key={idx}
//                 whileHover={{ scale: 1.1 }}
//                 whileTap={{ scale: 0.9 }}
//                 className={`${
//                   isActive ? 'text-[#00b0f2] font-bold' : 'text-gray-600'
//                 } transition`}
//               >
//                 <Link href={link?.path} className="px-2">
//                   {link?.title}
//                 </Link>
//                 {isActive && (
//                   <motion.div
//                     layoutId="underline"
//                     className="block w-full h-1 bg-[#00b0f2] rounded-tl-full rounded-tr-full"
//                   />
//                 )}
//               </motion.li>
//             );
//           })}
//         </ul>
//         <div>
//           {!user.login ? (
//             <Popover>
//               <PopoverTrigger asChild>
//                 <Avatar>
//                   <AvatarImage
//                     className="w-8 h-8 rounded-full object-cover cursor-pointer"
//                     src={user.photoURL}
//                   />
//                 </Avatar>
//               </PopoverTrigger>
//               <PopoverContent align="end" className="p-4">
//                 <Avatar>
//                   <div className="flex gap-2">
//                     <AvatarImage
//                       className="w-8 h-8 rounded-full object-cover cursor-pointer"
//                       src={user.photoURL}
//                     />
//                     <div>
//                       <h1 className="font-semibold text-base">
//                         {user?.displayName}
//                       </h1>
//                       <h1 className="font-normal opacity-75 text-sm">
//                         {user?.email}
//                       </h1>
//                     </div>
//                   </div>
//                 </Avatar>
//                 <div className="divider w-full h-[1px] bg-slate-400/40 my-3"></div>
//                 <ul className="mt-3 flex items-start flex-col gap-3">
//                   <Link className="w-full" href={'/user-profile'}>
//                     <li className="flex items-center cursor-pointer hover:bg-[#00b0f2]/40 w-full p-2 rounded-md gap-2">
//                       <GiSettingsKnobs className="text-xl" />
//                       Profile
//                     </li>
//                   </Link>
//                   <Link className="w-full" href={'/about'}>
//                     <li className="flex items-center cursor-pointer hover:bg-[#00b0f2]/40 w-full p-2 rounded-md gap-2">
//                       <MdOutlineQuestionMark className="text-xl" /> About us
//                     </li>
//                   </Link>
//                   <div className="divider w-full h-[1px] bg-slate-400/40"></div>
//                   <li
//                     onClick={handleSignOut}
//                     className="flex items-center cursor-pointer hover:bg-[#00b0f2]/40 w-full p-2 rounded-md gap-2"
//                   >
//                     <VscSignOut className="text-xl" />
//                     Sign Out
//                   </li>
//                 </ul>
//               </PopoverContent>
//             </Popover>
//           ) : (
//             <Popover>
//               <PopoverTrigger asChild>
//                 <Avatar>
//                   <AvatarImage
//                     className="w-8 h-8 rounded-full cursor-pointer"
//                     src="/Icon/Icon button.svg"
//                   />
//                 </Avatar>
//               </PopoverTrigger>
//               <PopoverContent
//                 align="end"
//                 className="z-[999] w-48 flex items-center justify-center"
//               >
//                 <ul className="mt-3 flex items-start flex-col gap-3 w-full">
//                   <Link
//                     href={'/register'}
//                     className="hover:text-[#00B0F2] transition-all w-full h-full"
//                   >
//                     <li className="flex items-center gap-2">Sign Up</li>
//                   </Link>
//                   <div className="divider w-full h-[1px] bg-slate-400/40"></div>
//                   <Link
//                     href={'/login'}
//                     className="hover:text-[#00B0F2] transition-all w-full h-full"
//                   >
//                     <li className="flex items-center gap-2">Sign In</li>
//                   </Link>
//                 </ul>
//               </PopoverContent>
//             </Popover>
//           )}
//         </div>
//       </div>

//       {/* Hamburger Menu Icon for Mobile */}
//       <div className="lg:hidden flex items-center">
//         <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-2xl">
//           {isMenuOpen ? <FaTimes /> : <FaBars />}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {isMenuOpen && (
//         <motion.div
//           variants={menuVariants}
//           initial="hidden"
//           animate="visible"
//           exit="exit"
//           className="fixed z-[999] top-0 right-0 w-full h-screen bg-white flex flex-col items-start pl-12 justify-start pt-12 gap-4 lg:hidden"
//         >
//           <Link href={'/'}>
//             <img src="/logo/FYW.png" alt="logo" />
//           </Link>
//           <button
//             onClick={() => setIsMenuOpen(false)}
//             className="text-3xl absolute top-4 right-4"
//           >
//             <FaTimes />
//           </button>
//           <ul className="flex flex-col items-start gap-3">
//             {navlinks.map((link, idx) => {
//               const isActive = path === link?.path;
//               return (
//                 <motion.li
//                   key={idx}
//                   whileHover={{ scale: 1.1 }}
//                   whileTap={{ scale: 0.9 }}
//                   className={`${
//                     isActive ? 'text-[#00b0f2] font-bold' : 'text-gray-600'
//                   } transition`}
//                 >
//                   <Link onClick={() => setIsMenuOpen(false)} href={link?.path}>
//                     {link?.title}
//                   </Link>
//                 </motion.li>
//               );
//             })}
//           </ul>
//           <div className="mt-6 text-lg font-semibold">
//             {!user.login ? (
//               <Avatar>
//                 <div className="flex flex-col gap-2">
//                   <div>
//                     <AvatarImage
//                       className="w-8 h-8 rounded-full object-cover cursor-pointer"
//                       src={user?.photoURL}
//                     />
//                     <div>
//                       <h1 className="font-semibold text-base">
//                         {user?.displayName}
//                       </h1>
//                       <h1 className="font-normal opacity-75 text-sm">
//                         {user?.email}
//                       </h1>
//                     </div>
//                   </div>
//                   <motion.div
//                     variants={buttonVariants}
//                     initial="hidden"
//                     animate="visible"
//                     exit="exit"
//                     className="flex w-full gap-2"
//                   >
//                     <motion.button
//                       whileHover={{ scale: 1.1 }}
//                       whileTap={{ scale: 0.9 }}
//                       className="bg-[#00B0F2] text-nowrap text-sm text-white px-4 py-2 rounded-md w-full"
//                     >
//                       <Link href={'/user-profile'}>Profiles</Link>
//                     </motion.button>
//                     <motion.button
//                       whileHover={{ scale: 1.1 }}
//                       whileTap={{ scale: 0.9 }}
//                       className="bg-[#16344F] text-sm text-nowrap text-white px-4 py-2 rounded-md w-full"
//                     >
//                       <p onClick={handleSignOut}>Sign Out</p>
//                     </motion.button>
//                   </motion.div>
//                 </div>
//               </Avatar>
//             ) : (
//               <motion.div
//                 variants={buttonVariants}
//                 initial="hidden"
//                 animate="visible"
//                 exit="exit"
//                 className="flex w-full gap-2"
//               >
//                 <motion.button
//                   whileHover={{ scale: 1.1 }}
//                   whileTap={{ scale: 0.9 }}
//                   className="bg-[#00B0F2] text-nowrap text-sm text-white px-4 py-2 rounded-md w-full"
//                 >
//                   <Link href={'/register'}>Sign Up</Link>
//                 </motion.button>
//                 <motion.button
//                   whileHover={{ scale: 1.1 }}
//                   whileTap={{ scale: 0.9 }}
//                   className="bg-[#16344F] text-sm text-nowrap text-white px-4 py-2 rounded-md w-full"
//                 >
//                   <Link href={'/login'}>Sign In</Link>
//                 </motion.button>
//               </motion.div>
//             )}
//           </div>
//         </motion.div>
//       )}
//     </div>
//   );
// }

// export default Navbar;
'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import {
  UserOutlined,
  LogoutOutlined,
  LoginOutlined,
  UserAddOutlined,
} from '@ant-design/icons';
import './navBtn.css';
import { useProfileGetQuery } from '@/app/provider/redux/services/userApis';
import { imageUrl } from '@/lib/utils';
import Cookies from 'js-cookie';
import { toast } from 'sonner';
import { Avatar, Dropdown, Menu } from 'antd';
import Swal from 'sweetalert2';

function Navbar() {
  const path = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [token, setToken] = useState('');

  const { data: userData, isError, error } = useProfileGetQuery();
  useEffect(() => {
    setToken(localStorage.getItem('accessToken'));
  }, []);
  const user = {
    login: !!token,
    photoURL: imageUrl(
      userData?.data?.profile_image ||
        'https://i.ibb.co.com/PsxKbMWH/defult-Image.jpg'
    ),
    displayName: userData?.data?.name,
    email: userData?.data?.email,
  };

  useEffect(() => {
    if (error?.data?.success === false) {
      if (error?.data?.message == 'This user is blocked') {
        Swal.fire({
          title: 'Error!',
          text: 'Your account has been blocked. Contact with admin',
          icon: 'error',
          confirmButtonText: 'OK',
        });
        localStorage.removeItem('accessToken');
        localStorage.removeItem('email');
        localStorage.removeItem('refreshToken');
        localStorage.removeItem('register-email');
        Cookies.remove('token');
      }
    }
  }, [isError]);

  const navlinks = [
    { title: 'Home', path: '/' },
    { title: 'Example Whys', path: '/example' },
    { title: 'How to FTW', path: '/ftw' },
    { title: 'Client Why', path: '/client-why' },
    { title: 'Blog', path: '/blog' },
    { title: 'Donate', path: '/donate-page' },
    { title: 'About Us', path: '/about' },
    { title: 'Profile', path: '/user-profile' },
  ];

  const handleSignOut = () => {
    try {
      localStorage.removeItem('accessToken');
      localStorage.removeItem('email');
      localStorage.removeItem('refreshToken');
      localStorage.removeItem('register-email');
      Cookies.remove('token');
      toast.success('Signed out successfully.');
      window.location.href = '/';
    } catch (error) {
      console.error('Error during sign-out:', error);
      alert('An error occurred during sign-out. Please try again.');
    }
  };

  const renderUserMenu = () => (
    <Menu className="w-44 min-w-fit rounded-xl shadow-lg">
      {user.login && !error ? (
        <>
          <div className="p-4 flex items-center gap-3">
            <Avatar size={40} src={user?.photoURL} className="cursor-pointer" />
            <div>
              <h1 className="font-semibold text-base">{user?.displayName}</h1>
              <h1 className="font-normal opacity-75 text-sm">{user?.email}</h1>
            </div>
          </div>
          <Menu.Divider />
          <Menu.Item key="1" icon={<UserOutlined />}>
            <Link href="/user-profile">Profile</Link>
          </Menu.Item>
          <Menu.Item key="4" icon={<LogoutOutlined />} onClick={handleSignOut}>
            Log out
          </Menu.Item>
        </>
      ) : (
        <>
          <Menu.Item key="5" icon={<LoginOutlined />}>
            <Link href="/login">Sign In</Link>
          </Menu.Item>
          <div className="w-full h-[1px] bg-slate-400/20"></div>
          <Menu.Item key="6" icon={<UserAddOutlined />}>
            <Link href="/register">Sign Up</Link>
          </Menu.Item>
        </>
      )}
    </Menu>
  );

  const menuVariants = {
    hidden: { opacity: 0, x: '100%' },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: 'spring', stiffness: 300, damping: 30 },
    },
    exit: {
      opacity: 0,
      x: '100%',
      transition: { type: 'spring', stiffness: 300, damping: 30 },
    },
  };

  return (
    <div className="container mx-auto flex items-center justify-between p-4">
      <div>
        <Link href={'/'}>
          <img src="/brandLogo.svg" alt="brandLogo" className="h-10" />
        </Link>
      </div>

      {/* Desktop Menu */}
      <div className="hidden lg:flex lg:text-sm items-center gap-4">
        <ul className="flex items-center mt-[10px] gap-4">
          {navlinks.map((link, idx) => {
            const isActive = path === link?.path && link?.path !== '/user-profile';
            return (
              <motion.li
                key={idx}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={`${
                  isActive ? 'text-[#00b0f2] font-bold' : 'text-gray-600'
                } transition`}
              >
                <Link href={link?.path} className="px-2">
                  {link?.path !== '/user-profile' && link?.title}
                </Link>
                {isActive && (
                  <motion.div
                    layoutId="underline"
                    className="block w-full h-1 bg-[#00b0f2] rounded-tl-full rounded-tr-full"
                  />
                )}
              </motion.li>
            );
          })}
        </ul>
        <div className="mt-2">
          {user.login && !error ? (
            <Dropdown
              overlay={renderUserMenu()}
              trigger={['click']}
              placement="bottomRight"
            >
              <Avatar
                size={40}
                src={
                  user?.photoURL ||
                  'https://i.ibb.co.com/PsxKbMWH/defult-Image.jpg'
                }
                className="cursor-pointer"
              />
            </Dropdown>
          ) : (
            <Link href={'/login'}>
              <button className="primary-button-styling">Sign In</button>
            </Link>
          )}
        </div>
      </div>

      {/* Hamburger Menu Icon for Mobile */}
      <div className="lg:hidden flex items-center">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-2xl">
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          variants={menuVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="fixed z-[999] top-0 right-0 w-full h-screen bg-white flex flex-col items-start pl-12 justify-start pt-12 gap-4 lg:hidden"
        >
          <Link href={'/'}>
            <img src="/logo/FYW.png" alt="logo" />
          </Link>
          <button
            onClick={() => setIsMenuOpen(false)}
            className="text-3xl absolute top-4 right-4"
          >
            <FaTimes />
          </button>
          <ul className="flex flex-col items-start gap-3">
            {navlinks.map((link, idx) => {
              const isActive = path === link?.path;
              return (
                <motion.li
                  key={idx}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className={`${
                    isActive ? 'text-[#00b0f2] font-bold' : 'text-gray-600'
                  } transition`}
                >
                  <Link onClick={() => setIsMenuOpen(false)} href={link?.path}>
                    {link?.title}
                  </Link>
                </motion.li>
              );
            })}
          </ul>
          <div className="mt-6 text-lg font-semibold">
            {user.login ? (
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-3">
                  <Avatar size={48} src={user?.photoURL} />
                  <div>
                    <h1 className="font-semibold text-base">
                      {user?.displayName}
                    </h1>
                    <h1 className="font-normal opacity-75 text-sm">
                      {user?.email}
                    </h1>
                  </div>
                </div>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="bg-[#16344F] text-sm text-nowrap text-white px-4 py-2 rounded-md w-full"
                  onClick={handleSignOut}
                >
                  Sign Out
                </motion.button>
              </div>
            ) : (
              <motion.div className="flex w-full gap-2">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="bg-[#00B0F2] text-nowrap text-sm text-white px-4 py-2 rounded-md w-full"
                >
                  <Link href={'/register'}>Sign Up</Link>
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="bg-[#16344F] text-sm text-nowrap text-white px-4 py-2 rounded-md w-full"
                >
                  <Link href={'/login'}>Sign In</Link>
                </motion.button>
              </motion.div>
            )}
          </div>
        </motion.div>
      )}
    </div>
  );
}

export default Navbar;
