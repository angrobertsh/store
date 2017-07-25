class Api::TransactionsController < ApplicationController

  def index
    @transactions = current_user.transactions
  end

  def create
    @transaction_params = buyer_transaction_params.values
    @transactions = @transaction_params.map {|transaction_param|
      @transaction = Transaction.new(transaction_param)
      if @transaction.save
        @transaction
      else
        {errors: @transaction.errors.full_messages}
      end
    }

    render "api/transactions/index"
  end

  def update
    @transaction = Transaction.find(merchant_transaction_params[:id])
    @transaction.update(success: single_transaction_params[:success])
    if @transaction.save!
      render "api/transactions/show"
    else
      @errors = @transaction.errors.full_messages
      render_errors(@errors)
    end
  end

  private

  def buyer_transaction_params
    keys = params[:transactions].keys
    properties = [:email, :item_id, :amount, :id, :success]
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
