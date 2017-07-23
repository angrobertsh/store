Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root 'static_pages#root'
  namespace :api, defaults: {format: :json} do
    resources :items, only: [:index, :show, :create, :edit, :update, :destroy]
    resources :transactions, only: [:index, :create, :update]
    resources :merchants, only: [:index, :create]
    resource :session, only: [:create, :destroy]
  end

end
