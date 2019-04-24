Rails.application.routes.draw do
  devise_for :users
  root 'users#new'
  resources :users
  resources :restaurants 

  post "users/favorite" => "users#favorite"
end
