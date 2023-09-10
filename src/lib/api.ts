import axios from 'axios';

export default function sendHugo(ip: string, port: number, data: Array<number>) {
  console.log("sending to hugo");
  console.log(data.forEach((x) => console.log(x)));
  return;
  axios.post(ip + ":" + port.toString(), handleData(data));
  alert("Sent to Hugo!");
}

function handleData(data: Array<number>) {
  return {
    "data": data
  }
}