<template>
  <div class="MenuWrapper wrapper d-flex active">
    <div class="sideMenu bg-mattBlackRed rounded-right">
      <div class="sidebar">
        <img src="" alt="" class="rounded-circle" />
        <ul class="navbar-nav">
          <li class="nav-item">
            <a href="<?=$base;?>/" class="nav-link">
              <i class="material-icons icon py-3"> dashboard </i>
              <span class="text">Inicio</span>
            </a>
          </li>
          <li class="nav-item">
            <a href="<?=$base;?>/viewclient" class="nav-link">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                fill="currentColor"
                class="icon bi bi-person-plus"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm6 5c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10zM13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"
                />
              </svg>
              <span class="text">Clientes</span>
            </a>
          </li>
          <li class="nav-item">
            <a href="<?=$base;?>/viewschedule" class="nav-link">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                fill="currentColor"
                class="icon bi bi-journal-plus"
                viewBox="0 0 16 16"
              >
                <path
                  d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z"
                />
                <path
                  d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z"
                />
                <path
                  fill-rule="evenodd"
                  d="M8 5.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V10a.5.5 0 0 1-1 0V8.5H6a.5.5 0 0 1 0-1h1.5V6a.5.5 0 0 1 .5-.5z"
                />
              </svg>
              <span class="text">Agendamentos</span>
            </a>
          </li>

          <li class="nav-item">
            <a href="<?=$base;?>/cadastro" class="nav-link">
              <i class="material-icons icon py-3"> person </i>
              <span class="text">Adicionar Usuarios</span>
            </a>
          </li>
          <li class="nav-item">
            <a href="<?=$base;?>/employee" class="nav-link">
              <!-- <i class="material-icons icon py-3">
                                insert_chart
                            </i> -->
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                class="icon bi bi-file-person"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M12 1H4a1 1 0 0 0-1 1v10.755S4 11 8 11s5 1.755 5 1.755V2a1 1 0 0 0-1-1zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4z"
                />
                <path
                  fill-rule="evenodd"
                  d="M8 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
                />
              </svg>
              <span class="text">Funcionarios</span>
            </a>
          </li>
          <li class="nav-item">
            <a href="<?=$base;?>/calendar" class="nav-link">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                fill="currentColor"
                class="icon bi bi-calendar3"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z"
                />
                <path
                  fill-rule="evenodd"
                  d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
                />
              </svg>
              <span class="text">Calendario</span>
            </a>
          </li>
          <li class="nav-item">
            <a href="<?=$base;?>/configuration" class="nav-link">
              <i class="material-icons icon py-3"> settings </i>
              <span class="text">Configuração</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "MenuWrapper",
  setup() {
    return {};
  },
  // Outras configurações do componente aqui
});
</script>

<style scoped>
/* Estilos específicos do componente aqui */
</style>
