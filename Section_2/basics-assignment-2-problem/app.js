const app = Vue.createApp({
  data() {
    return {
      dynamicText1: "",
      confirmedText: "",
      dynamicText2: "",
    };
  },
  methods: {
    showAlert() {
      alert("be wary!");
    },
    setText(event) {
      this.dynamicText1 = event.target.value;
    },
    setText2(event) {
      this.dynamicText2 = event.target.value;
    },
    confirmInput() {
      this.confirmedText = this.dynamicText2;
    },
  },
});

app.mount("#assignment");
