import {Api} from "helpers/Api";

const parseResponse = (response) => response.json();



export const BandaService = {
    getLista: () =>
        fetch(Api.bandaLista(), { method: "GET"}).then(parseResponse),
    getById: (id) =>
        fetch(Api.bandaById(id), { method: "GET"}).then(parseResponse),
    create: (banda) =>
        fetch(Api.createBanda(), { method: "POST", body: JSON.stringify(banda), mode: "cors", headers: {
            "Content-Type": "application/json",}}).then(parseResponse),
    updateById: (id) =>
        fetch(Api.updateBandaById(id), { method: "PUT"}).then(parseResponse),
    deleteById: (id) =>
        fetch(Api.deleteBandaById(id), { method: "DELETE"}).then(parseResponse),
}