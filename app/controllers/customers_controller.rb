class CustomersController < ApplicationController
  require 'rubygems'

  def newsletter
  	@cust = Customer.new(params[:customer])
  	CustMailer.newsletter(@cust).deliver
  	if @cust.save
      redirect_to root_path, :notice => "Thank you for Signing Up!"
    else
      redirect_to root_path, :alert => "Something went wrong. Please try again. Thank you."
    end
  end

end
