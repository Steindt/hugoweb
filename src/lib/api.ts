import axios from 'axios';

export default function sendMatrix(ip: string, port: number, data: Array<number>) {
  console.log("sending matrix to hugo");
  let whoop = handleList(data);
  axios.defaults.withCredentials = false;
  axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
  axios.post("http://" + ip + ":" + port.toString() + "/image", whoop, {
    headers: {
      "Content-type": "application/json",
    }
  });
}

export function sendText(ip: string, port: number, data: string) {
  console.log("sending text to hugo");
  let whoop = handleText(data);
  axios.defaults.withCredentials = false;
  axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
  axios.post("http://" + ip + ":" + port.toString() + "/sendText", whoop, {
    headers: {
      "Content-type": "application/json",
    }
  })
}

function handleList(data: Array<number>) {
  return {
    "data": data
  }
}

function handleText(data: string) {
  return {
    "data": data
  }
}