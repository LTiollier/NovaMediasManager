import VueSweetalert2 from 'vue-sweetalert2';

Nova.booting((Vue, router) => {
    Vue.use(VueSweetalert2);
    router.addRoutes([
        {
            name: 'medias-manager',
            path: '/medias-manager',
            component: require('./components/MediasManagerTool').default,
        },
    ]);
});