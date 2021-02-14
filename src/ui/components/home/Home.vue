<template>
  <div class="home">
    <div class="p-grid">
      <div
        v-for="article in articles"
        :key="article.getId()"
        class="p-col-4"
      >
        <Article :article="article" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { getArticles } from '@/container';
import { Article } from '@/domain/article/article';
import { defineAsyncComponent, defineComponent, Ref, ref } from 'vue'

export default defineComponent({
  name: 'Home',
  components: {
    Article: defineAsyncComponent(() => import('@/ui/components/shared/Article.vue'))
  },
  setup() {
    const articles: Ref<Article[]> = ref([])
  
    articles.value = getArticles.execute()

    return {
      articles
    }
  }
})
</script>
