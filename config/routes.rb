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
  delete "/users/:id", to: "users#destroy"
  
  get "/restaurants", to: "restaurants#show"
  get "/restaurants/:id", to: "restaurants#each"
  post "/restaurants", to: "restaurants#like"
  delete "/restaurants/:id", to:"restaurants#destroy"

  get "/visitations", to: "visitations#show"

  get "/notes/:id", to: "notes#show"
  post "/notes", to: "notes#create"
  delete "/notes/:id", to: "notes#destroy"
  # patch "/notes/:id", to: "notes#update"
end
