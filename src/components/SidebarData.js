import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';


export const SidebarData = [
  {
    title: 'Overall view',
    path: '/',
    icon: <AiIcons.AiFillPieChart />,
    cName: 'nav-text'
  },
  {
    title: 'Post Attendance',
    path: '/postattendance',
    icon: <IoIcons.IoMdPeople />,
    cName: 'nav-text'
  },
  {
    title: 'Post marks',
    path: '/postmarks',
    icon: <IoIcons.IoMdCheckboxOutline />,
    cName: 'nav-text'
  },
  {
    title: 'Mid day meals',
    path: '/middaymeals',
    icon: <FaIcons.FaBreadSlice />,
    cName: 'nav-text'
  },
  {
    title: 'Sports',
    path: '/sports',
    icon: <IoIcons.IoMdBasketball />,
    cName: 'nav-text'
  },
  {
    title: 'Class report',
    path: '/classreport',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text',
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: 'Attendance',
        path: '/classreport/attendance',
        icons: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'Academics',
        path: '/classreport/academics',
        icons: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'Subjectwise',
        path: '/classreport/subjectwise',
        icons: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'Studentwise',
        path: '/classreport/studentwise',
        icons: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
    ]
  },
  {
    title: 'Student details',
    path: '/studentdetails',
    icon: <IoIcons.IoMdPersonAdd />,
    cName: 'nav-text'
  },
  {
    title: 'Entry',
    path: '/entry',
    icon: <IoIcons.IoMdPersonAdd />,
    cName: 'nav-text'
  }
];
