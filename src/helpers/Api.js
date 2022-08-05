const BandaContext = {
    bandaEndpoint: () => `${Api.baseUrl}/bandas`,
    bandaLista: () => `${BandaContext.bandaEndpoint()}/all-bandas`,
    bandaById: (id) => `${BandaContext.bandaEndpoint()}/one-banda/${id}`,
    createBanda: () => `${BandaContext.bandaEndpoint()}/create-banda`,
    updateBandaById: (id) => `${BandaContext.bandaEndpoint()}/update-banda/${id}`,
    deleteBandaById: (id) => `${BandaContext.bandaEndpoint()}/delete-banda/${id}`,
};

export const Api = {
    baseUrl: "https://api-myguitar.herokuapp.com",
    ...BandaContext
};
