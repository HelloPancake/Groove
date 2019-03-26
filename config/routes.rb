Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:show, :create]
    resources :session, only: [:create, :destroy]
    resources :posts, only: [:show, :create, :edit, :destroy]
    resources :notes, only: [:show, :create, :destroy, :update]
    resources :likes, only: [:create, :destroy]
    resources :follows, only: [:create, :destroy]
  end



  root "static_pages#root"

end
