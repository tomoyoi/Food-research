class UsersController < ApplicationController

  def index
  end

  def show
    @rating = Rating.new
  end
  
  def create
    Rating.create(create_parmas)
    render action: :show
  end

  def edit
  end

  def update
    if current_user.update(user_params)
      redirect_to root_path
    else
      render :edit
    end
  end

  private

  def user_params
    params.require(:user).permit(:name, :email)
  end

  def create_params
    params.require(:rating).permit(:price, :taste, :service, :atmosphere, :overall)
  end
end