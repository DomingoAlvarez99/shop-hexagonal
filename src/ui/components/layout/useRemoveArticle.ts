import { removeArticle as removeArticleUseCase } from '@/container'
import { Article } from '@/domain/article/article'
import { useToast } from 'primevue/usetoast'

export function useRemoveArticle() {
  const toast = useToast();

  const showToast = () => {
    toast.add({
      severity: 'success',
      summary: 'Article deleted',
      detail: 'The article has been deleted successfully!',
      group: 'ad',
      life: 3000
    });
  }

  const removeArticle = (article: Article) => {
    removeArticleUseCase.execute(article);
    showToast();
  }

  return {
    removeArticle
  }
}