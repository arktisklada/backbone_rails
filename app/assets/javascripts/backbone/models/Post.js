var app = app || {};

// Create a model for the posts
app.Post = Backbone.Model.extend({
  // Let's look up our blog post by slug instead of id
  idAttribute: 'slug',
  // Posts have a title and content, and here we set default values
  defaults: {
    title: 'New post'
  },
  comments: new Array(),

  urlRoot: '/posts',

  fetchComments: function() {
    this.comments = new app.Comments();
    this.comments.post_id = this.get('id');
    var model = this;
    this.comments.fetch().done(function() {
      model.trigger('comments');
    });
  }

});
