import axios from "axios";
import qs from "qs";

const url = "api/";

class ContactsService {
  static postForm(formBody) {
    axios({
      method: "post",
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
    })
      .then(function(response) {
        console.log(formBody, response);
      })
      .catch(function(response) {
        console.log(response);
      });
  }
}

export default ContactsService;
