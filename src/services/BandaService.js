import {Api} from "helpers/Api";

const parseResponse = (response) => response.json();

const parseTransformItem = (response) =>
 parseResponse(response)

export const BandaService = {
    getLista: () =>
        fetch(Api.bandaLista(), { method: "GET"}).then(parseResponse),
    getById: (id) =>
        fetch(Api.bandaById(id), { method: "GET"}).then(parseTransformItem),
    create: () =>
        fetch(Api.createBanda(), { method: "POST"}).then(parseResponse),
    updateById: (id) =>
        fetch(Api.updateBandaById(id), { method: "PUT"}).then(parseResponse),
    deleteById: (id) =>
        fetch(Api.deleteBandaById(id), { method: "DELETE"}).then(parseResponse),
}