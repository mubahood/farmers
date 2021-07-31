<template>
  <v-container grid-list-xs>
    <v-form v-model="valid">
      <h2 class="text-h5 mb-4 mt-md-5 ">Creating new Candidate</h2>

      <v-row>
        <v-col cols="12" class="pt-2 pb-2" md="3">
          <v-select
            v-model="my_form.site_type"
            counter="null"
            label="Site Type"
            :items="['Greenfield', 'Rooftop', 'Rooftower']"
            hide-details="true"
            outlined
          ></v-select>
        </v-col>

        <v-col cols="12" class=" pt-2 pb-2" md="3">
          <v-row>
            <v-col cols="6" class=" pt-2 pb-2">
              <v-text-field
                v-model="my_form.candidate_latitude"
                counter="null"
                label="Candidate latitude"
                hide-details="true"
                outlined
              ></v-text-field>
            </v-col>
            <v-col cols="6" class=" pt-2 pb-2">
              <v-text-field
                v-model="my_form.candidate_longitude"
                counter="null"
                label="Candidate longitude"
                hide-details="true"
                outlined
              ></v-text-field>
            </v-col>
          </v-row>
        </v-col>

        <v-col cols="12" class=" pt-2 pb-2" md="3">
          <v-row>
            <v-col cols="6" class=" pt-2 pb-2">
              <v-text-field
                v-model="my_form.leased_space"
                counter="null"
                label="Leased Space (sq. m)"
                hide-details="false"
                outlined
              ></v-text-field>
            </v-col>

            <v-col cols="6" class=" pt-2 pb-2">
              <v-text-field
                v-model="my_form.building_height"
                counter="null"
                label="Building Height (m)"
                hide-details="false"
                outlined
              ></v-text-field>
            </v-col>
          </v-row>
        </v-col>

        <v-col cols="12" class=" pt-2 pb-2" md="3">
          <v-text-field
            v-model="my_form.comments"
            counter="null"
            label="Comments"
            hide-details="true"
            outlined
          ></v-text-field>
        </v-col>

        <v-col cols="12" class=" pt-2 pb-2" md="3">
          <v-text-field
            v-model="my_form.search_radius"
            counter="null"
            label="SEARCH RADIUS(M)"
            hide-details="true"
            outlined
          ></v-text-field>
        </v-col>

        <v-col cols="12" class=" pt-2 pb-2" md="3">
          <v-text-field
            v-model="my_form.nominal_coordinate"
            counter="null"
            label="NOMINAL COORDINATE (Long,Lat)"
            hide-details="true"
            outlined
          ></v-text-field>
        </v-col>

        <v-col cols="12" class=" pt-2 pb-2" md="3">
          <v-text-field
            v-model="my_form.acq_subcontractor"
            counter="null"
            label="Acq. Subcontractor"
            hide-details="true"
            outlined
          ></v-text-field>
        </v-col>

        <v-col cols="12" class=" pt-2 pb-2" md="3">
          <v-text-field
            v-model="my_form.site_acquisition_agent"
            counter="null"
            label="Site Acquisition Agent"
            hide-details="true"
            outlined
          ></v-text-field>
        </v-col>

        <v-col cols="12" class=" pt-2 pb-2" md="3">
          <v-text-field
            v-model="my_form.district"
            counter="null"
            label="District"
            hide-details="true"
            outlined
          ></v-text-field>
        </v-col>

        <v-col cols="12" class=" pt-2 pb-2" md="3">
          <v-text-field
            v-model="my_form.subcounty"
            counter="null"
            label="Subcounty"
            hide-details="true"
            outlined
          ></v-text-field>
        </v-col>

        <v-col cols="12" class=" pt-2 pb-2" md="3">
          <v-text-field
            v-model="my_form.parish"
            counter="null"
            label="Parish"
            hide-details="true"
            outlined
          ></v-text-field>
        </v-col>

        <v-col cols="12" class=" pt-2 pb-2" md="3">
          <v-text-field
            v-model="my_form.village"
            counter="null"
            label="Village"
            hide-details="true"
            outlined
          ></v-text-field>
        </v-col>

        <v-col cols="12" class=" pt-2 pb-2" md="3">
          <v-text-field
            v-model="my_form.local_area_name"
            counter="null"
            label="Local area name"
            hide-details="true"
            outlined
          ></v-text-field>
        </v-col>

        <v-col cols="12" class=" pt-2 pb-2" md="3">
          <v-text-field
            v-model="my_form.building_name"
            counter="null"
            label="building name: (rt)"
            hide-details="true"
            outlined
          ></v-text-field>
        </v-col>

        <v-col cols="12" class=" pt-2 pb-2" md="3">
          <v-text-field
            v-model="my_form.street_address"
            counter="null"
            label="Street address"
            hide-details="true"
            outlined
          ></v-text-field>
        </v-col>

        <v-col cols="12" class=" pt-2 pb-2" md="3">
          <v-text-field
            v-model="my_form.city_town"
            counter="null"
            label="City / town"
            hide-details="true"
            outlined
          ></v-text-field>
        </v-col>

        <v-col cols="12" class=" pt-2 pb-2" md="3">
          <v-text-field
            v-model="my_form.owner_name"
            counter="null"
            label="Owner's name"
            hide-details="true"
            outlined
          ></v-text-field>
        </v-col>

        <v-col cols="12" class=" pt-2 pb-2" md="3">
          <v-text-field
            v-model="my_form.telephone"
            counter="null"
            label="Telephone"
            hide-details="true"
            outlined
          ></v-text-field>
        </v-col>

        <v-col cols="12" class=" pt-2 pb-2" md="3">
          <v-text-field
            v-model="my_form.address"
            counter="null"
            label="Address"
            hide-details="true"
            outlined
          ></v-text-field>
        </v-col>

        <v-col cols="12" class=" pt-2 pb-2" md="3">
          <v-text-field
            v-model="my_form.contact_person_name"
            counter="null"
            label="Contact person name"
            hide-details="true"
            outlined
          ></v-text-field>
        </v-col>

        <v-col cols="12" class=" pt-2 pb-2" md="3">
          <v-text-field
            v-model="my_form.contact_person_telephone"
            counter="null"
            label="Contact person Telephone"
            hide-details="true"
            outlined
          ></v-text-field>
        </v-col>

        <v-col cols="12" class=" pt-2 pb-2" md="3">
          <v-text-field
            v-model="my_form.contact_person_address"
            counter="null"
            label="Contact person address"
            hide-details="true"
            outlined
          ></v-text-field>
        </v-col>

        <v-col cols="12" class=" pt-2 pb-2" md="3">
          <v-text-field
            v-model="my_form.distance_from_nominal"
            counter="null"
            label="Distance from nominal"
            hide-details="true"
            outlined
          ></v-text-field>
        </v-col>

        <v-col cols="12" class=" pt-2 pb-2" md="3">
          <v-select
            v-model="my_form.permission_needed"
            counter="null"
            label="Permission needed"
            hide-details="true"
            outlined
            :items="['Yes', 'No']"
          ></v-select>
        </v-col>

        <v-col cols="12" class=" pt-2 pb-2" md="3">
          <v-select
            v-model="my_form.type_of_ownership"
            counter="null"
            label="Type of ownership"
            hide-details="true"
            outlined
            :items="[
              'Single Owner',
              'Joint property',
              'Gorvernment',
              'Railway',
              'Military',
              'Community association',
              'Other',
            ]"
          ></v-select>
        </v-col>

        <v-col cols="12" class=" pt-2 pb-2" md="3">
          <v-select
            v-model="my_form.location_type"
            counter="null"
            label="Location type:"
            hide-details="true"
            outlined
            :items="[
              'Plot',
              'Commercial building',
              'Industrial building',
              'Apartment building',
              'Water tank',
              'House',
              'Mountain area',
              'Agriculture area',
              'Existing tower',
              'Other',
            ]"
          ></v-select>
        </v-col>

        <v-col cols="12" class=" pt-2 pb-2" md="3">
          <v-select
            v-model="my_form.equipment_location"
            counter="null"
            label="Equipment location"
            hide-details="true"
            outlined
            :items="['Roof top', 'Ground', 'Other']"
          ></v-select>
        </v-col>

        <v-col cols="12" class=" pt-2 pb-2" md="3">
          <v-select
            v-model="my_form.roof_condition"
            counter="null"
            label="Roof condition"
            hide-details="true"
            outlined
            :items="['Very good', 'Good', 'Ok', 'Bad', 'Very bad', 'N/A']"
          ></v-select>
        </v-col>

        <v-col cols="12" class=" pt-2 pb-2" md="3">
          <v-select
            v-model="my_form.access_road_condition"
            counter="null"
            label="Access road condition"
            hide-details="true"
            outlined
            :items="['Very good', 'Good', 'Ok', 'Bad', 'Very bad']"
          ></v-select>
        </v-col>

        <v-col cols="12" class=" pt-2 pb-2" md="3">
          <v-text-field
            v-model="my_form.lease_space"
            counter="null"
            label="Lease space(meters)"
            hide-details="true"
            outlined
          ></v-text-field>
        </v-col>

        <v-col cols="12" class=" pt-2 pb-2" md="3">
          <v-text-field
            v-model="my_form.estimated_annual_rent"
            label="Estimated annual rent"
            hide-details="true"
            outlined
          ></v-text-field>
        </v-col>

        <v-col cols="12" class=" pt-2 pb-2" md="3">
          <v-select
            v-model="my_form.owner_have_copy_of_the_standard_lease"
            counter="null"
            label="Owner have a copy of the standard lease?"
            hide-details="true"
            outlined
            :items="['Yes', 'No']"
          ></v-select>
        </v-col>

        <v-col cols="12" class=" pt-2 pb-2" md="3">
          <v-select
            v-model="my_form.drilling_allowed"
            counter="null"
            label="Drilling allowed?"
            hide-details="true"
            outlined
            :items="['Yes', 'No']"
          ></v-select>
        </v-col>

        <v-col cols="12" class=" pt-2 pb-2" md="3">
          <v-text-field
            v-model="my_form.electricity_company_distance"
            label="electricity company & distance"
            hide-details="true"
            outlined
          ></v-text-field>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" class=" pt-2 pb-2" md="3">
          <v-file-input
            v-model="my_form.panaromic_0"
            label="Panaromic 0"
            accept=".png,.jpg,.jpeg,image/*"
            hide-details="true"
            outlined
          ></v-file-input>
        </v-col>
        <v-col cols="12" class=" pt-2 pb-2" md="3">
          <v-file-input
            v-model="my_form.panaromic_45"
            label="Panaromic 45"
            accept=".png,.jpg,.jpeg,image/*"
            hide-details="true"
            outlined
          ></v-file-input>
        </v-col>
        <v-col cols="12" class=" pt-2 pb-2" md="3">
          <v-file-input
            v-model="my_form.panaromic_90"
            label="Panaromic 90"
            accept=".png,.jpg,.jpeg,image/*"
            hide-details="true"
            outlined
          ></v-file-input>
        </v-col>
        <v-col cols="12" class=" pt-2 pb-2" md="3">
          <v-file-input
            v-model="my_form.panaromic_120"
            label="Panaromic 120"
            accept=".png,.jpg,.jpeg,image/*"
            hide-details="true"
            outlined
          ></v-file-input>
        </v-col>
        <v-col cols="12" class=" pt-2 pb-2" md="3">
          <v-file-input
            v-model="my_form.panaromic_180"
            label="Panaromic 180"
            accept=".png,.jpg,.jpeg,image/*"
            hide-details="true"
            outlined
          ></v-file-input>
        </v-col>
        <v-col cols="12" class=" pt-2 pb-2" md="3">
          <v-file-input
            v-model="my_form.panaromic_240"
            label="Panaromic 240"
            accept=".png,.jpg,.jpeg,image/*"
            hide-details="true"
            outlined
          ></v-file-input>
        </v-col>
        <v-col cols="12" class=" pt-2 pb-2" md="3">
          <v-file-input
            v-model="my_form.panaromic_290"
            label="Panaromic 290"
            accept=".png,.jpg,.jpeg,image/*"
            hide-details="true"
            outlined
          ></v-file-input>
        </v-col>
        <v-col cols="12" class=" pt-2 pb-2" md="3">
          <v-file-input
            v-model="my_form.panaromic_330"
            label="Panaromic 330"
            accept=".png,.jpg,.jpeg,image/*"
            hide-details="true"
            outlined
          ></v-file-input>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" class=" pt-2 pb-2" md="3">
          <v-btn
            block
            large
            color="primary"
            class=""
            @click="submit_data"
            :loading="loading"
            :disabled="loading"
          >
            SAVE DATA
          </v-btn>
        </v-col>
      </v-row>
    </v-form>
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
  </v-container>
