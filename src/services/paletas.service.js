const Paleta = require('../models/Paleta');

const findPaletasService = async () => {
  const paletas = await Paleta.find();
  return paletas;
};

const findPaletaByIdService = async (id) => {
  const paleta = await Paleta.findById(id);
  return paleta;
};

const createPaletaService = async (paleta) => {
  const newPaleta = await Paleta.create(paleta);
  return newPaleta;
};

const updatePaletaService = async (id, paleta) => {
  const paletaEdited = await Paleta.findByIdAndUpdate(id, paleta);
  return paletaEdited;
};

const deletePaletaService = async (id) => {
  return await Paleta.findByIdAndDelete(id);
};

module.exports = {
  findPaletasService,
  findPaletaByIdService,
  createPaletaService,
  updatePaletaService,
  deletePaletaService,
};
