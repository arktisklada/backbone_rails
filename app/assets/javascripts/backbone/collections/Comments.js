var app = app || {}

app.Comments = Backbone.Collection.extend({

  model: app.Comment,

  post_id: null,

  // /posts/:post_id/comments
  url: function() {
    return '/posts/' + this.post_id + '/comments/';
  }

});