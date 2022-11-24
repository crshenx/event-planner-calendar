class FixAddressInEvents < ActiveRecord::Migration[7.0]
  def change
    rename_column :events, :addess, :address
    #Ex:- rename_column("admin_users", "pasword","hashed_pasword")
  end
end
