Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:show, :create]
    resource :session, only: [:create, :destroy]
    resources :posts, only: [:index, :show, :create, :update, :destroy]
    resources :likes, only: [:create]
    resources :follows, only: [:create, :destroy]
    delete 'likes/delete', to: 'likes#destroy'

    # resources :notes, only: [:show, :create, :destroy, :update]
    
  end


  root "static_pages#root"

end
