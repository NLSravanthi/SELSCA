import React, {Component} from 'react';
import Plot from 'react-plotly.js';
import {MetaTags, meta} from 'react-meta-tags';
import records from './data1.json';
import { sum } from '@syncfusion/ej2-react-charts';

const data = records;
var a=[];
data.forEach(element => {
  a.push(element.attendance.jan);
});
console.log(a[0]);
var xvalues=Object.keys(a[0]);
var yvalues=Object.values(a[0]);
console.log(yvalues);


export function atendreport() {
    return(
      <div className='attendance3 container' align="center">
      <MetaTags>
            <title>Attendance Report</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
          </MetaTags>
      <h3 font="bold">Attendance Report</h3> 
    <div className='attendance2 container' style={{gap:"20px"}} align="center">
    
      <div class="row" style={{gap:"20px",display:"inline-flex",marginTop:"20px"}}>
        <div class="container col" style={{margintop:"20px"}}>
      <Plot 
      data={[{
        x:xvalues,
        y:yvalues,
        type:'line',
        mode: 'lines+markers',
        maker:{color:'black'}

      }]}
      config={{
        "displaylogo": false,
        "showAxisRangeEntryBoxes": false,
        'modeBarButtonsToRemove': ['pan2d','lasso2d'],
        "responsive":true
    }}
      layout={{width:400,height:200,title:"Monthly Attendance",
      autosize: true,
      plot_bgcolor: 'rgba(0,0,0,0)',
      paper_bgcolor: 'rgba(0,0,0,0)',
      margin: {
        l: 40,
        r: 10,
        b: 35,
        t: 25,
        pad: 2
      },
      xaxis:{
        title:{
          text:'weeks',
          font: {
            family: 'Times new romen',
            size: 18,
            color: '#000000',
            font: 'bold',
          }
        }
      },
      yaxis:{
        title:{
          text:'No.of days present',
          font: {
            family: 'Times new romen',
            size: 18,
            color: '#000000',
            font: 'bold',
          }
        }
      },
    
    }}
      />
      </div>
      <div class="container col">
      <Plot 
       data = {[{
       values: [19, 26, 55,35],
       labels: ['Health', 'Discontinue', 'Transfer','No reason'],
       type: 'pie',
       }]}

      layout = {{
        height: 250,
          width: 250,
          title:"Reason for long absent",
          autosize: true,
          plot_bgcolor: 'rgba(0,0,0,0)',
          paper_bgcolor: 'rgba(0,0,0,0)',
      margin: {
        l: 25,
        r: 25,
        b: 5,
        t: 25,
        pad: 2
      },
        }}
      />
      </div>
      <div class="container col">
      <Plot 
      data={[{
        x:["Jan","feb","mar","apr","may","jun"],
        y:[10,30,50,60,20,40],
        type:'line',
        mode: 'lines+markers',
        maker:{color:'black'}

      }]}
      layout={{width:400,height:200,title:"yearly attendance report",
      autosize: true,
      plot_bgcolor: 'rgba(0,0,0,0)',
          paper_bgcolor: 'rgba(0,0,0,0)',
      margin: {
        l: 40,
        r: 10,
        b: 35,
        t: 25,
        pad: 2
      },
      xaxis:{
        title:{
          text:'Months',
          font: {
            family: 'Times new romen',
            size: 18,
            color: '#000000',
          }
        }
      },
      yaxis:{
        title:{
          text:'No.of days precent',
          font: {
            family: 'Times new romen',
            size: 18,
            color: '#000000',
          }
        }
      },
    }}
      />
      </div>
      </div>
      <div class='container col'>
      <h6 align="center">Long absentees list</h6>
      <div class="row tbl-fixed" width="200px">
			<table class="table-stripped table-condensed" align='center'>
				<thead>
					<tr style={{position:"sticky",top:"0px",height:"5px"}}>
					<th width="10px">ID</th>
					<th width="20px">Name of the student</th>
					<th width="80px">No.of days present</th>
					</tr>
				</thead>
				<tbody>
          {records.map((item)=>(
            <tr>
              <td >{item.ID}</td>
              <td >{item.Name}</td>
              <td >{item.attendance.jan.total}</td>
            </tr>
          )
          )}		
				</tbody>
			</table>
		</div>
    </div>
    </div>
    </div>
    )
}

export default atendreport;