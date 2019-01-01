Ext.define('MoreCowbell', {
    extend: 'Rally.app.App',
    componentCls: 'app',
    layout: 'fit',

    launch: function() {
        this.add({
            xtype: 'component',
            autoEl: {
                tag: 'iframe',
                frameborder: 0,
                src: 'https://player.vimeo.com/video/288473543?autoplay=1#t=88s'
            }
        });
    }
});
