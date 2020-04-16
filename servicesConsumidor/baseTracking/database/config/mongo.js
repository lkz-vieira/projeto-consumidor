let docs = [
  {
    last_buy: {
      shop: "Lojas Top Tenis",
      product: "Tenis Nike",
      value: "300.00",
      date: new Date(),
    },
    financial_movement: [{ properties: false }, { savings: false }],
    cpf: "412.621.860-21",
    last_search: new Date(),
  },
  {
    last_buy: {
      shop: "Academia Treino Pesado",
      product: "Mensalidade",
      value: "60.00",
      date: new Date(),
    },
    financial_movement: [{ properties: false }, { savings: false }],
    cpf: "360.732.320-80",
    last_search: new Date(),
  },
  {
    last_buy: {
      shop: "Rubi Joias",
      product: "Relogio de Luxo",
      value: "700.00",
      date: new Date(),
    },
    financial_movement: [{ properties: true }, { savings: false }],
    cpf: "703.902.330-05",
    last_search: new Date(),
  },
  {
    last_buy: {
      shop: "Restaurante Tokyo",
      product: "Rodizio Sushi",
      value: "80.00",
      date: new Date(),
    },
    financial_movement: [{ properties: true }, { savings: true }],
    cpf: "141.133.600-30",
    last_search: new Date(),
  },
  {
    last_buy: {
      shop: "Restaurante Mineiro",
      product: "Prato Feito",
      value: "18.00",
      date: new Date(),
    },
    financial_movement: [{ properties: true }, { savings: true }],
    cpf: "216.392.690-70",
    last_search: new Date(),
  },
  {
    last_buy: {
      shop: "Eletronicos Blumenau",
      product: "Headphone",
      value: "188.00",
      date: new Date(),
    },
    financial_movement: [{ properties: true }, { savings: true }],
    cpf: "727.499.470-06",
    last_search: new Date(),
  },
  {
    last_buy: {
      shop: "Floricultura Rosa",
      product: "Vaso de Planta",
      value: "50.00",
      date: new Date(),
    },
    financial_movement: [{ properties: true }, { savings: true }],
    cpf: "071.427.790-80",
    last_search: new Date(),
  },
];

db.clients.insertMany(docs, function (err, res) {
  if (err) throw err;
  db.close();
});
