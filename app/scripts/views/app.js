define(['backbone','collections/posts','views/posts', 'router'],
        function(Backbone, PostCollection, PostsView, MainRouter){
    
    var AppView = Backbone.View.extend({
        el:'body',
        initialize: function(){

            var data = [
                {title:'post 1'},
                {title:'post 2'}
            ];

            new PostsView({
                collection: new PostCollection(data)
            });

            App.router = new MainRouter();
            Backbone.history.start();
        }
    });

    return AppView;
});