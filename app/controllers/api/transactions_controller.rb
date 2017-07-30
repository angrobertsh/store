class Api::TransactionsController < ApplicationController

  def index
    @transactions = current_user.transactions.reverse
  end

  def create
    @transaction_params = buyer_transaction_params.values
    @transactions = @transaction_params.map {|transaction_param|
      @transaction = Transaction.new(transaction_param)
      @item = Item.find(transaction_param[:item_id])
      if @transaction.valid?
        if @item.update!({current_amount: @item.current_amount - transaction_param[:item_amount].to_i})
          @transaction.save
          @transaction
        else
          {errors: @item.errors.full_messages, item_amount: transaction_param[:item_amount], item_name: @item.name}
        end
      else
        {errors: @transaction.errors.full_messages, item_amount: transaction_param[:item_amount], item_name: @item.name}
      end
    }
    render "api/transactions/index"
  end

  # Unused patch on Transactions
  # def update
  #   @transaction = Transaction.find(merchant_transaction_params[:id])
  #   if @transaction.update(success: single_transaction_params[:success])
  #     render "api/transactions/show"
  #   else
  #     @errors = @transaction.errors.full_messages
  #     render_errors(@errors)
  #   end
  # end

  private

  def buyer_transaction_params
    keys = params[:transactions].keys
    properties = [:email, :item_id, :item_amount, :success, :stripe_token]
    all_permitted = keys.map{|key| {key => properties}}
    params.require(:transactions).permit(*all_permitted)
  end

  def merchant_transaction_params
    params.require(:transactions).permit(:id)
  end

  def ensure_logged_in
    if current_user.id != Transaction.find(merchant_transaction_params[:id]).item.merchant.id
      @errors = ["Unable to see other merchant's transactions."]
      render "api/shared/error"
    end
  end

end
