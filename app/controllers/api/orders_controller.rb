class Api::OrdersController < ApplicationController
  before_action :authenticate_user!
  before_action :set_post, only: [:show, :update]
  
  def index
    Order.set_order
  end
  
  private 
  def set_order
    Order.set_name
    @order = Order.find(params[:id])
  end

  def order_params
    params.require(:order).permit()
  end
end
