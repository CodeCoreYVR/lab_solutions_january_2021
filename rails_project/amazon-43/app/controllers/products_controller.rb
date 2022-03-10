class ProductsController < ApplicationController
    before_action :authenticate_user!, except: [:index, :show]
    before_action :find_product, only: [:edit, :update, :show, :destroy]
    before_action :authorize_user!, only: [:update,:destroy]
    def index
        @products = Product.all
    end

    def new
        @product = Product.new
    end

    def create
        @product = Product.new product_params
        @product.user = current_user
        if @product.save
            # alert, notice 
            # flash["notice"] = "Created!"
            # flash.notice = "Created!"
            redirect_to product_path(@product.id), notice: "Created"
        else
            render :new
        end
    end

    def show
        @reviews = @product.reviews
        @review = Review.new
    end

    def destroy
        @product.destroy
        redirect_to products_path, alert: "Deleted!"
    end

    def edit

    end

    def update
        if @product.update product_params
            redirect_to product_path(@product.id)
        else
            render :edit
        end
    end

    private

    def product_params
        params.require(:product).permit(:title,:description,:price)
    end

    def authorize_user!
        redirect_to root_path, alert: "Not authorized!" unless can?(:crud, @product)
    end
    
    def find_product
        @product = Product.find(params[:id])
    end
    
end
