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
import { Article } from '@/domain/article/article';
import { defineAsyncComponent, defineComponent } from 'vue'

export default defineComponent({
  name: 'Home',
  components: {
    Article: defineAsyncComponent(() => import('@/ui/components/shared/Article.vue'))
  },
  setup() {
    const articles: Article[] = [
      new Article(1, 1, 1, 'Article 1', 'Desc 1'),
      new Article(2, 1, 1, 'Article 2', 'Desc 2'),
      new Article(3, 1, 1, 'Article 3', 'Desc 3'),
      new Article(4, 1, 1, 'Article 4', 'Desc 4'),
    ];
   
    return {
      articles
    }
  }
})
</script>
