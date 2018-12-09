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
    <hr>
    <div class="small has-text-centered">
      <small>
        [ Info -  Database : {{ database }} .
        Version: {{ version }} .
        Connection: {{ connection }} ]
      </small>
    </div>
    <hr>
  </span>
</template>

<script>
import helper from './../mixinis/helpers.js'
import dex from './../mixinis/dexie.js'
import faker from 'faker'
export default {
  name: 'DexieStore',
  mixins: [helper, dex],
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
        name: faker.name.findName(),
        email: faker.internet.exampleEmail(),
        phone: faker.phone.phoneNumber()
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
