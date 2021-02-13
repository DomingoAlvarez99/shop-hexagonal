<template>
  <div>
    <Menubar :model="items">
      <template #end>
        <i 
          class="pi pi-shopping-cart p-text-secondary shopping-cart-icon"
          @click="updateSidebarVisibility"
        >
          <Badge
            :value="`${shoppingCart.getArticles().length}`"
            class="shopping-cart-badge p-mr-2"
          >
          </Badge>
        </i>
      </template>
    </Menubar>
    <Sidebar
      v-model:visible="sidebarVisible"
      :baseZIndex="1000"
      position="right"
      :showCloseIcon="false"
    >
      <h3 class="shopping-cart-title">Shopping cart</h3>
      <ScrollPanel style="width: 100%; height: 925px">
        <div
          class="article-container"
          v-for="entry in shoppingCart.getArticlesGroupedById().entries()"
          :key="entry"
        >
          <p 
            class="article-item"
          >
            {{entry[0].getName()}}
            <span>
              <i 
                class="pi pi-trash p-text-secondary delete-item-icon"
                @click="removeItem(entry[0])"
              />
            </span>
          </p>
          <p class="article-units">
            Unidades: <span>{{entry[1]}}</span>
          </p>
        </div>
      </ScrollPanel>
    </Sidebar>
    <Toast position="top-left" group="ad" />
  </div>
</template>

<script lang="ts">
import { ShoppingCart } from '@/domain/shopping-cart/shopping-cart'
import { defineComponent, ref, Ref } from 'vue'
import { getShoppingCart, removeArticle, } from '@/container'
import { Article } from '@/domain/article/article'
import { useToast } from 'primevue/usetoast'

export default defineComponent({
  name: 'TopBar',
  setup() {
    const items: Ref<object[]> = ref([])
    const sidebarVisible: Ref<boolean> = ref(false)
    const shoppingCart: Ref<ShoppingCart> = ref({} as any)
    shoppingCart.value = getShoppingCart.execute()

    const updateSidebarVisibility = () => {
      sidebarVisible.value = !sidebarVisible.value;
    }

    const showToast = () => {
      toast.add({
        severity: 'success',
        summary: 'Article deleted',
        detail: 'The article has been deleted successfully!',
        group: 'ad',
        life: 3000
      });
    }

    const removeItem = (article: Article) => {
      removeArticle.execute(article);
      showToast();
    }

    const toast = useToast();

    return {
      items,
      shoppingCart,
      sidebarVisible,
      updateSidebarVisibility,
      removeItem
    }
  }
})
</script>

<style lang="scss" scoped>
  .shopping-cart-icon {
    cursor: pointer;
    font-size: 2rem;
  }
  .shopping-cart-badge {
    vertical-align: top;
    user-select: none;
  }
  i:hover {
    color: $secondaryColor;
  }
  .shopping-cart-title {
    text-align: center;
    margin-bottom: 3rem;
  }
  .article-container {
    vertical-align: middle!important;
    font-size: 1.1rem;
    padding: 0 1rem;
    border-bottom: 1px solid gainsboro;
  }
  .article-units {
    font-size: 0.85rem;
    color: gray;

    span {
      float: right;
    }
  }
  .delete-item-icon {
    cursor: pointer;
    float: right;
  }
  .delete-item-icon:hover {
    color: red
  }
</style>