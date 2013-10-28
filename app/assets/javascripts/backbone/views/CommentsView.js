var app = app || {};

app.CommentsView = Backbone.View.extend({
  // This is the tag type that each of our post titles will be nested under
  tagName: 'li',

  // our render function; populates the template with object data onto the page
  render: function() {
    // Generate the handlebars template from our templates object
    var template = Handlebars.compile($('#comment-list-view-template').html());
    // Generate the post list view html from the object data.  The .toJSON() function pulls out the data object from the model, and is important here because the templating system accepts an object of key:value pairs
    var html = template(this.model.toJSON());
    // this.$el refers to an auto-generated jQuery-selected element based on our tagName
    this.$el.html(html);

    // Returning the object is a good practice so we can do chaining
    return this;
  }

});
