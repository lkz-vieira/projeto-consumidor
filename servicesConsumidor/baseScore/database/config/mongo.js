let docs = [
  {
    assets: [
      { name: "Casa na Praia", value: "1.200.000.00" },
      { name: "Camionete de Luxo", value: "350.000.00" },
    ],
    cpf: "412.621.860-21",
    age: 29,
    fonte_renda: "royalties",
  },
  {
    assets: [
      { name: "Carro de Passeio", value: "30.000.00" },
      { name: "Apartamento", value: "250.000.00" },
    ],
    cpf: "360.732.320-80",
    age: 33,
    fonte_renda: "salario",
  },
  {
    assets: [{ name: "Caminhao de Carga", value: "330.000.00" }],
    cpf: "703.902.330-05",
    age: 56,
    fonte_renda: "salario",
  },
  {
    assets: [{ name: "Onibus de Passeio", value: "130.000.00" }],
    cpf: "141.133.600-30",
    age: 45,
    fonte_renda: "salario",
  },
  {
    assets: [{ name: "Moto", value: "5.000.00" }],
    cpf: "216.392.690-70",
    age: 19,
    fonte_renda: "salario",
  },
  {
    assets: [{ name: "Carro Esportivo", value: "155.000.00" }],
    cpf: "727.499.470-06",
    age: 22,
    fonte_renda: "salario",
  },
  {
    assets: [
      { name: "Mansao na Praia", value: "2.125.000.00" },
      { name: "Carro de Luxo", value: "625.000.00" },
    ],
    cpf: "071.427.790-80",
    age: 66,
    fonte_renda: "salario",
  },
];

db.clients.insertMany(docs, function (err, res) {
  if (err) throw err;
  db.close();
});
