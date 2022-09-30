Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  # post "/login", to: "sessions#create"
  # get "/me", to: "user#show"
  # get "/users", to: "user#index"

  get "/me", to: "users#show"
  post "/login", to: "sessions#create"
  post "/signup", to: "users#create"
  delete "/logout", to: "sessions#destroy"

  get "/users", to: "users#index"
  patch "/users/:id", to: "users#update"
  get "/users/:id", to: "users#look"
  post "/users/:id", to: "users#like"
  
  get "/restaurants", to: "restaurants#show"
  post "/restaurants", to: "restaurants#like"

  get "/rewards", to: "rewards#index"

  get "/visitations", to: "visitations#show"
end
