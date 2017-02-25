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
                src: 'https://player.vimeo.com/video/121869713?autoplay=1&quality=720p#t=1m48s'
            }
        });
    }
});
