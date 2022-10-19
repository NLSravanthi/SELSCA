import React, {Component} from 'react';
import Plot from 'react-plotly.js';


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

export function studentwisereport() {
    return(
        <div className='academics'>
      <MetaTags>
            <title>Student Wise report</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
          </MetaTags>
      <div className='div' align='center'>
         <p className='font' >Roll number:<input></input><button style={{background:"#1c6ddd",borderRadius:"5px",marginLeft:"20px"}}>Get</button></p>
         <div className='div1'>
             <p className='font1' >Student name:<input></input></p>
             <p className='font1' >Roll number:<input></input></p>
             <p className='font1' >Class:<input></input></p>
             <p className='font1' >Section:<input></input></p>
             <p className='font1' >Exam:<select>
              <option value="unit1">unit 1</option>
              <option value="unit2">unit 2</option>
              <option value="unit3">unit 3</option>
              </select></p>
          </div>
          <div style={{display:'inline-table', margin:'20PX',gap:'20px'}}>
            <div style={{display:'inline'}}>
          <Plot 
      data={[{
        x:['unit1','unit2','unit3','term1','unit4','term2'],
        y:[160,325,500,601,280,450],
        type:'line',
        mode: 'lines+markers',
        maker:{color:'black'}
      }]}
      layout={{width:400,height:200,title:"Academic performance ",
      autosize: true,
      plot_bgcolor: 'rgba(0,0,0,0)',
      paper_bgcolor: 'rgba(0,0,0,0)',
      margin: {
        l: 45,
        r: 10,
        b: 35,
        t: 25,
        pad: 2
      },
      xaxis:{
        title:{
          text:'Exams',
          font: {
            family: 'Times new romen',
            size: 15,
            color: '#000000',
          }
        }
      },
      yaxis:{
        title:{
          text:'Scores',
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
      <div style={{display:'inline-block',margin:'20px'}}>
      <Plot 
      data={[{
        x:["Telugu","Hindi","English","Maths","Science","Social"],
        y:[90,35,50,60,75,45],
        type:'bar',
        mode: 'lines+markers',
        maker:{color:'black'},
      }]}
      layout={{width:400,height:200,title:"Grades in each exam",
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
          text:'subjects',
          font: {
            family: 'Times new romen',
            size: 15,
            color: '#000000',
          }
        }
      },
      yaxis:{
        title:{
          text:'percentage',
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
      <br></br>
      <div style={{display:'inline-block',margin:'20px'}}>
      <Plot 
      data={[{
        x:["Telugu","Hindi","English","Maths","Science","Social"],
        y:[95,35,80,60,85,45],
        type:'bar',
        mode: 'lines+markers',
        maker:{color:'black'},
        name:'Unit1'
      },
      {
        x:["Telugu","Hindi","English","Maths","Science","Social"],
        y:[89,25,50,20,75,55],
        type:'bar',
        mode: 'lines+markers',
        maker:{color:'black'},
        name:'unit2'
      },
      {
        x:["Telugu","Hindi","English","Maths","Science","Social"],
        y:[75,65,50,45,90,65],
        type:'bar',
        mode: 'lines+markers',
        maker:{color:'black'},
        name:'unit3'
      },
      {
        x:["Telugu","Hindi","English","Maths","Science","Social"],
        y:[100,100,100,100,100,100],
        type:'bar',
        mode: 'lines+markers',
        maker:{color:'black'},
        name:'unit4'
      }
    ]}
      layout={{width:800,height:200,title:"Overall year report subject wise",
      autosize: true,
      plot_bgcolor: 'rgba(0,0,0,0)',
      paper_bgcolor: 'rgba(0,0,0,0)',
      margin: {
        l: 45,
        r: 10,
        b: 30,
        t: 25,
        pad: 2
      },
      xaxis:{
        title:{
          text:'subjects',
          font: {
            family: 'Courier New, monospace',
            size: 15,
            color: '#000000',
          }
        }
      },
      yaxis:{
        title:{
          text:'Percentages',
          font: {
            family: 'Courier New, monospace',
            size: 15,
            color: '#000000',
          }
        }
      },
    }}
      />
      </div>
          </div>
      </div>
    </div>
    )
}

export default studentwisereport;