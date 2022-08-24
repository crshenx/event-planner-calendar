class RemoveBussinessNameFromUsers < ActiveRecord::Migration[7.0]
  def change
    remove_column :users, :business_name, :string
  end
end
