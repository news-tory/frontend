import axios from 'axios';

const serverApi = axios.create({
    headers:{
        "Content-Type": "application/json",
    }
});

export const sideApi = async () => {
    let data = [];

    await serverApi.get(`https://port-0-hackbackend-20zynm2mljmm4yrc.sel4.cloudtype.app/`).then((response) => {
        data = response;
        console.log(data);

    })
    return [data];
}