import PrimeVue from 'primevue/config';
import 'primevue/resources/themes/mdc-light-indigo/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import InputText from 'primevue/inputtext';
import Menubar from 'primevue/menubar';
import MegaMenu from 'primevue/megamenu';
import Badge from 'primevue/badge';
import ScrollPanel from 'primevue/scrollpanel';
import Card from 'primevue/card';
import Button from 'primevue/button';
import ToastService from 'primevue/toastservice';
import Toast from 'primevue/toast';
import { defineAsyncComponent } from 'vue';

const Sidebar = defineAsyncComponent(() => import('primevue/sidebar'))

export const primeVue: any = (app :any) => {
  return app.use(PrimeVue, {ripple: true})
    .use(ToastService)
    .component('InputText', InputText)
    .component('Menubar', Menubar)
    .component('MegaMenu', MegaMenu)
    .component('Badge', Badge)
    .component('Sidebar', Sidebar)
    .component('ScrollPanel', ScrollPanel)
    .component('Card', Card)
    .component('Button', Button)
    .component('Toast', Toast);
}