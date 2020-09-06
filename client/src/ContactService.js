import axios from "axios";
import qs from "qs";

const url = "api/";

class ContactsService {
  static async postForm(formBody, resolve) {
		const config = {
			method: 'post',
			url: `${url}postForm`,
			data: qs.stringify({
				name: formBody.name,
				telephone: formBody.telephone,
				email: formBody.email,
				company: formBody.company,
				message: formBody.message,
			}),
			headers: {
				"content-type": "application/x-www-form-urlencoded;charset=utf-8",
			},
	}

	try{
		const res = await axios(config)
		resolve(null, res.status)
	}catch(err){
		resolve(err, null)
	}
  }
}

export default ContactsService;
