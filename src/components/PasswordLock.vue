<template>
  <div v-if="!unlocked" class="password-lock">
    <div class="lock-box">
      <h2>请输入访问密码</h2>
      <input
        type="password"
        v-model="inputPassword"
        placeholder="输入密码"
        @keyup.enter="checkPassword"
      />
      <button @click="checkPassword">确认</button>
      <p v-if="error" class="error">密码错误，请重试</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "PasswordLock",
  data() {
    return {
      inputPassword: "",
      correctPassword: "123456", // ★ 你要设置的密码
      error: false,
      unlocked: false,
    };
  },
  created() {
    // 已经解锁过？
    if (localStorage.getItem("website_unlocked") === "true") {
      this.unlocked = true;
    }
  },
  methods: {
    checkPassword() {
      if (this.inputPassword === this.correctPassword) {
        this.unlocked = true;
        localStorage.setItem("website_unlocked", "true");
      } else {
        this.error = true;
      }
    }
  }
};
</script>

<style scoped>
.password-lock {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(15px);
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99999;
}

.lock-box {
  background: white;
  padding: 2rem 3rem;
  border-radius: 12px;
  text-align: center;
  width: 300px;
}

input {
  width: 100%;
  padding: 10px;
  margin-top: 15px;
  font-size: 1.1rem;
}

button {
  margin-top: 15px;
  padding: 10px 20px;
  font-size: 1.1rem;
  cursor: pointer;
}

.error {
  color: red;
  margin-top: 10px;
}
</style>
