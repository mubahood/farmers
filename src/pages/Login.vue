<template>
  <div class="">
    <v-row class="red-5 d-flex justify-center">
      <v-col class="col-4">
        <img class="mt-15" src="logo.png" width="100" alt="" />
      </v-col>
    </v-row>
    <v-row class="red-5 d-flex justify-center">
      <v-col
        class="
          pl-10
          pr-10
          pt-5
          col-12 col-md-4
          center
          mt-md-15
          pt-md-10
          pb-md-10
          mb-md-10
        "
      >
        <h1>Welcome to Vuexy! 👋</h1>
        <p class="mb-5">Please sign-in to proceed to your account</p>

        <v-form ref="form" v-model="valid" lazy-validation>
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            :counter="35"
            required
          ></v-text-field>

          <v-text-field
            v-model="password"
            :rules="nameRules"
            autocomplete="true"
            label="Password"
            required
            type="password"
            :counter="35"
          ></v-text-field>

          <v-checkbox v-model="checkbox" label="Keep me logged in"></v-checkbox>

          <v-btn
            block
            large
            color="primary"
            class=""
            @click="validate"
            :loading="loading"
            :disabled="loading"
          >
            Login
          </v-btn>
        </v-form>
      </v-col>
    </v-row>

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
            Ok...
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
    watch: {
    $route(to, from) {
      this.show = false;
    },
  },
  created(){
    this.$store.dispatch("is_logged_in").then((data)=>{
      if(typeof data == "undefined" ){
        return
      }
      if(data){
        this.$router.push({ name: "admin" })
      }
    }).catch(()=>{
      alert("Failed....")
    })
  },
  data: function() {
    return {
      loading: false,
      success: false,
      dialog: false,
      message: "",
      valid: true,
      password: "romina",
      nameRules: [
        (v) => !!v || "Password is required",
        (v) =>
          (v && v.length <= 35) || "Password must be less than 35 characters",
      ],
      email: "mubs0x@gmail.com",
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+\..+/.test(v) || "Invalid E-mail",
      ],
      checkbox: false,
    };
  },

  methods: {
    my_done(){ 
      this.dialog = false
      if(this.success){
        this.$router.push({ path: "/admin" })
      } 
    },
    submit_data: (context) => {
      context.success = false
      if (context.loading) {
        return;
      }
      context.loading = true;
      const form_data = {
        email: context.email,
        password: context.password,
      };
      context.$store.dispatch("login_user", form_data).then(function(data) {
        if (typeof data == "undefined") {
          context.message = "Invalid response.";
          context.dialog = true;
          context.loading = false;
          return;
        }
        if (typeof data.code == "undefined") {
          context.loading = false;
          context.dialog = true;
          context.message = "Invalid response code.";
          return;
        }
        if (data.code == 0) {
          context.loading = false;
          context.dialog = true;
          context.message = data.message;
          return;
        }
        context.loading = false;
        context.dialog = true;
        context.success = true;
        //context.$store.state.user.user = 
        //console.log(context.$store.state.user.user)
        context.message = "Your account was loggein successfully.";
      }).catch(({ response }) => {
          context.loading = false;
          context.dialog = true;
          context.message = "Failed. Check your connection and try again.";
          return;
        });
    },
    
    validate() {
      this.submit_data(this);
      if (this.$refs.form.validate()) {
        //alert("Good");
      } else {
        //alert("Bad");
      }
    },
  },
};
</script>
