class UsersController < ApplicationController
  protect_from_forgery except: :favorite
  def index
    @images = Image.all
  end

  def show
    @ratings = Rating.all
    @images = Image.all
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

  def favorite
    id = current_user.id
    guruid = params[:guruid]
    name   = params[:name]

    Restaurant.create!(user_id: id, guruid: guruid, name: name)
  end

private
  def user_params
    params.require(:user).permit(:name, :password, :email)
  end
end
