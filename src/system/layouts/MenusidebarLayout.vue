<!-- <template>
  <div class="MenusidebarLayout">
    <div class="wrapper row active">
      <div class="sideMenu bg-mattBlackRed rounded-right">
        <div class="sidebar">
          <img src="" alt="" class="rounded-circle" />
          <ul class="navbar-nav">
            <li class="nav-item">
              <a href="#" class="nav-link">
                <i class="material-icons icon py-3"> dashboard </i>
                <span class="text">Inicio</span>
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link">
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
              <a href="#" class="nav-link">
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
              <a href="#" class="nav-link">
                <i class="material-icons icon py-3"> person </i>
                <span class="text">Adicionar Usuarios</span>
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link">

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
              <a href="#" class="nav-link">
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
              <a href="#" class="nav-link">
                <i class="material-icons icon py-3"> settings </i>
                <span class="text">Configuração</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div class="position-absolute">teste</div>
</template>

<script>
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "MenusidebarLayout",
  setup() {
    return {};
  },
  // Outras configurações do componente aqui
});
</script>

<style lang="sass" scoped>
@function rem($value)
  @return unquote(($value/1px)/16+"rem")
$easeTime:0.25s
$margin-top:56px
$with-wrapper:200px
/* Estilos específicos do componente aqui */
.wrapper
  top:0
  bottom:0
  left:0
  margin:rem($margin-top) auto auto
  width: rem($with-wrapper)
  transition: all ease $easeTime
  // transform: translateX(-100%)
  z-index: 2000
  position: fixed
  background: #e32636
  .content
    width: 100%
    margin-left: rem(0px)
    transition: all ease $easeTime
    &.active
      .sideMenu
        transform: translateX(0)
.nav-link
  display: block
  white-space: nowrap
  .icon
    margin-right: rem(4px)
    font-size:rem(30px)
    vertical-align: middle
    width: rem(32px)
    height: rem(32px)
    color: #fff
    display: inline-flex
    justify-content: center
    align-items: center
  .text
    font-size: rem(14px)
    color: white
  &:hover,
  &.active
    background: #fff
    .icon,.text
    color: #e32636
</style> -->
<template>
  <div class="MenusidebarLayout row">
    <div class="wrapper" :class="{ 'active ': statusMenu }">
      <div class="sideMenu">
        <q-list class="q-pt-xl q-mt-xl">
          <!--   q-mx-sm q-px-sm -->
          <q-item
            v-for="list in listMenu"
            :key="list"
            clickable
            active-class="bg-primary rounded"
            exact
            v-ripple
            :to="list.toName"
            class="control-item"
          >
            <!-- :active-class="dark ? 'bg-dark rounded' : 'bg-primary rounded'" -->
            <!-- active-class="bg-primary rounded" -->
            <q-item-section avatar>
              <q-icon :name="list.svgIcon" />
            </q-item-section>

            <q-item-section class="text-list"> {{ list.name }} </q-item-section>
          </q-item>
        </q-list>
      </div>
      <div class="button-side" @click="statusMenu = !statusMenu">
        <q-avatar color="transparent" class="avatar-icon">
          <q-icon name="img:icons/vector.svg" class="icon-select" />
        </q-avatar>
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "MenusidebarLayout",
  setup() {
    const statusMenu = ref(false);
    const listMenu = [
      {
        toName: { name: "dashboard" },
        name: "Inicio",
        svgIcon: "img:icons/icon-home-icon.svg",
      },
      {
        toName: { name: "perfomance" },
        name: "Perfomance",
        svgIcon: "img:icons/icon-performance.svg",
      },
      {
        toName: { name: "calendar" },
        name: "Calendário",
        svgIcon: "img:icons/icon-calendar.svg",
      },
      {
        toName: { name: "report" },
        name: "Relatório",
        svgIcon: "img:icons/icon-alternate-file.svg",
      },
      {
        toName: { name: "loan" },
        name: "Emprestimo",
        svgIcon: "img:icons/icon-money-withdrawal.svg",
      },
    ];
    return { listMenu, statusMenu };
  },
  // Outras configurações do componente aqui
});
</script>
<style>
/* .q-item {
  align-items: center;
  min-height: 48px;
  padding: 0;
  color: inherit;
  transition: color 0.3s, background-color 0.3s;
} */
.wrapper {
  display: flex;
  position: fixed;
  top: 0px;
  bottom: 0px;
  left: 0;
  /* margin: 1.2rem auto auto; */
  /* width: 200px; */
  transition: all ease 0.25s;
  transform: translateX(-10%);
  /* background: #f1f3fb; */
  z-index: 2000;
  border-radius: 26px;
  /* box-shadow: 0 0 10px #999; */
  background-image: url("Union.png");
  background-repeat: no-repeat;
  transition: all ease 0.95s;
  background-position-x: right;
  background-size: 227%;
}
.sideMenu {
  margin-left: 1rem;
}
.active {
  transform: translateX(0) !important;
}
.text-list {
  display: none;
  align-self: center;
}
.button-side {
  margin-top: 46.5vh;
  transition: all ease 0.95s;
}
.icon-select {
  transition: all ease 0.95s;
  margin-left: 15%;
}
.avatar-icon {
  clip-path: path("M 200 200 L 0,35 A 5,5 0,0,1 200,85 L 200 150 z");

  /* clip-path: path("M-50,-50q-25,50 0,100h100v-100 z"); */
}
.control-item {
  width: 4em;
  border-radius: 16px;
  transition: all ease 2s;
}
.wrapper:where(.active) {
  transform: translateX(0px) !important;

  width: auto;
  background-repeat: round;
  transition: all ease 0.95s;
  background-position-x: right;
  background-size: 200%;

  .text-list {
    display: block;
  }
  .button-side {
    margin-left: -5%;
    /* transform: rotate(80deg); */
    /* transform: rotateY(180deg); */

    /* transform-origin: center; */
  }
  .icon-select {
    transform: rotate(180deg);
  }
  .control-item {
    width: auto !important;
  }
}
</style>
