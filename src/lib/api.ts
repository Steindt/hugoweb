import axios from 'axios';

export default function sendHugo(ip: string, port: number, data: Array<number>) {
  console.log("sending to hugo");
  let whoop = handleData(data);
  axios.defaults.withCredentials = false;
  axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
  axios.post("http://" + ip + ":" + port.toString() + "/image", whoop, {
    headers: {
      "Content-type": "application/json",
    }
  });
  alert("Sent to Hugo!");
}

function handleData(data: Array<number>) {
  return {
    "data": data
  }
}
