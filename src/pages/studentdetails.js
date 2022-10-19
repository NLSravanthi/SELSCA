import React from 'react';
import JsonData from './data.json';
import {MetaTags, meta} from 'react-meta-tags';
//import {Routes, Route, useNavigate} from 'react-router-dom';

function studentdetails() {
  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
	const DisplayData=JsonData.map(
		(info)=>{
			return(
				<tr>
					<td>{info.ID}</td>
					<td>{info.Name}</td>
          <td align='center'><a href="/entry">Edit</a>
          </td>
				</tr>
			)
		}
	)
  return (
    <div  align="center" style={{marginTop:"30px"}}>
      <MetaTags>
            <title>Student Details</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
          </MetaTags>
		<div class="table1">
			<table align='center'>
				<thead>
					<tr>
					<th>ID</th>
					<th>Name</th>
					<th>Status till
            <p>{date}</p>
          </th>
					</tr>
				</thead>
				<tbody>
					{DisplayData}
          <tr align="center"><a href="/entry">ADD</a></tr>
				</tbody>
			</table>
		</div>
		<button className="button" value="submit">submit</button>
    <br></br>
    <br></br>
    </div>
  );
}

export default studentdetails;