</template>

<script>
import ApiService from "../store/api.service";
export default {
  components: {},
  data: () => ({
    images: [],
    no_image: "./no_image.jpeg",
    placeholderImage: "./no_image.jpeg",
    my_form: {
      panaromic_0: null,
      panaromic_45: null,
      panaromic_90: null,
      panaromic_120: null,
      panaromic_180: null,
      panaromic_240: null,
      panaromic_290: null,
      panaromic_330: null,
      electricity_company_distance: "110.0",
      drilling_allowed: "Yes",
      owner_have_copy_of_the_standard_lease: "Yes",
      estimated_annual_rent: "10,000",
      lease_space: "1120",
      access_road_condition: "Bad",
      roof_condition: "Good",
      equipment_location: "Other",
      location_type: "Plot",
      type_of_ownership: "Single Owner",
      distance_from_nominal: "1211",
      permission_needed: "",
      contact_person_address: "kAMUKUMBI",
      contact_person_telephone: "+26672538212",
      contact_person_name: "Bwambale Muhidin",
      address: "Kasese, Uganda",
      telephone: "+8801632257609",
      owner_name: "Biira Sumayya",
      city_town: "Bwera",
      street_address: "Street address",
      building_name: "Pokopoko House",
      local_area_name: "Kaserengethe",
      parish: "Bwera",
      village: "Nyamambuka",
      subcounty: "Kawempe",
      district: "Kumi",
      site_acquisition_agent: "Joan Doe",
      acq_subcontractor: "John Doe",
      nominal_coordinate: "1.300 , 100.323",
      search_radius: "1.3",
      comments: "Simple commntes",
      building_height: "123.4",
      leased_space: "21.4",
      site_type: "Greenfield",
      candidate_latitude: "10.20009320",
      candidate_longitude: "152.20009320",
    },
    valid: false,
    firstname: "",
    lastname: "",
    message: "",
    email: "",
    dialog: false,
    success: false,
    loading: false,
  }),
  mounted() {
    this.check_login();
  },
  methods: {
    my_done() {
      this.dialog = false;
      if (this.success) {
        this.$router.push({ path: "/admin" });
      }
    },
    submit_data() {
      this.loading = true;
      ApiService.upload_file("add_candidate.php", this.my_form)
        .then((res) => {
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
          const resp = res.data;
          if (typeof resp.code == "undefined") {
            this.message = "Failed to submit form, please try again.";
            this.success = false;
            this.dialog = true;
            return;
          }
          if (resp.code == 0) {
            this.message = resp.message;
            this.success = false;
            this.dialog = true;
            return;
          } else {
            this.message = resp.message;
            this.success = true;
            this.dialog = true;
            return;
          }
        })
        .catch((err) => {
          console.log("err");
          alert("Failed!");
        });
    },
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
