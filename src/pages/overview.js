import React from 'react'
import JsonData from './students.json'
import {MetaTags, meta} from 'react-meta-tags';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import Plot from 'react-plotly.js';

function JsonDataDisplay(){
	const DisplayData=JsonData.map(
		(info)=>{
			return(
				<tr>
					<td>{info.ID}</td>
					<td>{info.Name}</td>
					<td>
					<Typography component="legend">{info.Name}</Typography>
      				<Rating
        				name="simple-controlled"
      				/>
					</td>
          <td>
		  <Plot 
      data={[{
        x:[1,2,3,4,5],
        y:[1,2,3,4,5],
        type:'bar',
        mode: 'lines+markers',
        maker:{color:'black'}

      }]}
      layout={{width:500,height:300,title:"Student performance",xaxis_title:"X Axis Title",
      yaxis_title:"Y Axis Title"}}
      />
		  </td>
          <td>{info.Club}</td>
          <td>{info.Seat}</td>
          <td>{info.Stockings}</td>
				</tr>
			)
		}
	)

	return(
    <div>
      <MetaTags>
            <title>Overview</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
          </MetaTags>
		  <h3 align="center">Overall Report of the class</h3>
      <div className='overviewguide'></div>
		<div class="tablefixhead" style={{margin:"30px 20px 0px 300px"}}>
			<table align='center'>
				<thead>
					<tr>
					<th>ID</th>
					<th>Name of the student</th>
					<th>Measure</th>
          <th>Performance</th>
          <th>Uniforms received</th>
          <th>No.of books</th>
          <th>Subjects to focus</th>
					</tr>
				</thead>
				<tbody>	
					{DisplayData}	
				</tbody>
			</table>
			
		</div>
    </div>
	)
}

export default JsonDataDisplay;
