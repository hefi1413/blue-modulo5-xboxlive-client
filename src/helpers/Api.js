import { baseURL } from 'assets/env.js';

const Context = {
  paletaEndpoint: () => baseURL,
  getHomepage: (idprofile) => `${Context.paletaEndpoint()}/auth/${idprofile}`,
  getGameList: () => `${Context.paletaEndpoint()}/all-games/`,
  
  createPaleta: () => `${Context.paletaEndpoint()}/create-paleta`,
  updatePaletaById: (id) => `${Context.paletaEndpoint()}/update-paleta/${id}`,
  deletePaletaById: (id) => `${Context.paletaEndpoint()}/delete-paleta/${id}`,
};

export const Api = {
  ...Context,
};
