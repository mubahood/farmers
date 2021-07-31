<template>
  <div>
    <v-navigation-drawer v-model="$store.state.user.drawer" app>
      
      <v-list shaped>
        <v-subheader>
        <h3>Admin Menu</h3> 
        </v-subheader>
        <v-list-item-group v-model="selectedItem" color="primary">
          <v-list-item dense v-for="(item, index) in items" :key="index" :to="item.slug">
            <v-list-item-icon>
              <v-icon  v-text="item.icon"></v-icon>
              <v-list-item-content class="ml-3">
              <v-list-item-title v-text="item.text"></v-list-item-title>
            </v-list-item-content>
            </v-list-item-icon>
          </v-list-item>

       
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

  

    <v-main>
      <router-view />
    </v-main>
  </div>
</template>

<script>
export default {
  data: () => ({
    selectedItem: 0,
    items: [
      {
        text: "Home",
        icon: "mdi-home",
        slug: "/",
      },
      {
        text: "Farmers",
        icon: "mdi-account-multiple",
        slug: "/farmers",
      },
      {
        text: "Visits",
        icon: "mdi-account-multiple",
        slug: "/visits",
      },
       
    ],
    drawer: null,
  }),
};
</script>
