<template>
  <div>
    <template>
      <v-app-bar app color="primary" dark >  
          <v-app-bar-nav-icon @click="$store.commit('toggle_drawer')"></v-app-bar-nav-icon>
          <v-toolbar-title>Farmers</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn icon @click="sheet = !sheet">
            <v-icon>mdi-plus</v-icon>
          </v-btn> 
      </v-app-bar>

      <v-card class="mx-auto">
        <v-list three-line>
          <template v-for="(item, index) in this.$store.state.user.farmers">
            <v-subheader
              v-if="item.header"
              :key="item.header"
              v-text="item.header"
            ></v-subheader>

            <v-divider
              v-else-if="item.divider"
              :key="index"
              :inset="item.inset"
            ></v-divider>

            <v-list-item v-else :key="item.title">
              <v-list-item-avatar>
                <v-img :src="item.avatar"></v-img>
              </v-list-item-avatar>

              <v-list-item-content>
                <v-list-item-title v-html="item.title"></v-list-item-title>
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
        <v-bottom-sheet v-model="sheet" persistent scrollable>
          <v-card>
            <v-card-title class="d-block text-center"
              >Adding new farmer</v-card-title
            >
            <v-divider></v-divider>
            <v-card-text class="pl-0 pr-0">
              <v-container class=" pl-0 pr-0">
                <v-form v-model="valid">
                  <v-card class="mx-auto pl-5 pt-5 pr-5 pb-5" outlined>
                    <v-list-item-title class="text-h6  mb-4">
                      Bio data
                    </v-list-item-title>

                    <v-row>
                      <v-col cols="12" md="6" class=" pt-2 pb-2">
                        <v-text-field
                          v-model="my_form.FName"
                          label="First name"
                          required
                          dense
                          hide-details="true"
                          outlined
                        ></v-text-field>
                      </v-col>

                      <v-col cols="12" md="6" class=" pt-2 pb-2">
                        <v-text-field
                          dense
                          v-model="my_form.SName"
                          label="Last name"
                          required
                          hide-details="true"
                          outlined
                        ></v-text-field>
                      </v-col>
                    </v-row>

                    <v-row>
                      <v-col cols="12" md="6" class=" pt-2 pb-2 mt-md-3">
                        <v-select
                          v-model="my_form.Sex"
                          label="Gender"
                          dense
                          hide-details="true"
                          outlined
                          :items="['Male', 'Female']"
                        ></v-select>
                      </v-col>

                      <v-col cols="12" md="6" class=" pt-2 pb-2 mt-md-3">
                        <v-text-field
                          dense
                          v-model="my_form.DOB"
                          label="Date of birth"
                          required
                          type="date"
                          hide-details="true"
                          outlined
                        ></v-text-field>
                      </v-col>
                    </v-row>

                    <v-row>
                      <v-col cols="12" md="6" class=" pt-2 pb-2">
                        <v-select
                          v-model="my_form.maritalS"
                          label="Marital Status"
                          required
                          dense
                          :items="['SINGLE', 'MARRIED', 'Divorced', 'Widow']"
                          hide-details="true"
                          outlined
                        ></v-select>
                      </v-col>

                      <v-col cols="12" md="6" class=" pt-2 pb-2">
                        <v-select
                          v-model="my_form.Feduc"
                          label="Formal Education"
                          required
                          dense
                          :items="[
                            'None',
                            'Primary',
                            'O-Level',
                            'A-Level',
                            'Cetificate',
                            'Diploma',
                            'Vocational',
                          ]"
                          hide-details="true"
                          outlined
                        ></v-select>
                      </v-col>
                    </v-row>

                    <v-row>
                      <v-col cols="12" md="6" class=" pt-2 pb-2">
                        <v-text-field
                          v-model="my_form.phone"
                          label="Phone number"
                          required
                          dense
                          hide-details="true"
                          outlined
                        ></v-text-field>
                      </v-col>

                      <v-col cols="12" md="6" class=" pt-2 pb-2">
                        <v-select
                          dense
                          v-model="my_form.group"
                          label="Group"
                          :items="[
                            'none',
                            'Mwany Women Group',
                            'Amzaina Coffee Group',
                          ]"
                          required
                          hide-details="true"
                          outlined
                        />
                      </v-col>
                    </v-row>
                  </v-card>

                  <v-card class="mx-auto pl-5 pt-5 my-5 pr-5 pb-5" outlined>
                    <v-list-item-title class="text-h6  mb-4">
                      Birth place
                    </v-list-item-title>

                    <v-row>
                      <v-col cols="12" md="6" class=" pt-2 pb-2">
                        <v-text-field
                          v-model="my_form.district"
                          label="District"
                          required
                          densesubcounty
                          hide-details="true"
                          outlined
                        ></v-text-field>
                      </v-col>

                      <v-col cols="12" md="6" class=" pt-2 pb-2">
                        <v-text-field
                          dense
                          v-model="my_form.county"
                          label="county"
                          required
                          hide-details="true"
                          outlined
                        ></v-text-field>
                      </v-col>
                    </v-row>

                    <v-row>
                      <v-col cols="12" md="6" class=" pt-2 pb-2">
                        <v-text-field
                          v-model="my_form.district"
                          label="District"
                          required
                          dense
                          hide-details="true"
                          outlined
                        ></v-text-field>
                      </v-col>

                      <v-col cols="12" md="6" class=" pt-2 pb-2">
                        <v-text-field
                          dense
                          v-model="my_form.county"
                          label="county"
                          required
                          hide-details="true"
                          outlined
                        ></v-text-field>
                      </v-col>
                    </v-row>
                  </v-card>

                  <v-card class="mx-auto pl-5 pt-5 my-5 pr-5 pb-5" outlined>
                    <v-list-item-title class="text-h6  mb-4">
                      Comments
                    </v-list-item-title>

                    <v-row>
                      <v-col cols="12" class=" pt-2 pb-2">
                        <v-textarea
                          v-model="my_form.comment"
                          label="Comment"
                          required
                          dense
                          hide-details="true"
                          outlined
                        ></v-textarea>
                      </v-col>

                      <v-col cols="12" class=" pt-2 pb-2">
                        <v-text-field
                          dense
                          v-model="my_form.enteredby"
                          label="Entered dby"
                          required
                          hide-details="true"
                          outlined
                        ></v-text-field>
                      </v-col>
                    </v-row>

                    <v-row>
                      <v-col cols="12" class=" pt-2 pb-2 pt-5" md="6">
                        <v-btn
                          block
                          large
                          color="primary"
                          class=""
                          @click="submit_data"
                          :loading="loading"
                          :disabled="loading"
                        >
                          ADD FARMER
                        </v-btn>
                      </v-col>
                      <v-col cols="12" class=" pt-2 pb-2 pt-5" md="6">
                        <v-btn
                          block
                          color="red"
                          large
                          class=""
                          @click="sheet = false"
                          :loading="loading"
                          :disabled="loading"
                          outlined
                        >
                          CANCEL
                        </v-btn>
                      </v-col>
                    </v-row>
                  </v-card>
                </v-form>
              </v-container>
            </v-card-text>
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
    this.$store.dispatch("get_farmers");

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
