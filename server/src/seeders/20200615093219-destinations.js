"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Destinations", [
      {
        destination: "Rome",
        link:
          "https://lh3.googleusercontent.com/proxy/ASlQ-e0CQ6-tun3EEYUOeRWyhUvUn-AhR8Alv7Xv2G3Tg0KNepZXr-gkYPay5ALkZ1vd1vh6X44MseSOxV4wezE19ein7Wrv1QkrOYeLZ1WStwJkGIwfgcbU6PXrQpJESTIBao-UPMFG",
        description:
          "Incredible Italy city ful of ancient history and outstanding sights",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        destination: "Paris",
        link:
          "https://img-fotki.yandex.ru/get/893240/230484126.1cfe/0_21e499_8f10390f_orig.jpg",
        description: "Marvellous France city where all about beaty and love",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        destination: "Moscow",
        link:
          "https://www.codelt.nl/wp-content/uploads/2016/05/Moscow-Russia-e1555591392782.jpg",
        description:
          "Ancient Russia capital, where you can waych matreshka, vodka and bears :)",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Destinations", null, {});
  },
};
