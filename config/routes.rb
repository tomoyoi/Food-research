Rails.application.routes.draw do
  devise_for :users
  root 'users#new'
  resources :users
  resources :restaurants 
  resources :ratings
end
