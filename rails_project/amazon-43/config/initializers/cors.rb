Rails.application.config.middleware.insert_before 0, Rack::Cors do
    allow do
        origins 'localhost:9999', 'localhost:3000'

        resource(
            '/api/*', 
            headers: :any, 
            credentials: true, 
            methods: [:get, :post, :patch, :put, :delete, :options ] 
        )
    end
end