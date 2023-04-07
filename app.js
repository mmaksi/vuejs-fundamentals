// Define a root component and mount the Vue app into it.
const vm = Vue.createApp({
  data() {
    return {
      message: "Hello Vue!",
      firstName: "John",
      lastName: "Doe",
    };
  },
  methods: {
    fullName() {
      return `${this.firstName.toUpperCase()} ${this.lastName.toUpperCase()}`;
    },
  },
}).mount("#app");

setTimeout(() => {
  vm.message = `Hello, ${vm.firstName}`;
}, 2000);
