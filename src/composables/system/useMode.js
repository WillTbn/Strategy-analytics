import { useRouter } from "vue-router";
import { useUserStore } from "src/stores/user";
import { storeToRefs } from "pinia";
import { ref } from 'vue'
export default function useMode() {

  const admNavList = [
    {
      can: "all-access",
      toName: { name: "users" },
      name: "Usuários administradores",
      svgIcon: "img:icons/icon-home-icon.svg",
      svgWidth: "51",
      svgHeight: "49",
      svgViewBox: "0 0 448 512",
      svgId: "&#240;&#159;&#166;&#134; icon &#34;home icon&#34;",
      pathId: "Vector",
      pathData:
        "M96 128a128 128 0 1 0 256 0A128 128 0 1 0 96 128zm94.5 200.2l18.6 31L175.8 483.1l-36-146.9c-2-8.1-9.8-13.4-17.9-11.3C51.9 342.4 0 405.8 0 481.3c0 17 13.8 30.7 30.7 30.7H162.5c0 0 0 0 .1 0H168 280h5.5c0 0 0 0 .1 0H417.3c17 0 30.7-13.8 30.7-30.7c0-75.5-51.9-138.9-121.9-156.4c-8.1-2-15.9 3.3-17.9 11.3l-36 146.9L238.9 359.2l18.6-31c6.4-10.7-1.3-24.2-13.7-24.2H224 204.3c-12.4 0-20.1 13.6-13.7 24.2z",
      pathFileRule: "",
      pathClipRule: "",
    },
    {
      // can: "control-reports", eessa é a real tem que troca no banco de dados 
      can: "reports-access",
      toName: { name: "controlReports" },
      name: "Relatórios",
      svgIcon: "img:icons/icon-home-icon.svg",
      svgWidth: "51",
      svgHeight: "49",
      svgViewBox: "0 0 576 512",
      svgId: "&#240;&#159;&#166;&#134; icon &#34;home icon&#34;",
      pathId: "Vector",
      pathData:
        "M249.6 471.5c10.8 3.8 22.4-4.1 22.4-15.5V78.6c0-4.2-1.6-8.4-5-11C247.4 52 202.4 32 144 32C93.5 32 46.3 45.3 18.1 56.1C6.8 60.5 0 71.7 0 83.8V454.1c0 11.9 12.8 20.2 24.1 16.5C55.6 460.1 105.5 448 144 448c33.9 0 79 14 105.6 23.5zm76.8 0C353 462 398.1 448 432 448c38.5 0 88.4 12.1 119.9 22.6c11.3 3.8 24.1-4.6 24.1-16.5V83.8c0-12.1-6.8-23.3-18.1-27.6C529.7 45.3 482.5 32 432 32c-58.4 0-103.4 20-123 35.6c-3.3 2.6-5 6.8-5 11V456c0 11.4 11.7 19.3 22.4 15.5z",
      pathFileRule: "",
      pathClipRule: "",
    },
  ]
  const clientNavList = [
    {
      can: "client",
      toName: { name: "wallet" },
      name: "Inicio",
      svgIcon: "img:icons/icon-home-icon.svg",
      svgWidth: "51",
      svgHeight: "49",
      svgViewBox: "0 0 51 49",
      svgId: "&#240;&#159;&#166;&#134; icon &#34;home icon&#34;",
      pathId: "Vector",
      pathData:
        "M23.8026 0.644877C24.2704 0.229445 24.8743 0 25.5 0C26.1257 0 26.7296 0.229445 27.1974 0.644877L50.2043 21.0955C50.6852 21.5523 50.9697 22.1782 50.9977 22.841C51.0257 23.5037 50.795 24.1514 50.3543 24.6472C49.9136 25.1429 49.2974 25.448 48.636 25.4979C47.9745 25.5478 47.3196 25.3386 46.8095 24.9146L45.9506 24.1554V43.4556C45.9506 44.8116 45.4119 46.112 44.4531 47.0708C43.4943 48.0296 42.1939 48.5682 40.8379 48.5682H10.1621C8.80611 48.5682 7.50569 48.0296 6.54688 47.0708C5.58807 46.112 5.04942 44.8116 5.04942 43.4556V24.1554L4.1905 24.9146C3.68041 25.3386 3.02546 25.5478 2.364 25.4979C1.70255 25.448 1.0864 25.1429 0.645706 24.6472C0.205012 24.1514 -0.0257104 23.5037 0.00227882 22.841C0.030268 22.1782 0.314777 21.5523 0.795703 21.0955L23.8026 0.644877ZM10.1621 19.6051V43.4556H17.831V30.674C17.831 29.996 18.1004 29.3458 18.5798 28.8664C19.0592 28.387 19.7094 28.1177 20.3874 28.1177H30.6126C31.2906 28.1177 31.9408 28.387 32.4202 28.8664C32.8996 29.3458 33.169 29.996 33.169 30.674V43.4556H40.8379V19.6077L25.5 5.97481L10.1621 19.6051ZM28.0563 43.4556V33.2303H22.9437V43.4556H28.0563Z",
      pathFileRule: "",
      pathClipRule: "",
      // svgIcon: "cottage",

      //     Vector    <span class="material-symbols-outlined">
      // cottage
      // </span>
      // <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M304 240V16.6c0-9 7-16.6 16-16.6C443.7 0 544 100.3 544 224c0 9-7.6 16-16.6 16H304zM32 272C32 150.7 122.1 50.3 239 34.3c9.2-1.3 17 6.1 17 15.4V288L412.5 444.5c6.7 6.7 6.2 17.7-1.5 23.1C371.8 495.6 323.8 512 272 512C139.5 512 32 404.6 32 272zm526.4 16c9.3 0 16.6 7.8 15.4 17c-7.7 55.9-34.6 105.6-73.9 142.3c-6 5.6-15.4 5.2-21.2-.7L320 288H558.4z"/></svg>
    },
    {
      can: "client",
      toName: { name: "perfomance" },
      name: "Perfomance",
      svgIcon: "img:icons/icon-performance.svg",
      svgWidth: "47",
      svgHeight: "42",
      svgViewBox: "0 0 47 42",
      svgId: "&#240;&#159;&#166;&#134; icon &#34;performance&#34;",
      pathId: "Vector",
      pathData:
        "M25.6137 18.0147L26.7175 21.3083L27.4459 23.5397C29.3515 29.4574 30.2783 33.0506 30.2783 34.649C30.2783 38.4135 27.2266 41.4652 23.4621 41.4652C19.6977 41.4652 16.646 38.4135 16.646 34.649C16.646 32.8588 17.8084 28.5663 20.2068 21.3083L21.3105 18.0147C22.008 15.9586 24.9162 15.9586 25.6137 18.0147ZM23.4621 0.568237C36.0103 0.568237 46.1826 10.7406 46.1826 23.2888C46.1826 27.8459 44.836 32.2083 42.3532 35.916C41.6551 36.9586 40.2438 37.2379 39.2012 36.5397C38.1585 35.8415 37.8793 34.4303 38.5774 33.3876C40.5631 30.4223 41.6385 26.9385 41.6385 23.2888C41.6385 13.2502 33.5007 5.11234 23.4621 5.11234C13.4235 5.11234 5.28568 13.2502 5.28568 23.2888C5.28568 26.9385 6.36114 30.4223 8.34677 33.3876C9.04494 34.4303 8.76569 35.8415 7.72304 36.5397C6.68038 37.2379 5.26916 36.9586 4.57099 35.916C2.08827 32.2083 0.741577 27.8459 0.741577 23.2888C0.741577 10.7406 10.9139 0.568237 23.4621 0.568237ZM23.4621 26.0129L22.7159 28.4228L22.2 30.1744C21.5306 32.5156 21.1901 34.0318 21.1901 34.649C21.1901 35.9039 22.2073 36.9211 23.4621 36.9211C24.7169 36.9211 25.7342 35.9039 25.7342 34.649C25.7342 33.8943 25.225 31.7956 24.2281 28.4882L23.4621 26.0129Z",
      pathFileRule: "evenodd",
      pathClipRule: "evenodd",

      //id="Vector" fill-rule="evenodd" clip-rule="evenodd"
      // svgIcon: "fa-solid fa-gauge",
    },
    {
      can: "client",
      toName: { name: "graphic" },
      name: "Graficos",
      svgIcon: "img:icons/icon-home-icon.svg",
      svgWidth: "51",
      svgHeight: "49",
      svgViewBox: "0 0 576 512",
      svgId: "&#240;&#159;&#166;&#134; icon &#34;home icon&#34;",
      pathId: "Vector",
      pathData:
        "M304 240V16.6c0-9 7-16.6 16-16.6C443.7 0 544 100.3 544 224c0 9-7.6 16-16.6 16H304zM32 272C32 150.7 122.1 50.3 239 34.3c9.2-1.3 17 6.1 17 15.4V288L412.5 444.5c6.7 6.7 6.2 17.7-1.5 23.1C371.8 495.6 323.8 512 272 512C139.5 512 32 404.6 32 272zm526.4 16c9.3 0 16.6 7.8 15.4 17c-7.7 55.9-34.6 105.6-73.9 142.3c-6 5.6-15.4 5.2-21.2-.7L320 288H558.4z",
      pathFileRule: "",
      pathClipRule: "",
      // svgIcon: "cottage",

      //     Vector    <span class="material-symbols-outlined">
      // cottage
      // </span>
      // <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M304 240V16.6c0-9 7-16.6 16-16.6C443.7 0 544 100.3 544 224c0 9-7.6 16-16.6 16H304zM32 272C32 150.7 122.1 50.3 239 34.3c9.2-1.3 17 6.1 17 15.4V288L412.5 444.5c6.7 6.7 6.2 17.7-1.5 23.1C371.8 495.6 323.8 512 272 512C139.5 512 32 404.6 32 272zm526.4 16c9.3 0 16.6 7.8 15.4 17c-7.7 55.9-34.6 105.6-73.9 142.3c-6 5.6-15.4 5.2-21.2-.7L320 288H558.4z"/></svg>
    },
    {
      can: "client",
      toName: { name: "calendar" },
      name: "Calendário",
      svgIcon: "img:icons/icon-calendar.svg",
      svgWidth: "37",
      svgHeight: "39",
      svgViewBox: "0 0 37 39",
      svgId: "&#240;&#159;&#166;&#134; icon &#34;calendar&#34;",
      pathId: "Vector",
      pathData:
        "M12.4277 0.46521C12.9612 0.46521 13.4728 0.677133 13.85 1.05436C14.2272 1.43158 14.4392 1.94321 14.4392 2.47669V4.48817H22.4851V2.47669C22.4851 1.94321 22.697 1.43158 23.0742 1.05436C23.4515 0.677133 23.9631 0.46521 24.4966 0.46521C25.03 0.46521 25.5417 0.677133 25.9189 1.05436C26.2961 1.43158 26.508 1.94321 26.508 2.47669V4.48817H32.5425C33.6094 4.48817 34.6327 4.91201 35.3871 5.66646C36.1416 6.42091 36.5654 7.44417 36.5654 8.51112V34.6603C36.5654 35.7273 36.1416 36.7505 35.3871 37.505C34.6327 38.2594 33.6094 38.6833 32.5425 38.6833H4.38178C3.31483 38.6833 2.29157 38.2594 1.53712 37.505C0.782671 36.7505 0.358826 35.7273 0.358826 34.6603V8.51112C0.358826 7.44417 0.782671 6.42091 1.53712 5.66646C2.29157 4.91201 3.31483 4.48817 4.38178 4.48817H10.4162V2.47669C10.4162 1.94321 10.6281 1.43158 11.0054 1.05436C11.3826 0.677133 11.8942 0.46521 12.4277 0.46521ZM10.4162 8.51112H4.38178V14.5456H32.5425V8.51112H26.508V10.5226C26.508 11.0561 26.2961 11.5677 25.9189 11.9449C25.5417 12.3222 25.03 12.5341 24.4966 12.5341C23.9631 12.5341 23.4515 12.3222 23.0742 11.9449C22.697 11.5677 22.4851 11.0561 22.4851 10.5226V8.51112H14.4392V10.5226C14.4392 11.0561 14.2272 11.5677 13.85 11.9449C13.4728 12.3222 12.9612 12.5341 12.4277 12.5341C11.8942 12.5341 11.3826 12.3222 11.0054 11.9449C10.6281 11.5677 10.4162 11.0561 10.4162 10.5226V8.51112ZM32.5425 18.5685H4.38178V34.6603H32.5425V18.5685Z",
      pathFileRule: "",
      pathClipRule: "",
    },
    {
      can: "client",
      toName: { name: "report" },
      name: "Relatório",
      svgIcon: "img:icons/icon-alternate-file.svg",
      svgWidth: "33",
      svgHeight: "44",
      svgViewBox: "0 0 33 44",
      svgId: "&#240;&#159;&#166;&#134; icon &#34;Alternate File&#34;",
      pathId: "Vector",
      pathData:
        "M24.5099 21.4733V23.8206C24.5099 24.3739 24.0572 24.8266 23.5039 24.8266H9.42035C8.86706 24.8266 8.41438 24.3739 8.41438 23.8206V21.4733C8.41438 20.9201 8.86706 20.4674 9.42035 20.4674H23.5039C24.0572 20.4674 24.5099 20.9201 24.5099 21.4733ZM23.5039 27.5091H9.42035C8.86706 27.5091 8.41438 27.9618 8.41438 28.5151V30.8624C8.41438 31.4157 8.86706 31.8683 9.42035 31.8683H23.5039C24.0572 31.8683 24.5099 31.4157 24.5099 30.8624V28.5151C24.5099 27.9618 24.0572 27.5091 23.5039 27.5091ZM32.5576 11.7406V39.5808C32.5576 41.8023 30.7552 43.6046 28.5337 43.6046H4.39051C2.169 43.6046 0.366638 41.8023 0.366638 39.5808V4.70722C0.366638 2.48571 2.169 0.68335 4.39051 0.68335H21.5003C22.565 0.68335 23.5877 1.11089 24.3422 1.86536L31.3756 8.89875C32.1301 9.64484 32.5576 10.676 32.5576 11.7406ZM21.8273 5.03416V11.4137H28.2068L21.8273 5.03416ZM28.5337 39.5808V15.4375H19.8153C18.7004 15.4375 17.8034 14.5406 17.8034 13.4256V4.70722H4.39051V39.5808H28.5337Z",
      pathFileRule: "",
      pathClipRule: "",
    },
    {
      can: "client",
      toName: { name: "loan" },
      name: "Emprestimo",
      svgIcon: "img:icons/icon-money-withdrawal.svg",
      svgWidth: "38",
      svgHeight: "36",
      svgViewBox: "0 0 38 36",
      svgId: "&#240;&#159;&#166;&#134; icon &#34;money-withdrawal&#34;",
      pathId: "Vector",
      pathData:
        "M36.2727 0.604492H1.72727C1.26917 0.604492 0.829833 0.786472 0.505906 1.1104C0.18198 1.43432 0 1.87366 0 2.33176V16.1499C0 16.608 0.18198 17.0474 0.505906 17.3713C0.829833 17.6952 1.26917 17.8772 1.72727 17.8772H6.90909V33.4227C6.90909 33.8808 7.09107 34.3201 7.415 34.644C7.73892 34.968 8.17826 35.1499 8.63636 35.1499H29.3636C29.8217 35.1499 30.2611 34.968 30.585 34.644C30.9089 34.3201 31.0909 33.8808 31.0909 33.4227V17.8772H36.2727C36.7308 17.8772 37.1702 17.6952 37.4941 17.3713C37.818 17.0474 38 16.608 38 16.1499V2.33176C38 1.87366 37.818 1.43432 37.4941 1.1104C37.1702 0.786472 36.7308 0.604492 36.2727 0.604492ZM10.3636 31.6954V28.2409C11.2798 28.2409 12.1585 28.6048 12.8064 29.2527C13.4542 29.9005 13.8182 30.7792 13.8182 31.6954H10.3636ZM27.6364 31.6954H24.1818C24.1818 30.7792 24.5458 29.9005 25.1936 29.2527C25.8415 28.6048 26.7202 28.2409 27.6364 28.2409V31.6954ZM27.6364 24.7863C25.804 24.7863 24.0466 25.5142 22.7509 26.8099C21.4552 28.1056 20.7273 29.863 20.7273 31.6954H17.2727C17.2727 29.863 16.5448 28.1056 15.2491 26.8099C13.9534 25.5142 12.196 24.7863 10.3636 24.7863V10.9681H27.6364V24.7863ZM34.5455 14.4227H31.0909V9.24086C31.0909 8.78275 30.9089 8.34342 30.585 8.01949C30.2611 7.69556 29.8217 7.51358 29.3636 7.51358H8.63636C8.17826 7.51358 7.73892 7.69556 7.415 8.01949C7.09107 8.34342 6.90909 8.78275 6.90909 9.24086V14.4227H3.45455V4.05904H34.5455V14.4227ZM19 23.059C20.0249 23.059 21.0267 22.7551 21.8789 22.1857C22.731 21.6164 23.3952 20.8071 23.7874 19.8602C24.1796 18.9134 24.2822 17.8715 24.0823 16.8663C23.8823 15.8611 23.3888 14.9378 22.6641 14.2131C21.9394 13.4884 21.0161 12.9949 20.0109 12.795C19.0057 12.595 17.9639 12.6976 17.017 13.0898C16.0702 13.482 15.2609 14.1462 14.6915 14.9984C14.1221 15.8505 13.8182 16.8524 13.8182 17.8772C13.8182 19.2515 14.3641 20.5695 15.3359 21.5413C16.3077 22.5131 17.6257 23.059 19 23.059ZM19 16.1499C19.3416 16.1499 19.6756 16.2512 19.9596 16.441C20.2437 16.6308 20.4651 16.9006 20.5958 17.2162C20.7265 17.5318 20.7607 17.8791 20.6941 18.2142C20.6274 18.5493 20.4629 18.857 20.2214 19.0986C19.9798 19.3401 19.672 19.5047 19.337 19.5713C19.0019 19.6379 18.6546 19.6037 18.339 19.473C18.0234 19.3423 17.7536 19.1209 17.5638 18.8368C17.374 18.5528 17.2727 18.2188 17.2727 17.8772C17.2727 17.4191 17.4547 16.9798 17.7786 16.6559C18.1026 16.3319 18.5419 16.1499 19 16.1499Z",
      pathFileRule: "",
      pathClipRule: "",
      // svgIcon: "fa-solid fa-circle-dollar-to-slot",
    },
  ]


  return {
    // isMenuList,
    clientNavList,
    admNavList,
  };
}