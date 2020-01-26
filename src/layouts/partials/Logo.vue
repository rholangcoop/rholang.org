<template>
  <div class="logo" @contextmenu="rightClick" oncontextmenu="return false;">
    <g-link class="logo__link" to="/" title="Back to home">
      <g-image
        class="logo__svg hide-for-small"
        alt="Rholang.org"
        src="~/assets/images/rholang-logo.png"
        width="200px"
      />
      <g-image
        class="logo__svg show-for-small logo__svg--small"
        alt="Rholang.org"
        src="~/assets/images/rholang-logo-small.png"
        width="200px"
      />
    </g-link>
  </div>
</template>

<script>
export default {
  components: {},
  methods: {
    rightClick() {
      this.$router.push({ path: "/logo" });
      return false;
    }
  }
};
</script>

<style lang="scss">
.logo {
  &__svg {
    max-width: 100px;
    max-height: 60px;
    margin-top: 20px;
    &--small {
      margin-top: 30px;
      max-width: 40px;
      max-height: 45px;
    }
  }
}
</style>
