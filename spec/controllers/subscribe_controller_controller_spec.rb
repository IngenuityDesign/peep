require 'spec_helper'

describe SubscribeControllerController do

  describe "GET 'subscribe'" do
    it "returns http success" do
      get 'subscribe'
      response.should be_success
    end
  end

end
