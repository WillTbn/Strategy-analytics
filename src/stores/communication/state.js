const state = () => {
  return {
    filters: {
      layout: "text-imagem",
      search: "",
      typeOptions: [
        { label: "", value: "Selecione um opção" },
        { label: "Notícias", value: "news" },
        { label: "Eventos", value: "events" },
        { label: "Alertas", value: "alerts" },
      ],
      authorOptions: [
        { label: "", value: "Selecione um opção" },
        { label: "Autor 1", value: "author_1" },
        { label: "Autor 2", value: "author_2" },
      ],
      dateOptions: [
        { label: "", value: "Selecione um opção" },
        { label: "Última semana", value: "last_week" },
        { label: "Último mês", value: "last_month" },
        { label: "Último ano", value: "last_year" },
      ],
      selectedType: "Selecione um opção",
      selectedDate: "Selecione um opção",
      selectedAuthor: "Selecione um opção",
      onlyNew: false
    }
  };
};

export default state;
