class RatingsController < ApplicationController
  def index
  end

  def show
    rating = Rating.all
  end

  def update
    Rating.update(rating_params)
  end

end
