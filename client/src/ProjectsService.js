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

  static getAvailableTags() {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.get(url + "/tagslist");
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
        const res = await axios.get(url + "/codinglangslist");
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
        const res = await axios.get(url + "/madeatslist");
        const data = res.data;
        resolve(data);
      } catch (err) {
        reject(err);
      }
    });
  }

  static filterByTags() {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.get(url + "/tags?tags=");
        const data = res.data;
        resolve(data);
      } catch (err) {
        reject(err);
      }
    });
  }
}

export default ProjectsService;
