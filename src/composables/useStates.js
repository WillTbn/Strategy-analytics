export default function useStates() {
  const get = async (country) => {
    const states = {
      1: [
        "Gran Chaco",
        "Mesopotâmia",
        "Cuyo",
        "Pampas",
        "Litoral",
        "Patagonia",
        "Noroeste argentino",
      ],
      3: [
        "Nova Gales do Sul",
        "Queensland",
        "Austrália do Sul",
        "Tasmânia",
        "Victoria ",
        "Austrália Ocidental",
      ],
      2: [
        "AK: Alasca",
        "AL: Alabama",
        "AR: Arkansas",
        "AZ: Arizona",
        "CA: Califórnia",
        "CO: Colorado",
        "CT: Connecticut",
        "DE: Delaware",
        "FL: Flórida",
        "GA: Geórgia",
        "HI: Havaí",
        "IA: Iowa",
        "ID: Idaho",
        "IL: Illinois",
        "IN: Indiana",
        "KS: Kansas",
        "KY: Kentucky",
        "LA: Louisiana",
        "MA: Massachusetts",
        "MD: Maryland",
        "ME: Maine",
        "MI: Michigan",
        "MN: Minnesota",
        "MO: Missouri",
        "MS: Mississippi",
        "MT: Montana",
        "NC: Carolina do Norte",
        "ND: Dakota do Norte",
        "NE: Nebraska",
        "NH: Nova Hampshire",
        "NJ: Nova Jérsei",
        "NM: Novo México",
        "NV: Nevada",
        "NY: Nova Iorque",
        "OH: Ohio",
        "OK: Oklahoma",
        "OR: Oregon",
        "PA: Pensilvânia",
        "RI: Rhode Island",
        "SC: Carolina do Sul",
        "SD: Dakota do Sul",
        "TN: Tennessee",
        "TX: Texas",
        "UT: Utah",
        "VT: Vermont",
        "VA: Virgínia",
        "WA: Washington",
        "WI: Wisconsin",
        "WV: Virgínia Ocidental",
        "WY: Wyoming",
      ],

      4: [
        "Aveiro",
        "Beja",
        "Braga",
        "Bragança",
        "Castelo Branco",
        "Coimbra",
        "Évora",
        "Faro",
        "Guarda",
        "Leiria",
        "Lisboa",
        "Portalegre",
        "Porto",
        "Santarém",
        "Setúbal",
        "Viana do Castelo",
        "Vila Real",
        " Viseu ",
      ],
      0: [
        "Acre",
        "Alagoas",
        "Amapá",
        "Amazonas",
        "Bahia",
        "Ceará",
        "Distrito Federal",
        "Espírito Santo",
        "Goiás",
        "Maranhão",
        "Mato Grosso",
        "Mato Grosso do Sul",
        "Minas Gerais",
        "Pará",
        "Paraíba",
        "Paraná",
        "Pernambuco",
        "Piauí",
        "Rio de Janeiro",
        "Rio Grande do Norte",
        "Rio Grande do Sul",
        "Rondônia",
        "Roraima",
        "Santa Catarina",
        "São Paulo",
        "Sergipe",
        "Tocantins",
      ],
    };
    // console.log(states[country]);
    return states[country];
  };
  const dimension = (value) => {
    // const dimension = window.innerWidth;
    let scaleValue;

    if (value <= 599) {
      scaleValue = 0.7;
    } else if (value > 600 && value <= 1023) {
      scaleValue = 0.8;
    } else if (value > 1024 && value <= 1439) {
      scaleValue = 1.15;
    } else if (value > 1440 && value <= 1919) {
      scaleValue = 1.22;
    } else if (value > 1920) {
      scaleValue = 2;
    }
    return scaleValue;
  };
  return {
    get,
    dimension,
  };
}
