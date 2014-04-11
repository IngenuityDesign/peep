class CustMailer < ActionMailer::Base
  default from: "noreply@peepapp.com"

  def newsletter(cust)
    @cust = cust
    mail to: "jl@jlynch.co", subject: "Test", bcc: ["jl@jlynch.co"] ,cc: [""]
  end

end