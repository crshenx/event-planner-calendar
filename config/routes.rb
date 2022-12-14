Rails.application.routes.draw do

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  get '/hello', to: 'application#hello_world'


  
  resources :sessions
  resources :pays
  resources :details
  resources :events
  resources :planners
  resources :users

  post '/signup', to: 'users#create'

  post "/login", to: "sessions#create"

  delete "/logout", to: "sessions#destroy"

  get "/me", to: "users#show"

  get '/events', to: "events#show"

  post '/events', to: 'events#create'

  post 'planners', to: "planners#create"

  get '*path',
  to: 'fallback#index',
  constraints: ->(req) { !req.xhr? && req.format.html? }

end
