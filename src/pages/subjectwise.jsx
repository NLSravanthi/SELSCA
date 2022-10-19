import React from 'react';
import Plot from 'react-plotly.js';
import {Select } from '@mui/material';
//Subject wise 
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import BoxPlot from './boxplot';
import {MetaTags, meta} from 'react-meta-tags';
import records from './data1.json';


function createData(
  id: number,
  name: string, 
  absent: number,
  present: number,
  reason: string,
  rank: number
) {
  return { name, id, absent, present, reason, rank };
}

const rows = [
  createData(1,'Sephain', 159, 6,'health',1),
  createData(3,'John', 237, 9,'health',2),
  createData(5,'Milly', 262, 16,'health',3),
  createData(10,'Smith', 305, 3,'health',4),
  createData(12,'George', 356, 16,'health',5),
];

export function subjectwisereport() {
    return(
        <div className='attendance3' align="center">
      <MetaTags>
            <title>Subject Wise</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </MetaTags>
      <h6>Subject wise report</h6>
      <FormControl sx={{ m: 1, width: "100px" }}>
      <InputLabel id="demo-select-small">Subject</InputLabel>
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        label="Subject">
        <MenuItem value={'english'}>English</MenuItem>
        <MenuItem value={'maths'}>Maths</MenuItem>
        <MenuItem value={'science'}>Science</MenuItem>
        <MenuItem value={'social'}>Science</MenuItem>
      </Select>
    </FormControl>
    <div className='attendance2' style={{gap:"20px"}}>
    {/*Bar plot graph */}
    <div className='attendance4' align='center'>
      <br></br>
      <div style={{marginLeft:"20px"}}>
    <Plot 
      data={[{
        x:["A","B","C","D","E","F"],
        y:[10,30,50,60,20,40],
        type:'bar',
        mode: 'lines+markers',
        maker:{color:'black'}

      }]}
      layout={{width:400,height:200,title:"Grades gained in the subject",
      autosize: true,
      plot_bgcolor: 'rgba(0,0,0,0)',
      paper_bgcolor: 'rgba(0,0,0,0)',
      margin: {
        l: 80,
        r: 15,
        b: 35,
        t: 25,
        pad: 2
      },
      top: 20,
      xaxis:{
        title:{
          text:'Different grades',
          font: {
            family: 'Times new romen',
            size: 14,
            color: '#000000',
          }
        }
      },
      yaxis:{
        title:{
          text:'No.of students got the grade',
          font: {
            family: 'Times new romen',
            size: 14,
            color: '#000000',
          }
        }
      },
    
    }}
      />
      </div>
      <div>
      <p className='font'>No.of tests conducted:<input style={{width:"30px"}}></input></p>
      </div>
    </div>
      {/*Box plot graph */}
      <div>
        <h6>Box plot</h6>
        <div className='boxplotstyle'>
        <BoxPlot/>
        </div>
      </div>
      </div>
    </div>
    )
}

export default subjectwisereport;