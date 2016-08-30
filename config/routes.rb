Rails.application.routes.draw do

  root 'projects#index'
  
  resources :projects do
    resources :issues
  end

end
