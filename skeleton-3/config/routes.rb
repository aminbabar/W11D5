Rails.application.routes.draw do
  # Your routes here!

  namespace :api, defaults: { format: :json } do
  # Your routes here
    resources :guests, only: [:show, :index] do
      resources :gifts, only: [:index]
    end

    resources :gifts, only: [:show]

    resources :parties, only: [:index, :show]
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
