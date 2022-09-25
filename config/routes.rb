Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  # post "/login", to: "sessions#create"
  # get "/me", to: "user#show"
  # get "/users", to: "user#index"

  get "/me", to: "users#show"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  get "/rewards", to: "rewards#index"


end
