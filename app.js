// Define a root component and mount the Vue app into it.
const vm = Vue.createApp({
  data() { // This is used to store single values
    return {
      message: "Hello Vue!",
      firstName: "John",
      middleName: "",
      lastName: "Doe",
      url: "https://www.google.com",
      raw_html: "https://www.google.com",
      age: 20,
    };
  },
  methods: { // This is used to store functions
    fullName() {
      // This runs everytime data properties are changed
      return `${this.firstName.toUpperCase()} ${this.middleName.toUpperCase()} ${this.lastName.toUpperCase()}`;
    },
    increment() {
      return this.age++;
    },
    updateLastName(msg, event) {
      this.lastName = event.target.value;
      console.log(msg);
    },
    updateMiddleName(event) {
      if (event.key === "h" || event.key === "H") {
        this.lastName = event.target.value;
      }
    },
  },
  computed: { // This is used for functions that calculate a value
    fullName() {
      // This runs only when data used here is changed
      return `${this.firstName.toUpperCase()} ${this.middleName.toUpperCase()} ${this.lastName.toUpperCase()}`;
    },
  },
  watch: { // For async tasks
    age(newVal, oldVal) {
      setTimeout(() => {
        this.age = 20
      }, 3000);
    }
  }
}).mount("#app");

setTimeout(() => {
  vm.message = `Hello, ${vm.firstName}`;
}, 2000);
