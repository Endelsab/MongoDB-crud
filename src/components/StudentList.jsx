import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getStudents } from "../redux/useSlice";

const StudentList = () => {

	const students = useSelector((state) => state.StudentList.StudentLists);
	const dispatch = useDispatch();

	useEffect(() => {
		const fetchStudent = async () => {
			try {
				const response = await axios.get("http://localhost:3000");
				dispatch(getStudents(response.data));
			} catch (error) {
				console.log(error);
			}
		};
		fetchStudent();
	}, []);

	return (
		<>
			<div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
				<div className="w-50 bg-white rounded p-3">
					<Link to="/AddStudent" className="btn btn-success btn sm">
						Add +
					</Link>
					<span className="m-2 h5">Student</span>
					<table className="table mt-4">
						<thead>
							<tr>
								<th>Firstname</th>
								<th>Lastname</th>
								<th>Course</th>
								<th>Action</th>
							</tr>
						</thead>
						<tbody>
							{students.map((student) => {
								return (
									<tr key={student.id}>
										<td>{student.Firstname}</td>
										<td>{student.Lastname}</td>
										<td>{student.Course}</td>
										<td>
											<button className="btn btn-warning btn sm ">Edit</button>
											<button className="btn btn-danger btn sm">Delete</button>
										</td>
									</tr>
								);
							})}
						</tbody>
					</table>
				</div>
			</div>
		</>
	);
};

export default StudentList;
