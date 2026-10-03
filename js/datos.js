export const categorias = ["laptops", "smartphones", "tablets", "audio"];

export const contarPorCategoria = (items) =>
    items.reduce((cuenta, {categoria}) => ({...cuenta, [categoria] : (cuenta[categoria] ?? 0) + 1}),{})