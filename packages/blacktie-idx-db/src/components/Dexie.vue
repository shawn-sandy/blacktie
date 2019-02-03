<template>
  <span>
    <slot
      :results="results"
      :ready="ready"
      :save="save"
      :deleteContact="deleteContact"
      :fakeUser="fakeUser"
      :resetDB="resetContacts"
    />
  </span>
</template>

<script>
import helper from './../mixinis/helpers.js'
import Dexie from 'dexie'
import dex from './../mixinis/dexie.js'
// import faker from 'faker'
import _chance from 'chance'
const chance = new _chance()
export default {
  name: 'DexieStore',
  mixins: [helper, dex],
  created() {
    if (!Dexie.isOpen) {
      this.createDatabase()
      console.log('Database name', this.db.name)
    } else {
      console.log('DB closed')
    }
  },
  mounted() {
    if (!this.db.contacts) {
      // console.log('setup contacts')
    } else {
      this.getAll(this.db.contacts)
      //console.log('getting results')
    }
    this.$nextTick(() => {
      // console.log('empty', this.results.length)
    })
  },
  methods: {
    fakeUser() {
      let data = {
        name: chance.name(),
        email: chance.email(),
        phone: chance.phone()
      }

      this.save(this.db.contacts, data)
    },
    deleteContact(id) {
      this.del(this.db.contacts, id)
    },
    resetContacts() {
      this.resetDB(this.db.contacts)
    }
  }
}
</script>

<style>
</style>
