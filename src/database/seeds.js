const seeder = require("mongoose-seed");

const db = "mongodb://mongodb:27017/delivery";

seeder.connect(db, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
  seeder.loadModels([
    "src/models/User.js",
    "src/models/Meal.js",
    "src/models/Order.js",
  ]);
  seeder.clearModels(["User", "Meal", "Order"], () => {
    seeder.populateModels(data, (err, done) => {
      if (err) console.log("seed err", err);
      if (done) console.log("seed done", done);

      seeder.disconnect();
    });
  });
});

const data = [
  {
    model: "User",
    documents: [
      {
        location: {
          coordinates: [-15.813515, -47.906113],
        },
        _id: "60d358cab15a9a00513a4adc",
        name: "Teste da Silva",
        email: "teste@teste.com",
        password: "1234",
        role: "deliveree",
        __v: 0,
      },
      {
        location: {
          coordinates: [-15.808543, -47.900929],
        },
        _id: "60d35d32b15a9a00513a4ade",
        name: "Teste de Oliveira",
        email: "teste@teste.com",
        password: "1234",
        role: "deliveree",
        __v: 0,
      },
      {
        location: {
          coordinates: [-15.8136, -47.9066],
        },
        _id: "60d35d60b15a9a00513a4ae0",
        name: "Teste de Olinda",
        email: "teste@teste.com",
        password: "1234",
        role: "deliveree",
        __v: 0,
      },
      {
        location: {
          coordinates: [],
        },
        _id: "60d3f2ccd0ded4004e75981e",
        name: "Pastelaria Viçosa",
        email: "teste@teste.com",
        password: "1234",
        role: "restaurant",
        __v: 0,
      },
      {
        location: {
          coordinates: [],
        },
        _id: "60d3f2d4d0ded4004e759820",
        name: "Sushi Mania",
        email: "teste@teste.com",
        password: "1234",
        role: "restaurant",
        __v: 0,
      },
      {
        location: {
          coordinates: [],
        },
        _id: "60d3f2e1d0ded4004e759822",
        name: "Bulls Burguer",
        email: "teste@teste.com",
        password: "1234",
        role: "restaurant",
        __v: 0,
      },
      {
        location: {
          coordinates: [],
        },
        _id: "60d3f464d0ded4004e759828",
        name: "Sócrates",
        email: "teste@teste.com",
        password: "1234",
        role: "deliverer",
        __v: 0,
      },
      {
        location: {
          coordinates: [],
        },
        _id: "60d3f46ed0ded4004e75982a",
        name: "Platão",
        email: "teste@teste.com",
        password: "1234",
        role: "deliverer",
        __v: 0,
      },
      {
        location: {
          coordinates: [],
        },
        _id: "60d3f49dd0ded4004e75982c",
        name: "Nietzsche",
        email: "teste@teste.com",
        password: "1234",
        role: "deliverer",
        __v: 0,
      },
    ],
  },
  {
    model: "Meal",
    documents: [
      {
        _id: "60d3ffcaf3bb65012a97acd5",
        name: "Pastel de Carne",
        price: 10.5,
        user: "60d3f2ccd0ded4004e75981e",
        __v: 0,
      },
      {
        _id: "60d3ffe9f3bb65012a97acd7",
        name: "Pastel de Frango",
        price: 10.5,
        user: "60d3f2ccd0ded4004e75981e",
        __v: 0,
      },
      {
        _id: "60d3fff8f3bb65012a97acd9",
        name: "Pastel de Palmito",
        price: 10.5,
        user: "60d3f2ccd0ded4004e75981e",
        __v: 0,
      },
      {
        _id: "60d400a79d54700138e148e2",
        name: "Sushi de Salmão",
        price: 100.75,
        user: "60d3f2d4d0ded4004e759820",
        __v: 0,
      },
      {
        _id: "60d400b79d54700138e148e4",
        name: "Sushi de Kani",
        price: 100.75,
        user: "60d3f2d4d0ded4004e759820",
        __v: 0,
      },
      {
        _id: "60d400c29d54700138e148e6",
        name: "Sushi de Manga",
        price: 100.75,
        user: "60d3f2d4d0ded4004e759820",
        __v: 0,
      },
      {
        _id: "60d401659d54700138e148ea",
        name: "Hamburguer de Alcatra",
        price: 50.33,
        user: "60d3f2e1d0ded4004e759822",
        __v: 0,
      },
      {
        _id: "60d401709d54700138e148ec",
        name: "Hamburguer de Frango",
        price: 50.33,
        user: "60d3f2e1d0ded4004e759822",
        __v: 0,
      },
      {
        _id: "60d4017c9d54700138e148ee",
        name: "Hamburguer do Futuro",
        price: 50.33,
        user: "60d3f2e1d0ded4004e759822",
        __v: 0,
      },
    ],
  },
  {
    model: "Order",
    documents: [
      {
        _id: "60d40292b7e5630146ae078c",
        meal: "60d401659d54700138e148ea",
        user: "60d358cab15a9a00513a4adc",
        __v: 0,
      },
      {
        _id: "60d402c8b7e5630146ae078e",
        meal: "60d400c29d54700138e148e6",
        user: "60d35d32b15a9a00513a4ade",
        __v: 0,
      },
      {
        _id: "60d40330b7e5630146ae0790",
        meal: "60d3ffe9f3bb65012a97acd7",
        user: "60d35d60b15a9a00513a4ae0",
        __v: 0,
      },
    ],
  },
];
