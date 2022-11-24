class ChangeStartDateToString < ActiveRecord::Migration[7.0]
  def change
    change_column :events, :start_date, :string
    
  end
end
