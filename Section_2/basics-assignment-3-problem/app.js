const app = Vue.createApp({
  data() {
    return {
      sum: 0,
    };
  },
  computed: {
    result() {
      if (this.sum < 37) {
        return "Not there yet";
      } else if (this.sum === 37) {
        return this.sum;
      } else {
        return "Too much!";
      }
    },
  },
  watch: {
    result() {
      const that = this;
      setTimeout(function () {
        that.sum = 0;
      }, 5000);
    },
  },
  methods: {
    add(num) {
      this.sum += num;
    },
    resetSum() {
      this.sum = 0;
    },
  },
});

app.mount("#assignment");
