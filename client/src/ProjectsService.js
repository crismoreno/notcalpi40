import axios from "axios";

const url = "api/";

class ProjectsService {
  static getProjects() {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.get(url);
        const data = res.data;
        resolve(data);
      } catch (err) {
        reject(err);
      }
    });
	}
	
  static getFeaturedProjects() {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.get(url + 'featured');
        const data = res.data;
        resolve(data);
      } catch (err) {
        reject(err);
      }
    });
  }

  static getProjectById(projId) {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.get(url + "project/" + projId);
        const data = res.data;
        resolve(data);
      } catch (err) {
        reject(err);
      }
    });
  }

  static getAvailableTags() {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.get(url + "tagslist");
        const data = res.data;
        resolve(data);
      } catch (err) {
        reject(err);
      }
    });
  }

  static getAvailableCodingLangs() {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.get(url + "codinglangslist");
        const data = res.data;
        resolve(data);
      } catch (err) {
        reject(err);
      }
    });
  }

  static getAvailableMadeAts() {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.get(url + "madeatslist");
        const data = res.data;
        resolve(data);
      } catch (err) {
        reject(err);
      }
    });
  }

  static filterByTags(checked_tags) {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.get(url + "tags?tags=" + checked_tags);
        const data = res.data;
        resolve(data);
      } catch (err) {
        reject(err);
      }
    });
  }

  static filterByCodingLang(checked_codingLangs) {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.get(
          url + "codinglangs?codinglangs=" + checked_codingLangs
        );
        const data = res.data;
        resolve(data);
      } catch (err) {
        reject(err);
      }
    });
  }

  static filterByPlace(place_picked) {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.get(url + "madeat?madeat=" + place_picked);
        const data = res.data;
        resolve(data);
      } catch (err) {
        reject(err);
      }
    });
  }
  static getTagsById(project_id) {
    return new Promise(async (resolve, reject) => {
      try {
				const res = await axios.get(url + "projecttags/" + project_id);
        const data = res.data;
        resolve(data);
      } catch (err) {
        reject(err);
      }
    });
  }
  static getCodingLangsById(project_id) {
    return new Promise(async (resolve, reject) => {
      try {
				const res = await axios.get(url + "projectcodinglangs/" + project_id);
        const data = res.data;
        resolve(data);
      } catch (err) {
        reject(err);
      }
    });
  }
  static getMadeAtsById(project_id) {
    return new Promise(async (resolve, reject) => {
      try {
				const res = await axios.get(url + "projectmadeat/" + project_id);
        const data = res.data;
        resolve(data);
      } catch (err) {
        reject(err);
      }
    });
  }
}

export default ProjectsService;
