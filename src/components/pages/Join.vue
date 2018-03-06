<template>
  <div class="join-container">
    <h3 class="join-wrap">Quick, join up before we drink all the beer!</h3>
    <div class="join-card join-wrap">
      <form @submit.prevent="registerUser('formScope')" data-vv-scope="formScope" id="main-form">
        <!-- ********** input group ********** -->
        <div class="input-group">
          <label class="label" for="name">Personal information</label>
          <div :class="{ 'control': true }">
            <input v-model="name" class="input-style" v-validate="'required'" :class="{'input': true, 'is-danger': errors.has('formScope.name') }" name="name" type="text" placeholder="Name">
            <p v-show="errors.has('formScope.name')" class="help is-danger">{{ errors.first('formScope.name') }}</p>
          </div>
        </div>
        <!-- ########## end of input group ########## -->
        <!-- ********** input group ********** -->
        <div class="input-group">
          <label class="label" for="email">contact information</label>
          <div :class="{ 'control': true }">
            <input v-model="email" class="input-style" v-validate="'required|email'" :class="{'input': true, 'is-danger': errors.has('formScope.email') }" name="email" type="text" placeholder="Email">
            <p v-show="errors.has('formScope.email')" class="help is-danger">{{ errors.first('formScope.email') }}</p>
          </div>
          <div :class="{ 'control': true }">
            <input v-model="phone" class="input-style" v-validate="'required|numeric'" :class="{'input': true, 'is-danger': errors.has('formScope.phone') }" name="phone" type="text" placeholder="Phone">
            <p v-show="errors.has('formScope.phone')" class="help is-danger">{{ errors.first('formScope.phone') }}</p>
          </div>
        </div>
        <!-- ########## end of input group ########## -->
        <!-- ********** input group with radio ********** -->
        <div class="input-group">
          <label class="label" for="email">RSVP</label>
          <div class="pretty p-default p-round">
            <input name="rsvp" type="radio" checked v-model="radio" value="yes"/>
            <div class="state p-warning">
              <label class="radio-label"><span>I'm coming!</span></label>
            </div>
          </div>
          <div class="pretty p-default p-round">
            <input name="rsvp" type="radio" v-model="radio" value="maybe"/>
            <div class="state p-warning">
              <label class="radio-label"><span>Maybe</span></label>
            </div>
          </div>
          <div class="pretty p-default p-round">
            <input name="rsvp" type="radio" v-model="radio" value="no"/>
            <div class="state p-warning">
              <label class="radio-label"><span>Can't make it</span></label>
            </div>
          </div>
          <textarea placeholder="Something you'd like to add?" rows="5"></textarea>
        </div>
        <!-- ########## end of input group with radio ########## -->
        <!-- ********** input group with checkboxes ********** -->
        <div class="checkboxes-group">
          <div class="pretty p-svg p-plain p-bigger p-jelly p-curve">
            <input type="checkbox" v-model="checkOne"/>
            <div class="state">
              <span class="svg">
                <img class="svg" src="@/assets/checkbox checked.svg"/>
              </span>
              <label><span class="check-lable">Let me know about future beerups!</span></label>
            </div>
          </div>
          <div class="pretty p-svg p-plain p-bigger p-jelly p-curve">
            <input type="checkbox" v-model="checkTwo"/>
            <div class="state">
              <span class="svg">
                <img class="svg" src="@/assets/checkbox checked.svg"/>
              </span>
              <label><span class="check-lable">Remind me one day before this beerup!</span></label>
            </div>
          </div>
        </div>
        <!-- ########## end of input group with checkboxes ########## -->
        <button class="button-primary joinup-fix">Join up</button>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Join',
  data () {
    return {
      name: null,
      email: null,
      phone: null,
      radio: 'yes',
      checkOne: false,
      checkTwo: false
    }
  },
  methods: {
    registerUser (scope) {
      // check if user filled all fields
      this.$validator.validateAll(scope).then((result) => {
        if (result) {
          // show progress bar & reset fields
          this.$Progress.start()
          setTimeout(this.resetFields, 3000)
          return
        }
        // scroll to the top of form
        window.scrollBy(0, document.getElementById('main-form').getBoundingClientRect().y)
      })
    },
    resetFields () {
      // reseting fields and validator
      this.name = null
      this.email = null
      this.phone = null
      this.radio = 'yes'
      this.checkOne = false
      this.checkTwo = false
      this.$validator.reset('formScope')
      this.$Progress.finish()
    }
  }
}
</script>
