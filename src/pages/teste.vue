<template>
    <q-layout view="hHh Lpr fFf" style="margin: 0 auto; max-width: 1920px">
      <q-header
        bordered
        class="q-mb-sm bg-white text-grey-8 "
        style="max-width: 1920px">

          <q-toolbar bordered class="row justify-center">
            <q-btn
              class="lt-md absolute-left"
              flat
              icon="menu"
              @click="drawer = !drawer"
            />

            <q-btn flat dense icon="home" class=" lt-md" @click="link"/>
            <q-btn flat icon="shopping_cart" class="lt-md q-ma-sm absolute-right" @click="link">
                <q-badge rounded class="q-mr-sm q-mt-xs" color="red" text-color="white" floating>
                  {{ shoppingCartValue }}
                </q-badge>
            </q-btn>

            <div class="gt-sm q-ma-sm absolute-right">

              <q-btn flat label="Acompanhar Pedidos" no-caps @click="link" />
              <q-btn flat label=" Login/ Cadastre-se" no-caps @click="link" />
              <q-btn flat icon="shopping_cart" @click="link">
                <q-badge rounded class="q-mr-sm q-mt-xs" color="red" text-color="white" floating>
                  {{ shoppingCartValue }}
                </q-badge>
              </q-btn>

            </div>

          </q-toolbar>

          <q-toolbar bordered class="row justify-center">

            <q-btn flat icon="home" class="gt-sm absolute-left" @click="link" />

            <div class="gt-sm cursor-pointer non-selectable"
              v-for="menu in listMenu"
              :key="menu.name"

            >
              <q-btn
                flat
                :label="menu.name"
                @mouseenter="click = true"
                @mouseleave="click = false"

              />
              <q-menu auto-close  self="top start">
                <q-list v-for="item in listItem" :key="item.name">
                  <q-item clickable>
                    <q-item-section avatar>
                      <q-icon color="primary" :name="item.icon" />
                    </q-item-section>
                    <q-item-section> Lista do {{ menu.name }} {{item.label }}</q-item-section>
                  </q-item>
                </q-list>
              </q-menu>
            </div>

            <div class="col-12 lt-md">
              <q-input
                id="inputSearch"
                class="q-mb-sm"
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
            </div>

            <div class="gt-sm">
              <q-input
                id="inputSearch"
                class="q-mr-sm absolute-right"
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
            </div>

          </q-toolbar>
      </q-header>

      <q-page-container>
        <q-drawer
          v-model="drawer"
          overlay
          :width="300"
          :breakpoint="700"
          bordered
          content-class="text-grey-8"
        >
          <q-list bordered>
            <q-item clickable @click="link">
              <q-item-section avatar>
                <q-icon name="person" />
              </q-item-section>
              <q-item-section side>Conta</q-item-section>
              <q-item-section side class="absolute-right">
                <q-icon name="keyboard_arrow_right" />
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple
              v-for="menu in listMenu"
              :key="menu.name"
              separator
            >
              <q-item-section >{{ menu.label }}</q-item-section>
              <q-item-section side>
                <q-icon name="keyboard_arrow_right" />
              </q-item-section>

              <q-menu auto-close self="top start" >
                <q-list v-for="item in listItem" :key="item.name">
                  <q-item-section avatar >
                      <q-icon color="primary" :name="item.icon" />
                    </q-item-section>
                  <q-item clickable>
                    <q-item-section>Lista do {{ menu.name }} {{item.label }}</q-item-section>
                  </q-item>
                </q-list>
              </q-menu>

            </q-item>

          </q-list>

          <div class="q-mini-drawer-hide absolute" style="top: 15px; right: -45px">
            <q-btn
              dense
              round
              unelevated
              color="grey"
              icon="close"
              @click="drawer = false"
            />
          </div>
        </q-drawer>
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
      shoppingCartValue: 2,
      showing: false,
      drawer: false,
      click: false,

      listMenu: [
        { name: 'menu 1', label: 'menu 1' },
        { name: 'menu 2', label: 'menu 2' },
        { name: 'menu 3', label: 'menu 3' },
        { name: 'menu 4', label: 'menu 4' },
        { name: 'menu 5', label: 'menu 5' },
        { name: 'menu 6', label: 'menu 6' },
      ],

      listItem: [
        { name: 'item 1', label: 'item 1', icon: 'search' },
        { name: 'item 2', label: 'item 2', icon: 'home' },
        { name: 'item 3', label: 'item 3', icon: 'bluetooth' },
        { name: 'item 4', label: 'item 4', icon: 'info' },
        { name: 'item 5', label: 'item 5', icon: 'delete' },
        { name: 'item 6', label: 'item 6', icon: 'favorite' },
        { name: 'item 7', label: 'item 7', icon: 'fingerprint' },
        { name: 'item 8', label: 'item 8', icon: 'thumb_up' },
        { name: 'item 9', label: 'item 9', icon: 'build' },
        { name: 'item 10', label: 'item 10', icon: 'close' },

      ],
    };
  },

  methods: {
    link() {
      alert('Link alternativo');
    },
  },

};
</script>
