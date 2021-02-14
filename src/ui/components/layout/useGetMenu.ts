import { ref, Ref } from 'vue'

export function useGetMenu() {
  const items: Ref<object[]> = ref([])

  return {
    items
  }
}