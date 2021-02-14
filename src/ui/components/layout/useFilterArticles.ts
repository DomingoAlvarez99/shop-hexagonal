import { ref, Ref, watch } from 'vue'
import { filterArticles } from '@/container'

export function useFilterArticles() {
  const filter: Ref<string> = ref('')

  watch(filter, (newValue) => {
    filterArticles.execute(newValue)
  })

  return {
    filter
  }
}