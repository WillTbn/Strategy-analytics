const state = () => {
  return {
    login: {
      person: "",
      password: "",
    },
    accountEdit: {},
    data: {
      name: "Charles Leclerc",
      email: "leclercchales@gmail.com",
      state: "São pauulo",
      country: "Brasil",
      investidor: "investor Obsidian",
      phone: "(12) 98897-6543",
      account: [
        {
          id: 1,
          bank: "C6 BANK",
          agency: "0507",
          number: "142085-2",
          nickname: "bb",
        },
        {
          id: 2,
          bank: "Bradesco",
          agency: "0507",
          number: "1138605-3",
          nickname: "bra",
        },
      ],
    },
  };
};

export default state;
