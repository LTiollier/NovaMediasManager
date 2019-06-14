import VueSweetalert2 from 'vue-sweetalert2';
import VueAPlayer from '@moefe/vue-aplayer';
import VuePlyr from 'vue-plyr';
import 'vue-plyr/dist/vue-plyr.css';

Nova.booting((Vue, router) => {
    Vue.use(VueSweetalert2);
    Vue.use(VueAPlayer, {
        defaultCover: '',
    });
    Vue.use(VuePlyr);
    router.addRoutes([
        {
            name: 'medias-manager',
            path: '/medias-manager/:folderId?',
            component: require('./components/MediasManagerTool').default,
        },
    ]);
});