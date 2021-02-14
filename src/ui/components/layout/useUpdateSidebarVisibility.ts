import { ref, Ref } from 'vue'

export function useUpdateSidebarVisibility() {
  const isVisible: Ref<boolean> = ref(false)

  const updateVisibility = () => {
    isVisible.value = !isVisible.value;
  }

  return {
    isVisible,
    updateVisibility
  }
}