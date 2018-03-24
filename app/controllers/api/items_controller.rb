class Api::ItemsController < ApplicationController
  before_action :authenticate_user!
  before_action :set_item, only: [:show]
  
  def index
    render json: Item.set_name
  end

  private 
    def set_item
      Item.set_name
      @item = Item.find(params[:id])
    end

    def item_params
      params.require(:item).permit(:name, :price)
    end
end
