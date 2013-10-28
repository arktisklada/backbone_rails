var app = app || {};

app.Comment = Backbone.Model.extend({

  // /posts/:post_id/comments
  url: function() {
    return '/posts/' + this.get('post_id') + '/comments/';
  }

});