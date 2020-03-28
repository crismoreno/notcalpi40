import axios from 'axios';

const url = 'http://localhost:5000/api/projects'


class ProjectsService {
	static getProjects(){
		return new Promise(async (resolve, reject) =>{
			try {
				const res = await axios.get(url)
				const data = res;
				resolve(console.log(data));
			} catch(err){
				reject(err);
			};
		})
	}
}

export default ProjectsService;

