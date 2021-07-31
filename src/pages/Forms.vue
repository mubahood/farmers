<template>
  <v-card>
    <v-card-title>
      Candidates
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="this.$store.state.user.candidates"
      :search="search"
    ></v-data-table>
  </v-card>
</template>
<script>
export default {
  mounted() {
    this.$store
      .dispatch("get_web_candidates")
      .then((data) => {
        if (typeof data == "undefined") {
          return;
        } 
      })
      .catch(() => {
        alert("Failed to connect to internent.");
      });
  },
  data() {
    return {
      search: "",
      headers: [
        {
          text: "Contact person",
          align: "start",
          sortable: true,
          value: "contact_person_name",
        },
        { text: "Contact", value: "district" },
        { text: "District", value: "contact_person_telephone" },
        { text: "City/town", value: "city_town" },
      ], 
    };
  },
};
</script>
