class PostsController < ApplicationController

  respond_to :html, :json

  def index
    @posts = Post.select([:title, :slug])
    # if request.xhr?
    #   render :json => @posts
    # end

    # respond_to do |format|
    #   format.html
    #   format.json { render :json => @posts }
    # end

    respond_with(@posts)
  end

  def show
    @post = Post.find_by_slug(params[:id])
    respond_with(@post)
  end

end