import React from 'react'
import JsonData from './students.json'
import {MetaTags, meta} from 'react-meta-tags';
import {PieChart, Pie, Sector, Cell,BarChart,Bar,CartesianGrid,XAxis,YAxis,Tooltip,Legend,LineChart,Line } from 'recharts';

function JsonDataDisplay(){
  const data2 = [
    {
      "name": "unit1",
      "uv": 4000,
      "marks": 24
    },
    {
      "name": "unit2",
      "uv": 3000,
      "marks": 13
    },
    {
      "name": "unit 3",
      "uv": 2000,
      "marks": 98
    },
    {
      "name": "unit 4",
      "uv": 2780,
      "marks": 39
    },
    {
      "name": "unit 5",
      "uv": 1890,
      "marks": 48
    },
    {
      "name": "unit 6",
      "uv": 2390,
      "marks": 38
    },
    {
      "name": "unit 7",
      "uv": 3490,
      "marks": 43
    }
  ];
  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
	const DisplayData=JsonData.map(
		(info)=>{
			return(
				<tr>
          {/*Table header*/}
					<td>{info.ID}</td>
					<td >{info.Name}</td>
          <td align='center'>
          <input type="input" id={info.ID} name={info.Name} style={{width:"30px"}}></input>
          </td>
				</tr>
			)
		}
	)

	return(
    <div align="center" style={{marginTop:"30px"}}>
      <MetaTags>
            <title>Post Marks</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
          </MetaTags>
          <h3 align="center">Mark the score for the test</h3>
		<div class="table1">
			<table>
				<thead>
					<tr>
					<th>ID</th>
					<th>Name of the student</th>
					<th>post marks for
          <select name="exams" id="exams">
    <option value="unit1">Unit test 1</option>
    <option value="unit2">unit test 2</option>
    <option value="term1">Term 1</option>
    <option value="unit3">Unit test 3</option>
  </select>
   in 
  <select name="subject" id="subject">
    <option value="English">English</option>
    <option value="Maths">Maths</option>
    <option value="Science">Science</option>
    <option value="Social">Social</option>
  </select>
  <br></br>
  <br></br>
    Total marks
    <input type="input" id="subject" name="subject" style={{width:"30px"}}></input>
          </th>
					</tr>
				</thead>
				<tbody>
					{DisplayData}
				</tbody>
			</table>
		</div>
    <button className="button" value="submit">submit</button>
    <br></br>
    {/*Graph*/}
    <div className='grabar'>
    <LineChart width={500} height={200} data={data2}>
  <CartesianGrid strokeDasharray="3 3" />
  <XAxis dataKey="name" />
  <YAxis />
  <Tooltip />

  <Line dataKey="marks" fill="#8884d8" background={{ fill: "#78adf7;" }}/>
  
</LineChart>
</div>
    </div>
	)
}

export default JsonDataDisplay;
