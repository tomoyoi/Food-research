class RestaurantsController < ApplicationController
  def index
    @images = Image.all
  end

  def new
    @rating = Rating.new
    @image = Image.new
  end

  def create
    rating = Rating.new(rating_params)
    rating.save!
    image = Image.new(image_params)
    image.save!
    redirect_to controller: 'users', action: 'index' 
  end

  def show
  end

  private
  def rating_params
    params.require(:rating).permit(:price, :taste, :service, :atmosphere, :comment, :user_id, :restaurant_id )
  end

  def image_params
    params.require(:image).permit(:image, :user_id, :restaurant_id )
  end
end