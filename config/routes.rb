Rails.application.routes.draw do
  devise_for :users
  root 'users#new'
  resources :users
  resources :restaurants, only: [:show]
end
