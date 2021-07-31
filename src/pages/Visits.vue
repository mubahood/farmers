<template>
  <div>
    <template>
      <v-app-bar app color="primary" dark>
        <v-app-bar-nav-icon
          @click="$store.commit('toggle_drawer')"
        ></v-app-bar-nav-icon>
        <v-toolbar-title>Visits</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon @click="sheet = !sheet">
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </v-app-bar>

      <v-card class="mx-auto">
        <v-list three-line>
          <template v-for="(item, index) in this.$store.state.user.visits">
            <v-divider
              v-if="item.divider"
              :key="index"
              :inset="item.inset"
            ></v-divider>

            <v-list-item v-else :key="index" :to="{path: 'visit/'+item.id}">
              <v-list-item-content>
                <v-list-item-title v-html="item.name"></v-list-item-title>
                <v-list-item-subtitle
                  v-html="item.subtitle"
                ></v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </template>
        </v-list>
      </v-card>
    </template>

    <template>
      <div>
        <v-bottom-sheet v-model="sheet" scrollable>
          <v-card>
            <v-card-title class="d-block text-center"
              >Select visit type</v-card-title
            >
            <v-divider></v-divider>
            <v-list> 
              <v-list-item  @click="sheet = false">
                <v-list-item-title>Add group visit</v-list-item-title>
              </v-list-item>
              <v-list-item  @click="sheet = false">
                <v-list-item-title>Add GHC Farmer</v-list-item-title>
              </v-list-item>
              <v-list-item  @click="sheet = false">
                <v-list-item-title>Cooperative</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-card>
        </v-bottom-sheet>
      </div>
    </template>

    <v-dialog v-model="dialog" persistent max-width="290">
      <v-card>
        <v-card-text class="pt-8"> {{ message }} </v-card-text>
        <v-progress-linear
          loading="true"
          color="white"
          class="mb-0"
        ></v-progress-linear>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" text @click="my_done">
            Ok.
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
import ApiService from "../store/api.service";
export default {
  mounted() {
    this.$store.dispatch("get_visits");

    // this.$store
    //   .dispatch("get_web_candidates")
    //   .then((data) => {
    //     if (typeof data == "undefined") {
    //       return;
    //     }
    //   })
    //   .catch(() => {
    //     alert("Failed to connect to internent.");
    //   });
  },
  methods: {
    my_done() {
      this.loading = false;
      this.dialog = false;
    },
    submit_data() {
      this.loading = true;
      ApiService.get("Default.aspx", this.my_form)
        //ApiService.query("test.php", this.my_form)
        .then((res) => {
          console.log(res.data);
          this.loading = false;
          if (typeof res == "undefined") {
            this.message = "Failed to submit form, please try again.";
            this.success = false;
            this.dialog = true;
            return;
          }
          if (typeof res.data == "undefined") {
            this.message = "Failed to submit form, please try again.";
            this.success = false;
            this.dialog = true;
            return;
          }
          this.success = true;
          this.message = res;
          this.dialog = true;
        })
        .catch((err) => {
          console.log("err");
          alert("Failed!");
        });
    },
  },
  data() {
    return {
      dialog: false,
      message: "",
      my_form: {
        DataFormat: "NewFarmer",
        enteredby: "John Doe",
        comment: "Simple comment",
        village: "Village",
        subcounty: "Bwera",
        county: "Bukonzo",
        district: "Kasese",
        group: "none",
        phone: "+25670365273",
        Feduc: "None",
        maritalS: "SINGLE",
        FName: "Muhindo",
        SName: "Mubaraka",
        Sex: "Male",
        DOB: "1994-08-18",
      },
      valid: false,
      firstname: "",
      lastname: "",
      email: "",
      loading: false,
      success: false,

      sheet: false,
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
