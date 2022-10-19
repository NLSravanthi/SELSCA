import React from 'react';
import JsonData from './students.json';
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
          <td align='center'>
          <input type="checkbox" id={info.ID} name={info.Name}></input>
          </td>
				</tr>
			)
		}
	)

	return(
    <div align="center" style={{marginTop:"30px"}}>
      <MetaTags>
            <title>Mid Day Meal</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
          </MetaTags>
		  <h3 align="center">Mark the Meal for the day</h3>
		<div class="table1">
			<table>
				<thead>
					<tr>
					<th>ID</th>
					<th>Name of the student</th>
					<th>Mark meal on
            <p>{date}</p>
          </th>
					</tr>
				</thead>
				<tbody>
					{DisplayData}
					
				</tbody>
			</table>
      
		</div>
		<button className="button" align="center" value="submit">submit</button>
    </div>
	)
}

export default JsonDataDisplay;
