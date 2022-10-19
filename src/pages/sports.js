import React from 'react'
import JsonData from './students.json'
import {MetaTags, meta} from 'react-meta-tags';

function JsonDataDisplay(){
  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
	const DisplayData=JsonData.map(
		(info)=>{
			return(
				<tr>
					<td>{info.ID}</td>
					<td>{info.Name}</td>
          <tb align="center">
          <select name="exams" id="exams">
    <option value="unit1">Cricket</option>
    <option value="unit2">Basketball</option>
    <option value="term1">NCC</option>
    <option value="unit3">Dance</option>
  </select>
          </tb>
          <td align='center'>
          <input type="checkbox" id={info.ID} name={info.Name}></input>
          </td>
				</tr>
			)
		}
	)

	return(
    <div  align="center" style={{marginTop:"30px"}}>
      <MetaTags>
            <title>Sports And Activities</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
          </MetaTags>
		  <h3 align="center">Mark the attendance for the activity</h3>
		<div class="table1">
			<table align='center'>
				<thead>
					<tr>
					<th>ID</th>
					<th>Name of the student</th>
          <th>Activities</th>
					<th>Mark attendance on
            <p>{date}</p>
          </th>
					</tr>
				</thead>
				<tbody>
				
					
					{DisplayData}
					
				</tbody>
			</table>
		</div>
		<button className="button" value="submit">submit</button>
    </div>
	)
}

export default JsonDataDisplay;
