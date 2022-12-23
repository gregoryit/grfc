<template>
  <div class="auth__layer"></div>
  <div class="auth">
    <div class="auth__content">
      <p class="auth__title">Авторизация</p>
      <form class="auth__search-form" method="post">
        <input type="hidden" name="csrfmiddlewaretoken" :value="token">
        <div class="form-group">
          <input
            type="text"
            v-model="login"
            class="form-control"
            placeholder="Логин"
            name="username"
          />
        </div>
        <div class="form-group">
          <input
            type="password"
            v-model="password"
            class="form-control"
            placeholder="Пароль"
            name="password"
          />
        </div>
        <button type="submit" class="btn btn-primary" @click="isValidAuth">
          Войти
        </button>
      </form>
      <div class="auth__line"></div>
      <p class="auth__comment">
        Нажимая на кнопку, вы принимаете условия пользовательского соглашения
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AuthPage',
  data() {
    return {
      login: '',
      password: '',
      token: this.$cookies.get("csrftoken"),
    };
  },
  methods: {
    isValidAuth() {
      console.log(this.token);
      if ((this.login === 'login', this.password === '0000')) {

        this.$router.push('/');
      }
    },
  },
});
</script>

<style scoped lang="scss">
.auth__layer {
  position: absolute;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(to bottom, #0061e9 30%, #00398e 70%);
  opacity: 0.2;
  z-index: 0;
}
.auth {
  width: 100vw;
  height: 100vh;
  background-image: url(../assets/auth/auth-bg.jpg);
  background-size: cover;
}
p {
  font-family: 'Raleway';
  font-style: normal;
}
.auth__content {
  position: relative;
  width: 429px;
  height: 400px;
  background: linear-gradient(180deg, #000955 0%, rgba(0, 70, 85, 0.9) 100%);
  border-radius: 6px;
  margin: 173px auto 0;
  z-index: 1000;
}
.auth__title {
  padding-top: 32px;
  text-align: center;
  font-weight: 500;
  font-size: 25px;
  line-height: 29px;
  color: rgba(255, 255, 255, 0.8);
}
.form-control {
  margin-top: 36px;
  border-radius: 37px;
  width: 375px;
  height: 42px;
  border: none;
}
.form-control:last-child {
  margin-top: 18px;
}
input {
  text-indent: 18px;
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;
  letter-spacing: 0.08em;
}
.auth__search-form {
  text-align: center;
}
.btn-primary {
  margin-top: 36px;
  width: 376px;
  height: 41px;
  background: #c0c6fc;
  border-radius: 37px;
  border: none;
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;
  letter-spacing: 0.08em;
  color: rgba(0, 0, 0, 0.5);
}
.btn:hover,
.btn:focus,
.btn:active {
  opacity: 0.75;
}

.auth__line {
  margin: 28px auto 0;
  height: 2px;
  width: 328px;
  background: rgba(217, 217, 217, 0.5);
  border-radius: 50px;
}
.auth__comment {
  margin-top: 21px;
  font-weight: 300;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: #ffffff;
  opacity: 0.5;
}
</style>
