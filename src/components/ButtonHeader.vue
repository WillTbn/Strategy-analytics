<template>
  <q-card
    class="bg-grey"
    style="width: 263px; height: 3.5rem"
    :class="{ 't-height': statusMember }"
  >
    <q-card-section class="control-pa" @click.prevent="activeMember">
      <div class="select title-card">
        <span
          class="select text-h4 text-weight-bold control-title"
          style="cursor: pointer"
          :data-text="title"
          >{{ title }}</span
        >
        <span
          class="select text-h4 text-weight-bold control-title"
          style="cursor: pointer"
          :data-text="title"
          >{{ title }}</span
        >
      </div>
    </q-card-section>
    <q-slide-transition :duration="transitionDuration">
      <div v-show="statusMember">
        <q-card-section class="title-card" @click.prevent="setAnimation">
          <span
            class="select text-h6 text-body1 control-title efeito"
            :class="classHover"
            :data-text="title"
          >
            {{ itemOne }}
          </span>
        </q-card-section>
        <q-card-section
          class="select text-h6 text-body1 efeito"
          :class="classHover"
          @click.prevent="setAnimation"
        >
          {{ itemTwo }}
        </q-card-section>
        <q-card-section
          class="select text-h6 text-body1 efeito"
          :class="classHover"
          @click.prevent="setAnimation"
        >
          {{ itemThree }}
        </q-card-section>
      </div>
    </q-slide-transition>
  </q-card>
</template>
<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "ButtonHeader",
  props: {
    title: { type: String, default: "Title Card" },
    itemOne: { type: String, default: "item 1" },
    itemTwo: { type: String, default: "item 2" },
    itemThree: { type: String, default: "item 3" },
    transitionDuration: { type: Number, default: 100 },
    className: { type: String, default: "in-front" },
    classRemove: { type: String, default: "in-remove-front" },
    classHover: { type: String, default: "black" },
  },
  setup(props) {
    const setAnimation = (el) => {
      const sle = document.querySelectorAll(".select");
      // let seletor;
      // console.log("select -> ", sle.length);
      // for (let i = 0; i < sle.length; i++) {
      //   if (el.target.innerHTML == sle[i].innerHTML) {
      //     seletor = sle[i];
      //     break;
      //   }
      // }
      console.log("target -> ", el.target.className);
      const filt = Array.prototype.filter.call(sle, (item) => {
        return item.classList.contains(props.className);
      });
      if (filt != "" && filt.length > 0) {
        filt[0].classList.add(props.classRemove);
        filt[0].classList.remove(props.className);
      }
      // el.target.classList.add(props.className);
    };

    const statusMember = ref(false);
    const activeMember = (el) => {
      const colorButton = document.getElementById("colorButton");

      console.log("->>>", el);
      statusMember.value = !statusMember.value;
      if (statusMember.value) {
        el.target.classList.add(props.className);
        el.target.classList.remove(props.classRemove);
      } else {
        el.target.classList.remove(props.className);
        el.target.classList.add(props.classRemove);
      }
    };
    return {
      statusMember,
      activeMember,
      setAnimation,
    };
  },
});
</script>
<style scoped>
.control-pa {
  padding: 5px !important;
  min-height: 2rem;
  margin-top: 1.5rem;
}
.black:hover {
  color: #000;
}
.red:hover {
  color: rgb(255, 0, 0);
}
.title-card {
  position: relative;
  display: grid;
  place-items: center;
}
.control-title {
  position: absolute;
  animation: color 1s linear;
}
.in-front {
  color: #000;
  animation: polygonText 1s linear;
}
.in-remove-front {
  opacity: 0;
  color: #000;
  animation: polygonTextRemove 1s linear;
}
.in-front-inves {
  color: rgb(255, 0, 0);
  animation: polygonText 1s linear;
}
.in-remove-front-inves {
  opacity: 0;
  color: rgb(255, 0, 0);
  animation: polygonTextRemove 1s linear;
}
.efeito:hover {
  cursor: pointer;
  transition: 1s linear;
}
@keyframes polygonTextRemove {
  5% {
    opacity: 1;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-clip-path: polygon(0 1%, 100% 0%, 100% 99%, 0% 100%);
    clip-path: polygon(0 1%, 100% 0%, 100% 99%, 0% 100%);
  }
  10% {
    opacity: 1;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-clip-path: polygon(0 1%, 100% 0, 59% 99%, 0 100%);
    clip-path: polygon(0 1%, 100% 0, 59% 99%, 0 100%);
  }
  60% {
    opacity: 1;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-clip-path: polygon(0 1%, 69% 1%, 25% 100%, 0 100%);
    clip-path: polygon(0 1%, 69% 1%, 25% 100%, 0 100%);
  }
  100% {
    opacity: 1;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-clip-path: polygon(0 1%, 46% 0, 28% 42%, 0 100%, 0% 50%);
    clip-path: polygon(0 1%, 46% 0, 28% 42%, 0 100%, 0% 50%);
  }
}
@keyframes polygonText {
  5% {
    opacity: 1;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-clip-path: polygon(0 1%, 46% 0, 28% 42%, 0 100%, 0% 50%);
    clip-path: polygon(0 1%, 46% 0, 28% 42%, 0 100%, 0% 50%);
  }
  10% {
    opacity: 1;
    background-clip: text;
    -webkit-background-clip: text;

    -webkit-clip-path: polygon(0 1%, 69% 1%, 25% 100%, 0 100%);
    clip-path: polygon(0 1%, 69% 1%, 25% 100%, 0 100%);
  }
  60% {
    opacity: 1;
    background-clip: text;
    -webkit-background-clip: text;

    -webkit-clip-path: polygon(0 1%, 100% 0, 59% 99%, 0 100%);
    clip-path: polygon(0 1%, 100% 0, 59% 99%, 0 100%);
  }
  100% {
    opacity: 1;
    background-clip: text;
    -webkit-background-clip: text;

    -webkit-clip-path: polygon(0 1%, 100% 0%, 100% 99%, 0% 100%);
    clip-path: polygon(0 1%, 100% 0%, 100% 99%, 0% 100%);
  }
}
.efeito {
  opacity: 0;
  animation: polygonText 8s linear forwards;
  animation-delay: 4s;
}
</style>
