<template>
  <div>
    <h1>Admin Page</h1>
    <h2>My Content.....</h2>
  </div>
</template>

<script>
export default {
  mounted() {
    this.check_login();
  },
  methods: {
    get_admin_data() {},
    check_login() {
      this.$store
        .dispatch("is_logged_in")
        .then((data) => {
          if (typeof data == "undefined") {
            this.$router.push({ name: "login" });
            return;
          }
          if (!data) {
            this.$router.push({ name: "login" });
          } else {
            this.get_admin_data();
          }
        })
        .catch(() => {
          //this.$router.push({ name: "login" });
        });
    },
  },
};
</script>
