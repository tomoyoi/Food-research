class RestaurantsController < ApplicationController
  def index
  end

  def new
    @rating = Rating.new
    @image = Image.new
  end

  def create
    rating = Rating.new(rating_params)
    rating.save!
  end

  def show
  end

  private
  def rating_params
    params.require(:rating).permit(:price, :taste, :service, :atmosphere, :comment, :user_id, :restaurant_id )
  end
end