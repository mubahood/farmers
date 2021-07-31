import ApiService from "./api.service";

const state = {
  name: "Muhindo Mubaraka Mutheke",
  user: {},
  farmers: [],
  visits: [],
  candidates: [],
  isLoggedIn: false,
  drawer: true,
};

const getters = {};

const actions = {
  get_web_candidates(context, _data) {
    return new Promise((resolve, reject) => {
      ApiService.query("candidates.php", _data)
        .then(({ data }) => {
          if (typeof data == "undefined") {
            const d = localStorage.candidates;
            if(typeof d == "undefined"){
              localStorage.candidates = [];
              return;  
            }
            localStorage.candidates = JSON.parse(data);
            resolve([]);
            return;
          }
          context.state.candidates = data;
          localStorage.candidates = JSON.stringify(data);
          resolve(data);
        })
        .catch(({ response }) => {
          reject("failed.....");
          const d = localStorage.candidates;
          if(typeof d == "undefined"){
            localStorage.candidates = [];
            return;  
          }
          localStorage.candidates = JSON.parse(d);
        });
    });
  },
  login_user(context, _data) {
    alert("goind...")
    return new Promise((resolve, reject) => {
      ApiService.query("", _data)
        .then(({ data }) => {
          alert("Success ==> "+data)
          if (typeof data == "undefined") {
            resolve(data);
            return;
          }
          if (typeof data.code == "undefined") {
            resolve(data);
            return;
          }

          if (data.code == 0) {
            resolve(data);
            return;
          }

          context.state.user = data.data;
          localStorage.user = JSON.stringify(data.data);
          resolve(data);
        })
        .catch(({ response }) => {
          alert("FAILED ==> "+response)
          reject("failed.....");
        });
    });
  },
  is_logged_in(context) {
    return new Promise((resolve) => {
      if (typeof localStorage.user == "undefined") {
        resolve(false);
      }

      if (localStorage.user == "undefined") {
        resolve(false);
      }

      if (localStorage.user == "") {
        resolve(false);
      }

      if (localStorage.user == "{}") {
        resolve(false);
      }

      if (localStorage.user.length < 10) {
        resolve(false);
      }

      if (typeof localStorage.user == "undefined") {
        alert("Failed to store user.");
        resolve(false);
      }

      var user = JSON.parse(localStorage.user);

      if (typeof user.email == "undefined") {
        resolve(false);
      }

      context.state.user = user;

      resolve(true);
    });
  },

  get_visits(context){
    context.state.visits = [
      {
        id:"1",
        name: 'Amazima Coffee Group',
        subtitle: `<span class="text--primary">7/24/2021</span> Visited by <b>Hamm</b>`,
      },
      { divider: true, inset: false },
      {
        name: 'John doe',
        id:"2",
        subtitle: `<span class="text--primary">7/24/2021</span> Visited by <b>Hamm</b>`,
      },
      { divider: true, inset: false }, 
      {
        id:"3",
        name: 'Peter Ssematimba',
        subtitle: `<span class="text--primary">8/19/2022</span> Visited by <b>Jane Doe</b>`,
      },
      { divider: true, inset: false },
      {
        id:"4",
        name: 'Amazima Coffee Group',
        subtitle: `<span class="text--primary">7/24/2021</span> Visited by <b>Hamm</b>`,
      },
      { divider: true, inset: false },
      {
        id:"5",
        name: 'John doe',
        subtitle: `<span class="text--primary">7/24/2021</span> Visited by <b>Hamm</b>`,
      },
      { divider: true, inset: false }, 
      {
        id:"6",
        name: 'Peter Ssematimba',
        subtitle: `<span class="text--primary">8/19/2022</span> Visited by <b>Jane Doe</b>`,
      },
      { divider: true, inset: false },
      {
        id:"7",
        name: 'Amazima Coffee Group',
        subtitle: `<span class="text--primary">7/24/2021</span> Visited by <b>Hamm</b>`,
      },
      { divider: true, inset: false },
      {
        id:"8",
        name: 'John doe',
        subtitle: `<span class="text--primary">7/24/2021</span> Visited by <b>Hamm</b>`,
      },
      { divider: true, inset: false }, 
      {
        id:"9",
        name: 'Peter Ssematimba',
        subtitle: `<span class="text--primary">8/19/2022</span> Visited by <b>Jane Doe</b>`,
      },
      { divider: true, inset: false },
      
    ]
  },

  get_farmers(context){
    context.state.farmers = [
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
        title: 'Brunch this weekend?',
        subtitle: `<span class="text--primary">Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
      },
      { divider: true, inset: true },
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
        title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
        subtitle: `<span class="text--primary">to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.`,
      },
      { divider: true, inset: true },
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
        title: 'Oui oui',
        subtitle: '<span class="text--primary">Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?',
      },
      { divider: true, inset: true },
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
        title: 'Birthday gift',
        subtitle: '<span class="text--primary">Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?',
      },
      { divider: true, inset: true },
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
        title: 'Recipe to try',
        subtitle: '<span class="text--primary">Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos.',
      },
    ]
  }
};

const mutations = {
  toggle_drawer(state) {  
    state.drawer = !state.drawer;
  },
  init_user() {
    this.dispatch("is_logged_in");
  },
  logout(state) {
    this.state.user = "";
    state.user = "";
    localStorage.user = "";
    this.dispatch("is_logged_in");
  },
};

export default {
  state,
  actions,
  mutations,
  getters,
};
