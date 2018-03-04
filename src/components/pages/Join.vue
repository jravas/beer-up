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
<style lang="scss">
.join-container {
    background-color: #F7F7F7;
    margin-top: -360px;
    padding-top: 30px;
    padding-bottom: 100px;
    position: relative;
    .join-wrap {
      max-width: 552px;
      width: 100%;
      margin: 0 auto;
    }
    h3 {
        font-family: 'Montserrat';
        font-size: 30px;
        font-weight: 500;
        line-height: 48px;
        color: #212121;
        text-align: center;
    }
    .join-card {
      position: relative;
      margin-top: 30px;
      padding: 5px 10px;
      background-color: #fff;
      box-shadow: 0 4px 8px 0 rgba(0,0,0,0.08);
      border-radius: 4px;
      // ****** input group styles *****
      .input-group {
        padding: 0 30px;
        padding-bottom: 16px;
        border-bottom: 1px solid #D8D8D8;
        .label {
          display: block;
          padding-top: 40px;
          padding-bottom: 24px;
          font-size: 14px;
          line-height: 17px;
          font-family: 'Montserrat';
          font-weight: 700;
          color: #292929;
          text-transform: uppercase;
        }
        .control {
          margin-bottom: 24px;
        }
        .input-style {
          padding: 18px;
          width: 280px;
          // height: 52px;
          border: none;
          border-radius: 4px;
          background-color: #FCFCFC;
          box-shadow: inset 0 1px 2px 0 rgba(0,0,0,0.32);
          outline: none;
          border: 1px solid transparent;
          &:focus {
            border: 1px solid #F05638;
          }
        }
        p {
          margin-top: 10px;
          font-family: 'Open Sans';
          font-size: 14px;
          color: #F05638;
        }
        // radio styles
        .pretty {
          display: block;
          margin-bottom: 16px;
          font-family: "Open Sans";
          font-size: 14px;
          .radio-label {
            span {
              margin-left: 12px;
            }
          }
        }
        textarea {
          width: 100%;
          margin: 8px 0;
          padding: 18px;
          font-family: "Open Sans";
          font-size: 14px;
          line-height: 19px;
          resize: none;
          border-radius: 4px;
          background-color: #FCFCFC;
          box-shadow: inset 0 1px 2px 0 rgba(0,0,0,0.32);
          border: 1px solid transparent;
          outline: none;
          -moz-box-sizing: border-box;
          -webkit-box-sizing: border-box;
          box-sizing: border-box;
          &:focus {
            border: 1px solid #F05638;
          }
        }
      }
      .checkboxes-group {
        padding: 30px;
        padding-bottom: 40px;
        .pretty {
          margin-bottom: 24px;
          font-family: "Open Sans";
          font-size: 14px;
          .check-lable {
            margin-left: 12px;
          }
        }
      }
      // button fix
      .joinup-fix {
        padding: 20px 85px;
        display: block;
        margin: 0 auto;
        margin-bottom: -33.5px;
      }
      // ##### end of input group styles #####
    }
}
</style>
