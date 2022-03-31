<template>
  <q-layout view="hHh Lpr fFf" class="">
    <q-header class="bg-grey-10 ">
      <q-toolbar class="">
        <q-btn
          flat
          round
          @click="toggleLeftDrawer"
          aria-label="Menu"
          icon="menu"
          class="q-mr-sm"
        />

        <q-toolbar-title shrink class="row items-center no-wrap">
          <img src="https://cdn.quasar.dev/img/layout-gallery/logo-google.svg">
          <span class="q-ml-sm">News</span>
        </q-toolbar-title>

        <q-space />

        <!-- <div class="col-12 lt-md"> -->
          <q-input
            class="q-mb-sm bg-white"
            outlined
            v-model="search"
            placeholder="O que você procura?"
            @focus="showing = true"
            dense
          >
            <template v-slot:prepend>
              <q-icon v-if="search === ''" name="search" />
              <q-icon v-else name="clear" class="cursor-pointer" @click="search = ''" />
            </template>
          </q-input>
        <!-- </div> -->

        <q-space />

        <div class="q-gutter-sm row items-center no-wrap">
          <q-btn flat icon="shopping_cart" class="" >
            <q-badge rounded class="q-mr-sm q-mt-xs" color="red" text-color="white" floating>
              {{ shoppingCartValue }}
            </q-badge>
          </q-btn>
          <q-btn round dense flat color="grey-8" icon="notifications">
            <q-badge color="red" text-color="white" floating>
              2
            </q-badge>
            <q-tooltip>Notifications</q-tooltip>
          </q-btn>
          <q-btn round flat>
            <q-avatar size="26px">
              <img src="https://cdn.quasar.dev/img/boy-avatar.png">
            </q-avatar>
            <q-tooltip>Account</q-tooltip>
          </q-btn>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      class="bg-white"
      :width="280"
    >
      <q-scroll-area class="fit">
        <q-list padding class="text-grey-8">

          <div class="q-mt-md">
            <div class="flex flex-center q-gutter-xs">
              <a class="" href="javascript:void(0)"
              aria-label="Privacy">Privacy</a>
              <span> · </span>
              <a class="" href="javascript:void(0)"
               aria-label="Terms">Terms</a>
              <span> · </span>
              <a class="" href="javascript:void(0)"
              aria-label="About">About Google</a>
            </div>
          </div>
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>

export default {
  name: 'MainLayout',

  data() {
    return {
      search: '',
      showing: false,
      leftDrawerOpen: false,
      shoppingCartValue: 2,

    };
  },

  methods: {

    toggleLeftDrawer() {
      this.leftDrawerOpen = !this.leftDrawerOpen;
    },

  },

};
</script>
