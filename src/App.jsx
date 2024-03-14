import {BrowserRouter,Routes,Route} from "react-router-dom"
import StudentList from "./components/StudentList";
import AddStudent from "./components/AddStudent";
import UpdateStudent from "./components/UpdateStudent";

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<StudentList />} />
					<Route path="/AddStudent" element={<AddStudent />} />
					<Route path="/UpdateStudent/:id" element={<UpdateStudent />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
