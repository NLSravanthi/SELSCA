import React from 'react';
//importing pages
import atendreport from './attendancereport';
import academreport from './academicreport';
import subjectwisereport from './subjectwise';
import studentwisereport from './studentwise';

{/*--------------------------------Attendance------------------------------- */}
export const attendance = () => {
  return (
    <div>
      {atendreport()}
    </div>
  );
};
{/*-------------------------------------ACADEMICS------------------------------------------------ */}
export const academics = () => {
    return (
      <div>
        {academreport()}
      </div>
      );
  };


{/*-----------------------------------Subject wise---------------------------- */}


export const subjectwise = () => {
  return (
    <div>
      {subjectwisereport()}
    </div>
  );
};
{/*----------------------------------------STUDENT WISE--------------------------------------------------- */}
export const studentwise = () => {
  return (
    <div>
      {studentwisereport()}
    </div>
  );
};


export default academics;
//line 11 <div className='attendance2'></div>