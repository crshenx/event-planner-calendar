class FallbackController < ActionController
    def index
      render file: 'public/index.html'
    end
  end
