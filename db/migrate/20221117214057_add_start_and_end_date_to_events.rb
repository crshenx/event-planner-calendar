class AddStartAndEndDateToEvents < ActiveRecord::Migration[7.0]
  def change
    add_column :events, :start_date, :datetime
  end
end
