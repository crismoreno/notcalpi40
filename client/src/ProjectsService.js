import axios from 'axios';

const url = 'api/projects/'


class ProjectsService {
	static getProjects(){
		return new Promise(async (resolve, reject) =>{
			try {
				const res = await axios.get(url)
				const data = res.data;
				resolve(data);
			} catch(err){
				reject(err);
			};
		})
	}
}

export default ProjectsService;

