<template>
  <div>
    <Menubar :model="items">
      <template #end>
        <span class="p-input-icon-left">
          <i class="pi pi-search" />
          <InputText
            type="text"
            v-model="filter"
            placeholder="Search"
          />
        </span>
        <span
          class="shopping-cart-icon-container"
        >
          <i 
            class="pi pi-shopping-cart p-text-secondary shopping-cart-icon"
            @click="updateVisibility"
          >
            <Badge
              :value="`${shoppingCart.getArticles().length}`"
              class="shopping-cart-badge p-mr-2"
            >
            </Badge>
          </i>
        </span>
      </template>
    </Menubar>
    <Sidebar
      v-model:visible="isVisible"
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
                @click="removeArticle(entry[0])"
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
import { defineComponent } from 'vue'
import { useRemoveArticle } from './useRemoveArticle';
import { useUpdateSidebarVisibility } from './useUpdateSidebarVisibility';
import { useGetShoppingCart } from './useGetShoppingCart';
import { useGetMenu } from './useGetMenu';
import { useFilterArticles } from './useFilterArticles';

export default defineComponent({
  name: 'TopBar',
  setup() {
    const { removeArticle } = useRemoveArticle();
    const { isVisible, updateVisibility } = useUpdateSidebarVisibility();
    const { shoppingCart } = useGetShoppingCart();
    const { items } = useGetMenu();
    const { filter } = useFilterArticles();

    return {
      items,
      shoppingCart,
      isVisible,
      updateVisibility,
      removeArticle,
      filter
    }
  }
})
</script>

<style lang="scss" scoped>
  .shopping-cart-icon-container {
    vertical-align: middle!important;
    margin-left: 3rem;
  }
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
    vertical-align: middle;
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