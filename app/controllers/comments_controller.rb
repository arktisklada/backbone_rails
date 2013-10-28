class CommentsController < ApplicationController

  # /posts/:post_id/comments
  def index
    @comments = Comment.select([:post_id, :content, :created_at]).where(post_id: params[:post_id])

    respond_to do |format|
      format.json { render json: @comments }
    end
  end

  # /posts/:post_id/comments/:id
  def show
  end

  # /posts/:post_id/comments
  def create

  end

end