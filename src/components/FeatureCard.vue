<template>
  <Card class="blog-posts__post" :link="link">
    <slot />
  </Card>
</template>

<script>
import PostMeta from "./PostMeta.vue";

export default {
  components: {
    PostMeta
  },
  props: ["link"]
};
</script>

<style lang="scss">
.blog-posts {
  &__post {
    position: relative;
    margin-bottom: 2rem;
    .card__inner {
      padding: var(--space-x2);
    }
  }
}
</style>
