import React, {Component} from 'react';
import Plot from 'react-plotly.js';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
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

export function academreport() {
    return(
      <div className='attendance3' align="center">
        <MetaTags>
            <title>Academic report</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
          </MetaTags>
        <h6>Academic Report</h6> 
      <div className='attendance2' style={{gap:"20px"}} align="center">
      <p className='font' >Exam:<select>
              <option value="unit1">unit 1</option>
              <option value="unit2">unit 2</option>
              <option value="unit3">unit 3</option>
              </select></p>
        <div style={{gap:"20px",display:"inline-flex"}} >
        <Plot 
        data={[{
          x:["A","B","C","D","E","F"],
          y:[1,3,5,6,2,4],
          type:'bar',
          mode: 'lines+markers',
          maker:{color:'black'}
        }]}
        layout={{width:400,height:200,title:"No.of students got A-f grades in each test",
        autosize: true,
        plot_bgcolor: 'rgba(0,0,0,0)',
        paper_bgcolor: 'rgba(0,0,0,0)',
        margin: {
          l: 30,
          r: 10,
          b: 30,
          t: 25,
          pad: 2
        },
        xaxis:{
          title:{
            text:'Grades',
            font: {
              family: 'Times new romen',
              size: 15,
              color: '#000000',
            }
          }
        },
        yaxis:{
          title:{
            text:'No.of Students',
            font: {
              family: 'Times new romen',
              size: 15,
              color: '#000000',
            }
          }
        },
      
      }}
        />
        <Plot 
         data = {[{
         values: [19, 26, 55,35],
         labels: ['English', 'Science', 'Social','Maths'],
         type: 'pie'
         }]}
  
        layout = {{
          height: 250,
            width: 250,
            title:"subject wise performance",
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
        <br></br>
        <br></br>
        <Plot 
        data={[{
          x:["A","B","C","D","E","F"],
          y:[1,3,5,6,2,4],
          type:'bar',
          mode: 'lines+markers',
          maker:{color:'black'}
  
        }]}
        layout={{width:400,height:200,title:"No.of students got A-f grades throughout year",
        autosize: true,
        plot_bgcolor: 'rgba(0,0,0,0)',
      paper_bgcolor: 'rgba(0,0,0,0)',
        margin: {
          l: 35,
          r: 10,
          b: 30,
          t: 25,
          pad: 2
        },
        xaxis:{
          title:{
            text:'Grades',
            font: {
              family: 'Times new romen',
              size: 15,
              color: '#000000',
            }
          }
        },
        yaxis:{
          title:{
            text:'No.of students',
            font: {
              family: 'Times new romen',
              size: 15,
              color: '#000000',
            }
          }
        },
      
      }}
        />
        </div>
        </div>

        <br></br>
        <div style={{display:'block',marginLeft:"200px"}} >
          <div style={{display:'flex'}}>
        <TableContainer component={Paper}>
        <h6 align="center">Top 5 students list</h6>
        <Table sx={{ width:"400px",margin:"20px",
         }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align='left' style={{width:100}}>ID </TableCell>
              <TableCell align='left' style={{width:200}}>Name of the Student</TableCell>
              <TableCell align='left' style={{width:150}}>Marks Scored</TableCell>
              {/*<TableCell align="right">Protein&nbsp;(g)</TableCell>*/}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.id}
                sx={{}}
              >
                <TableCell align='left' style={{width:100}}>{row.id}</TableCell>
                <TableCell align='left' style={{width:200}}>{row.name}</TableCell>
                <TableCell align='left' style={{width:150}}>{row.absent}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      </div>
      <div style={{display:'flex'}}>
        <TableContainer component={Paper} style={{display:'block'}}>
        <h6 align="center">Focus needed students</h6>
        <Table sx={{ width:"400px",margin:"20px"
         }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align='left' style={{width:100}}>ID </TableCell>
              <TableCell align='left' style={{width:200}}>Name of the Student</TableCell>
              <TableCell align='left' style={{width:150}}>Marks Scored</TableCell>
              {/*<TableCell align="right">Protein&nbsp;(g)</TableCell>*/}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.id}
                sx={{}}
              >
                <TableCell align='left' style={{width:100}}>{row.id}</TableCell>
                <TableCell align='left' style={{width:200}}>{row.name}</TableCell>
                <TableCell align='left' style={{width:150}}>{row.present}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      </div>
      </div>
      </div>

    )
}

export default academreport;