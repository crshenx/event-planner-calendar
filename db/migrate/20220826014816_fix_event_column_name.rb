class FixEventColumnName < ActiveRecord::Migration[7.0]
  def change
    rename_column :events, :type, :type_of_event
  end
end
