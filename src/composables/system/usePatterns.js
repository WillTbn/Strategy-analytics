export default function usePatterns() {
  const users = [
    {
      cpf: "448.811.378-83",
      password: "Strategy",
      name: "Éric Siqueira Vicente",
      email: "fantoma2010.siqueira@gmail.com",
      state: "São Paulo",
      country: "Brasil",
      investor: "Investor Strategy",
      phone: "(12) 981578736",
      role_id: 1,
      abilities: ["all-access", "view-users", "view-clients"],
      avatar:
        "https://strategyconect.com/wp-content/uploads/2023/12/circular_image_3_minimal_zoom.png",
      account: [
        {
          id: 2,
          bank: " 336 - Banco C6 S.A.",
          agency: "0001",
          number: "20043688-0",
          nickname: "C6 bank",
        },
      ],
      profit_date: { label: "5º dia útil do mês", value: "five", id: 0 },
      loan: {
        datas: [
          { name: "Saldor devedor", value: "430.034,83" },
          { name: "Valor contratado", value: "395.535,43" },
          { name: "Parcela", value: "9 de 48" },
          { name: "Valor da parcela", value: "3.485,91" },
        ],
        info: [
          { name: "Próximo vencimento:", value: "12/03/2024" },
          { name: "Taxa de juros ao mês:", value: "1,98%" },
        ],
      },
    },
    {
      cpf: "152.111.222-77",
      password: "Strategy",
      name: "Jorge Nunes",
      email: "jlbnunes@gmail.com",
      state: "Rio de Janeiro",
      country: "Brasil",
      investor: "investor Obsidian",
      phone: "(12) 98342-5387",
      role_id: 1,
      abilities: ["all-access", "view-users", "view-clients"],
      avatar: "https://jorgenunes.vercel.app/assets/img/Jorge_Nunes-dev.jpeg",
      account: [
        {
          id: 2,
          bank: "Bradesco",
          agency: "0507",
          number: "1138605-3",
          nickname: "bra",
        },
      ],
      profit_date: { label: "1º dia útil do mês", value: "first", id: 0 },
      investment: {
        initial: 50000,
        current: 0,
      },
      loan: {
        datas: [
          { name: "Saldor devedor", value: "130.034,83" },
          { name: "Valor contratado", value: "595.535,43" },
          { name: "Parcela", value: "47 de 48" },
          { name: "Valor da parcela", value: "10.485,91" },
        ],
        info: [
          { name: "Próximo vencimento:", value: "06/03/2024" },
          { name: "Taxa de juros ao mês:", value: "0,98%" },
        ],
      },
    },
    {
      cpf: "111.111.111-11",
      password: "Strategy",
      name: "Maria Fasques Monteiro",
      email: "mariafasquesmonteiro@gmail.com",
      state: "California",
      country: "USA",
      investor: "investor Obsidian",
      phone: "(51) 322-5387",
      avatar: "https://reqres.in/img/faces/3-image.jpg",
      role_id: 3,
      abilities: ["client"],
      account: [
        {
          id: 2,
          bank: "Bradesco",
          agency: "0507",
          number: "1138605-3",
          nickname: "bra",
        },
      ],
      profit_date: { label: "1º dia útil do mês", value: "first", id: 0 },
      investment: {
        initial: 50000,
        current: 0,
      },
      wallet: {
        current: 0.0,
      },
      loan: {
        current: 0.0,
      },
      loan: {
        datas: [
          { name: "Saldor devedor", value: "1.034,83" },
          { name: "Valor contratado", value: "25.535,43" },
          { name: "Parcela", value: "30 de 48" },
          { name: "Valor da parcela", value: "1.485,91" },
        ],
        info: [
          { name: "Próximo vencimento:", value: "22/03/2024" },
          { name: "Taxa de juros ao mês:", value: "2,98%" },
        ],
      },
    },
    {
      cpf: "222.222.222-22",
      password: "Strategy",
      name: "João Velasques Todesgo",
      email: "joaov.todesgosdadsadasdasdsadasdsad@gmail.com",
      state: "Victoria",
      country: "Australia",
      investor: "investor Obsidian",
      phone: "(48) 32321-5387",
      avatar: "https://reqres.in/img/faces/9-image.jpg",
      role_id: 3,
      abilities: [],
      account: [
        {
          id: 2,
          bank: "Bradesco",
          agency: "0507",
          number: "1138605-3",
          nickname: "bra",
        },
      ],
      profit_date: { label: "1º dia útil do mês", value: "first", id: 0 },
      investment: {
        initial: 20000,
        current: 20.0,
      },
      wallet: {
        initial: 1000,
        current: 100,
      },
      loan: {
        current: 0.0,
        datas: [
          { name: "Saldor devedor", value: "34,83" },
          { name: "Valor contratado", value: "55.555,43" },
          { name: "Parcela", value: "48 de 48" },
          { name: "Valor da parcela", value: "1.485,91" },
        ],
        info: [
          { name: "Próximo vencimento:", value: "22/03/2024" },
          { name: "Taxa de juros ao mês:", value: "0,98%" },
        ],
      },
    },
    {
      cpf: "037.855.176-02",
      password: "Simone1%",
      name: "Simone Dos Santos Cateringer",
      email: "simalhas5@gmail.com",
      state: "Minas Gerais",
      country: "Brasil",
      investor: "investor Obsidian",
      phone: "(35) 9725-1727",
      avatar: "https://strategyanalytics.com.br/system/profiles/simone.jpg",
      abilities: ["client"],
      role_id: 3,
      account: [],
      profit_date: { label: "1º dia útil do mês", value: "first", id: 0 },
      investment: {
        initial: "0",
        current: null,
      },
      wallet: {
        current: 0.0,
      },
      loan: {
        current: 0.0,
      },
    },
  ];

  return {
    users,
  };
}
