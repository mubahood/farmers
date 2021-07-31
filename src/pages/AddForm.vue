<template>
  <v-container grid-list-xs>
    <v-form v-model="valid">
      <h2 class="text-h5 mb-4 mt-md-5 ">Creating new CER</h2>

      <v-row>
        <v-col cols="12" class=" pt-2 pb-2" md="3">
          <v-text-field
            v-model="my_form.customer_site_id"
            counter="null"
            label="CUSTOMER SITE ID"
            required
            hide-details="true"
            outlined
          ></v-text-field>
        </v-col>

        <v-col cols="12" class="pt-2 pb-2" md="3">
          <v-select
            v-model="my_form.company"
            counter="null"
            label="COMPANY"
            :items="['AIRTEL', 'MTN']"
            required
            hide-details="true"
            outlined
          ></v-select>
        </v-col>

        <v-col cols="12" class=" pt-2 pb-2" md="3">
          <v-text-field
            v-model="my_form.eaton_site_id"
            label="EATON SITE ID"
            required
            hide-details="true"
            outlined
          ></v-text-field>
        </v-col>
        <v-col cols="12" class=" pt-2 pb-2" md="3">
          <v-text-field
            v-model="my_form.site_id"
            label="SITE NAME"
            required
            hide-details="true"
            outlined
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" class=" pt-2 pb-2" md="3">
          <v-btn
            block
            large
            color="primary"
            class=""
            @click="validate"
            :loading="loading"
            :disabled="loading"
          >
            SAVE DATA
          </v-btn>
        </v-col>
      </v-row>
    </v-form>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    my_form: {
      customer_site_id: "16004009",
      company: "MTN",
      eaton_site_id: "193802832",
      site_id: "SIMPLE SITE NAME",
    },
    valid: false,
    firstname: "",
    lastname: "",
    email: "",
  }),
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
