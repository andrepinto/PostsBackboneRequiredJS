define(['backbone'], function(Backbone){

	var Post = Backbone.View.extend({
		className:'post',

		render: function(){
			this.$el.append(
				'<h2>'+this.model.get('title')+'</h2>'
			);

			return this;
		}
	});

	return Post;

});