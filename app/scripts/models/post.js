define(['backbone'], function(Backbone){

	var Post = Backbone.Model.extend({
		defaults:{
			title:'post',
			subTitle:''
		}
	});

	return Post;

});